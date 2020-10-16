// Criar mapa
const map = L.map('mapid').setView([-23.5423, -46.369], 15);

// Criar e adicionar TileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

// Criar icon
const icon = L.icon({
    iconUrl: '/images/map-marker.svg',
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [160, 1]
})

// Criar popup overlay
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minwidth: 240,
    minheight: 240
}).setContent('Lar das Meninas <a href="orphanage?id=1" class="choose-orphanage"> <img src="/images/arrow-white.svg" </a>')

// Criar e adicionar marcador
L.marker([-23.5423, -46.369], { icon }).addTo(map).bindPopup(popup)