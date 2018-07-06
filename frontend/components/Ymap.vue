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
        ymap-marker(
        markerId="user-placemark",
        marker-type="circle",
        circle-radius="160"
        hint-content="Доставить сюда",
        :marker-fill="{color: '#000000', opacity: 0.4}",
        :marker-stroke="{color: '#ff0000', width: 5}",
        :coords="coords",
        :balloon="{header: 'header', body: 'body', footer: 'footer'}"
        )
</template>

<script>
    export default {
        data() {
            return {
                map: '',
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
                this.map = map

//                console.log('inited')
//                map.events.add('click', function(e){console.info(e.get('coords'))})
                var multiRoute = new ymaps.multiRouter.MultiRoute({
                    // Описание опорных точек мультимаршрута.
                    referencePoints: [
                        [55.734876, 37.59308],
                        "Москва, ул. Мясницкая"
                    ],
                    // Параметры маршрутизации.
                    params: {
                        // Ограничение на максимальное количество маршрутов, возвращаемое маршрутизатором.
                        results: 2
                    }
                }, {
                    // Автоматически устанавливать границы карты так, чтобы маршрут был виден целиком.
                    boundsAutoApply: true
                });
                map.geoObjects.add(multiRoute);
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
