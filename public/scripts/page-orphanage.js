const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

// Criar mapa
const map = L.map('mapid', options).setView([-23.5423, -46.369], 15);

// Criar e adicionar TileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

// Criar icon
const icon = L.icon({
    iconUrl: './public/images/map-marker.svg',
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [160, 1]
})

// Criar e adicionar marcador
L.marker([-23.5423, -46.369], { icon }).addTo(map)