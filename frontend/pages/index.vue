<template lang="pug">
    div
        section.hero.is-fullheight.is-primary.search-container
            y-map
            suggestions
            .hero-foot.has-text-centered
                a(href="#how-does-it-works" v-smooth-scroll).has-text-white Как это работает?
        main.section
            article.container
                .columns.is-multiline
                    header.column.is-12
                        h1.title Берёзовые колотые дрова
                        p.subtitle Колотые, уложенные
                    .column.is-4
                        figure.image
                            img(src="/placeholder.svg" alt="Берёзовые колотые дрова")
                    .column.is-4.content
                        h2 Характеристики
                        table
                            thead
                                tr
                                    td(colspan=2) Берёзовые дрова
                            tbody
                                tr
                                    td Температура горения
                                    td ~800&nbsp;°C
                                tr
                                    td Теплотворность
                                    td 2800&nbsp;Ккал
                                tr
                                    td Длина полена
                                    td 40&nbsp;см
                            tfoot
                    .column.is-4.content
                        h2 Применение
                        p.
                            Наиболее популярный вид дров. Берёза широко распространена в наших широтах, что делает этот вид
                            топлива недорогим и легкодоступным.
                        p.
                            Высокая температура горения обеспечивает быстрое нагревание помещения, а приятный аромат добавит уюта.
                        p.
                            Стоит иметь в виду, что берёза при горении выделяет значительное количество сажи, способной оседать
                            на стенах дымохода.
                        p.
                            Распространённый выбор для топки бань, печей и каминов. Также пригодится на шашлыках или пикнике.

        aside.section#how-does-it-works
            .container
                h1.title Как это работает
                ol.columns
                    li.column.is-4
                        figure.has-text-centered
                            img(src="/placeholder.svg" alt="Берёзовые дрова недорого")
                        h2.title.is-4.is-spaced Узнайте лучшую цену поблизости
                        p.subtitle Из базы проверенных поставщиков берёзовых дров будет выбрано лучшее предложение
                    li.column.is-4
                        figure.has-text-centered
                            img(src="/placeholder.svg" alt="Купить березовые дрова ")
                        h2.title.is-4.is-spaced Сформируйте заказ
                        p.subtitle Укажите количество дров и удобное время доставки
                    li.column.is-4
                        figure.has-text-centered
                            img(src="/placeholder.svg" alt="Доставка берёзовых дров")
                        h2.title.is-4.is-spaced Закажите доставку
                        p.subtitle В течение нескольких минут с Вами свяжутся для уточнения деталей заказа
</template>

<script>
    import Suggestions from '~/components/dealerSearch/Suggestions.vue'
    import YMap from '~/components/dealerSearch/Ymap.vue'

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
