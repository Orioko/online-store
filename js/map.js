ymaps.ready(init);

function init() {
    // Создаем объект карты и устанавливаем его центр и масштаб
    var myMap = new ymaps.Map("map", {
        center: [55.76, 37.64], // Москва
        zoom: 16
    });

    // Создаем маркер и устанавливаем его местоположение
    var myPlacemark = new ymaps.Placemark([55.76, 37.64], {
        hintContent: 'Магазин',
        balloonContent: 'Адрес магазина'
    });

    // Добавляем маркер на карту
    myMap.geoObjects.add(myPlacemark);
}