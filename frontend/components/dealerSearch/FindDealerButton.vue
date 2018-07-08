<template lang="pug">
        .helper.has-text-centered
            button.button.is-success.is-medium.is-rounded(v-if="readyForSearch", @click="startSearch()") Найти продавца
            p(v-else :class="helper.state") {{ helper.message }}
</template>

<script>
    export default {
        props: {
            readyForSearch: Boolean,
            helper: Object
        },
        data() {
            return {

            }
        },

        computed: {

        },

        methods: {
            startSearch: function () {
                this.$store.commit('toggleMap')

                this.$ga.event({
                    eventCategory: 'Search',
                    eventAction: 'showMap'
                })
            }
        }
    }
</script>

<style lang="stylus">

</style>
