<template lang="pug">
    div
        section.hero.is-fullheight.is-primary.search-container
            y-map
            suggestions
            .hero-foot.has-text-centered
                a(href="#how-does-it-works" v-smooth-scroll).has-text-white Как это работает?
        main.section
            article.container
                h1.title Берёзовые колотые дрова
        aside.section#how-does-it-works
            .container
                h1.title Как это работает
                ol.columns
                    li.column.is-4
                        h2.title.is-4 Узнайте лучшую цену поблизости
                        p Из базы проверенных поставщиков берёзовых дров будет выбрано лучшее предложение
                    li.column.is-4
                        h2.title.is-4 Сформируйте заказ
                        p Укажите количество дров и удобное время доставки
                    li.column.is-4
                        h2.title.is-4 Закажите доставку
                        p В течение нескольких минут с Вами свяжутся для уточнения деталей заказа
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
