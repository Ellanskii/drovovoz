<template lang="pug">
    b-field(label="Куда доставлять?")
        b-autocomplete(
        rounded,
        v-model="name",
        :data="data",
        placeholder="Начните вводить адрес доставки",
        icon="magnify",
        @input="getAsyncData",
        @select="option => selected = option",
        :loading="isFetching"
        )
            template(slot="empty") Не можем найти такой адрес
</template>

<script>
    import axios from 'axios'
    import debounce from 'lodash/debounce'

    export default {
        data() {
            return {
                data: [],
                name: '',
                selected: null,
                isFetching: false,
            }
        },
        methods: {
            getAsyncData: debounce(function () {
                this.isFetching = true

                axios.post('https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address', {
                    "query": this.name,
                    "count": 8
                }, {
                    headers: {
                        'Authorization': 'Token 3d8dc7d5eff3c5f99b0bbcd21d6aa76ea8d0278c',
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    }
                })
                    .then(response => {
                        this.isFetching = false
                        this.data = Object.values(response.data.suggestions)
                    })
                    .catch(error => {
                        this.isFetching = false
                        console.log(error);
                    })
            }, 300),
//            getAsyncData: debounce(function () {
//                this.data = []
//                this.isFetching = true
//                this.$http.get(`https://api.themoviedb.org/3/search/movie?api_key=bb6f51bef07465653c3e553d6ab161a8&query=${this.name}`)
//                    .then(({data}) => {
//                        data.results.forEach((item) => this.data.push(item))
//                        this.isFetching = false
//                    })
//                    .catch((error) => {
//                        this.isFetching = false
//                        throw error
//                    })
//            }, 500)
        }
    }
</script>

<style lang="stylus" scoped>
    .field
        width 100%
</style>
