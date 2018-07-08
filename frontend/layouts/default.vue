<template lang="pug">
  // TODO На момент версии 1.4.0 не работает keep-alive между разными шаблонами, поэтому приходится пользоваться одним. Не проебать, когда ситуация изменится.
  div
    header
        navbar(:navbarEnd='navbarEnd')
    nuxt(keep-alive)
    footer-component
</template>

<script>
    import Navbar from '~/components/Navbar.vue'
    import FooterComponent from '~/components/FooterComponent.vue'

    export default {
        components: {
            Navbar,
            FooterComponent
        },

        head () {
            return {
                titleTemplate: '%s | Дрововоз'
            }
        },

        data() {
            return {
                navbarStart: [],
                navbarEnd: [
                    {
                        anchor: 'О проекте',
                        href: 'about'
                    },
                    {
                        anchor: 'Контакты',
                        href: 'contacts'
                    }
                ]
            }
        }
    }
</script>
<style>

</style>
