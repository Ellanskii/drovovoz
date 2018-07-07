<template lang="pug">
  div
    header
        navbar(:navbarEnd='navbarEnd')
    nuxt(keep-alive)
    section.section
        .container
    footer.footer#footer
</template>

<script>
    import Navbar from '~/components/Navbar.vue'

    export default {
        components: {
            Navbar
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
