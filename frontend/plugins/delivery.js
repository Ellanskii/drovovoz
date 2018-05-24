ymaps.ready(init);

function init() {
    //карта с центром на москве
    var myMap = new ymaps.Map("map", {
        center: [55.73, 37.75],
        zoom: 9,
        behaviors: ['default', 'scrollZoom']
    });

    //формируем массив точек мкада для построения
    warhouses = ymaps.geoQuery({
        type: 'FeatureCollection',
        features: [{
            type: 'Feature',
            properties: {
                balloonContent: 'Северный поставщик'
            },
            geometry: {
                type: 'Point',
                coordinates: [55.84554, 37.60992]
            }
        }, {
            type: 'Feature',
            properties: {
                balloonContent: 'Юго-западный поставщик'
            },
            geometry: {
                type: 'Point',
                coordinates: [55.65811, 37.43689]
            }
        }, {
            type: 'Feature',
            properties: {
                balloonContent: 'Юго-восточный поставщик'
            },
            geometry: {
                type: 'Point',
                coordinates: [55.66432, 37.80493]
            }
        }
        ]
        // Сразу добавим точки на карту.
    }).addToMap(myMap);


    var deliveryCoords = [];
    $("#address").suggestions({
        serviceUrl: "https://dadata.ru/api/v2",
        token: "f79ca9ffbc18c04214d427d0f6d55f93c8a098a5",
        type: "ADDRESS",
        geoLocation: true,
        /* Вызывается, когда пользователь выбирает одну из подсказок */
        onSelect: function (suggestion) {
            deliveryCoords = [suggestion.data.geo_lat, suggestion.data.geo_lon];
            console.log(deliveryCoords);


            var needed_point, obj_collection;

            needed_point = new ymaps.Placemark(deliveryCoords, {}, {
                preset: 'twirl#blueStretchyIcon',
                draggable: false
            });
            obj_collection = ymaps.geoQuery(needed_point).addToMap(myMap);


            //находим ближайшую точку
            var closestObject = warhouses.getClosestTo(deliveryCoords);

            //составляем маршрут между двумя точками
            ymaps.route([
                closestObject.geometry.getCoordinates(),
                deliveryCoords
            ]).then(function (route) {
                //myMap.geoObjects.add(route);

                //пишем дистанцию на метке
                var distance = Math.round(route.getLength() / 1000);
                needed_point.properties.set({iconContent: distance});
                console.log(distance);
                var deliveryCost = function () {
                    document.getElementById('deliverycost').innerHTML = "Стоимость доставки составит <span>" + distance * 20 + " рублей</span>";
                }
                deliveryCost();
                console.log(closestObject.geometry.getCoordinates());
            });


        }
    });


}