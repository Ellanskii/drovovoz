<template lang="pug">
.search(:class="{'search--up': showMap}")
    b-field(label="Куда доставлять?")
        b-autocomplete(
        rounded,
        v-model="address",
        :data="data",
        placeholder="Начните вводить адрес доставки",
        icon="magnify",
        @input="getAsyncData",
        @select="option => onSelect(option)",
        :loading="isFetching",
        open-on-focus,
        size="is-medium",
        )
            template(slot="empty") {{ dummyText }}
    .helper.has-text-centered
        button.button.is-success.is-medium.is-rounded(v-if="readyForSearch", @click="$store.commit('toggleMap')") Найти продавца
        p(v-else :class="helper.state") {{ helper.message }}
</template>

<script>
    import axios from 'axios'
    import debounce from 'lodash/debounce'

    export default {
        data() {
            return {
                data: [],
                address: '',
                selected: null,
                isFetching: false,
                nothingFound: false,
                readyForSearch: false,
                helper: {
                    message: 'Введите адрес доставки, чтобы найти лучшее предложение поблизости',
                    state: ''
                },
                apiUrl: 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address',
                apiConfig: {
                    'Authorization': 'Token 3d8dc7d5eff3c5f99b0bbcd21d6aa76ea8d0278c',
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            }
        },

        computed: {
            dummyText: function () {
                if (this.address.length > 0 && this.nothingFound) {
                    return 'Не можем найти такой адрес'
                } else {
                    return 'Адрес с точностью до дома'
                }
            },
            showMap () { return this.$store.state.showMap }
        },

        methods: {
            getAsyncData: debounce(function () {
                this.isFetching = true

                axios.post(this.apiUrl, {
                    "query": this.address,
                    "count": 8
                }, {
                    headers: this.apiConfig
                })
                    .then(response => {
                        this.isFetching = false
                        this.data = Object.values(response.data.suggestions)
                        if (response.data.suggestions.length === 0) this.nothingFound = true
                    })
                    .catch(error => {
                        this.isFetching = false
                        console.log(error);
                    })
            }, 300),

            onSelect: function (option) {
                this.selected = option
                if (this.selected && this.selected.unrestricted_value) {
                    this.isFetching = true
                    axios.post(this.apiUrl, {
                        "query": this.selected.unrestricted_value,
                        "count": 1
                    }, {
                        headers: this.apiConfig
                    })
                        .then(response => {
                            this.isFetching = false
                            if (response.data.suggestions[0].data.fias_level >= 8) {
                                console.log(response)
                                this.readyForSearch = true
                                this.$store.commit('setUserAddress', {
                                    address: response.data.suggestions[0].value,
                                    coords: [+response.data.suggestions[0].data.geo_lat, +response.data.suggestions[0].data.geo_lon]
                                })
                            } else {
                                this.readyForSearch = false
                                this.helper.state = "has-text-warning"
                                this.helper.message = "Введите адрес с точностью до номера дома"
                            }

                            console.log(response.data.suggestions[0].data.geo_lon)
                            console.log(response.data.suggestions[0].data.fias_level)
                        })
                        .catch(error => {
                            this.isFetching = false
                            console.log(error);
                        })
                }
            },

        }
    }
</script>

<style lang="stylus">
    .search-container
        background url("~assets/firewood-background-highres.jpg") center bottom
        background-size cover
    .search
        background rgba(0, 0, 0, .5)
        width 100%
        position absolute
        top 50%
        transform translateY(-50%)
        transition top .3s
        &--up
            top 8px
            transform translateY(0)
            .label
                display none
        .field, .helper
            margin 0 auto
            margin-bottom 12px
            width calc(100% - 12px)
            max-width 800px
</style>
