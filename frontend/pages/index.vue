<template lang="pug">
    .hero.is-fullheight.is-primary.search-container
        y-map
        suggestions
        .hero-foot.has-text-centered
            nuxt-link(to!="/about") О проекте
            a(href="#").has-text-white Как это работает?
</template>

<script>
    import AppLogo from '~/components/AppLogo.vue'
    import Suggestions from '~/components/Suggestions.vue'
    import YMap from '~/components/Ymap.vue'

    export default {
        components: {
            AppLogo,
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

                title: '🔥 Берёзовые дрова с доставкой',
                titleTemplate: '%s | Дрововоз'
            }
        }
    }
</script>

<style>

</style>
