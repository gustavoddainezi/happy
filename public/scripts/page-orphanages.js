// Criar mapa
const map = L.map('mapid').setView([-23.5423, -46.369], 16);

// Criar e adicionar TileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

// Criar icon
const icon = L.icon({
    iconUrl: './public/images/map-marker.svg',
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popUpAnchor: [170, 2]
})

// Criar popup overlay
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minwidth: 240,
    minheight: 240
}).setContent('Lar das Meninas <a href="orphanage.html?id=1" class="choose-orphanage"><img src="./public/images/arrow-white.svg"</a>')

// Criar e adicionar marcador
L.marker([-23.5423, -46.369], {icon: icon}).addTo(map).bindPopup(popup)