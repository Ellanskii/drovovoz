<template lang="pug">
    yandex-map(
    v-if="showMap",
    :coords="coords",
    zoom="10",
    :controls="[]",
    :behaviors="[]",
    style="position: absolute; width: 100%; height: 100%;",
    @map-was-initialized="initHandler"
    )
        ymap-marker(
        v-for="(dealer, key) in dealers",
        :key="key",
        :markerId="key",
        marker-type="placemark",
        :coords="dealer.coords",
        :balloon="{header: 'header', body: 'body', footer: 'footer'}"
        )
</template>

<script>
    export default {
        data() {
            return {
                userCoords: '',
                placemarks: [
                    {
                        properties: {}, // define properties here
                        options: {}, // define options here
                        clusterName: "1",
                        balloonTemplate: '<div>"Your custom template"</div>',
                        callbacks: {
                            click: function () {
                            }
                        }
                    }
                ]
            }
        },

        methods: {
            initHandler(map){

//                console.log('inited')
//                obj.events.add('click', function(e){console.info(e.get('coords'))})
            }
        },

        computed: {
            showMap () {
                return this.$store.state.showMap
            },
            coords () {
                return this.$store.state.userAddress.coords
            },
            dealers () {
                return this.$store.state.dealers
            }
        },


    }
</script>

<style lang="stylus" scoped>

</style>
