<template lang="pug">
    .hero.is-fullheight.is-primary.search-container
        y-map
        suggestions
        .hero-foot.has-text-centered
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
            return {

            }
        },
        head: {
            title: "🔥 Берёзовые дрова с доставкой | Дрововоз"
        }
    }
</script>

<style>

</style>
