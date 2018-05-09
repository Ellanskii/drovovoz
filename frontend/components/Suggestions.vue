<template lang="pug">
.search
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
    button.button.is-success.is-medium.is-rounded Найти продавца
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
            }
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
                            console.log(response)
                        })
                        .catch(error => {
                            this.isFetching = false
                            console.log(error);
                        })
                }
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .field, .search
        width 100%
</style>
