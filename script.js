let log = document.querySelector('.login');
let pas = document.querySelector('.password');
let button = document.getElementById('but');
let link = document.querySelector('.link');
let secret = document.querySelector('.secret1');

if(button) {
button.addEventListener('click', function () {
  if (log.value == 'Roger' && pas.value == '1234') {
    link.setAttribute('href', 'eng.html');
  } else {
    alert('Пароль не верный');
  }
});
}

$(document).ready(function () {
  $('.slider').bxSlider();
})

let map = new ol.map({
  target: "map",
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([37.41, 8.82]),
    zoom: 10
  })
});