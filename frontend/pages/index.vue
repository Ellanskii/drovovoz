<template lang="pug">
    .hero.is-fullheight.is-primary.search-container
        y-map
        suggestions
        .hero-foot.has-text-centered
            a(href="#").has-text-white Как это работает?
</template>

<script>
    import Suggestions from '~/components/Suggestions.vue'
    import YMap from '~/components/Ymap.vue'

    export default {
        components: {
            Suggestions,
            YMap
        },

        data() {
            return {}
        },
        head () {
            return {
                meta: [
                    {hid: 'description', name: 'description', content: 'Доставка колотых берёзовых дров по Москве и Московской области'}
                ],

                title: '🔥 Берёзовые дрова с доставкой'
            }
        }
    }
</script>

<style>

</style>
