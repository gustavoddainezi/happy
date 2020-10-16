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

function addMarker({ id, name, lat, lng }) {
    // Criar popup overlay
    const popup = L.popup({
        closeButton: false,
        className: 'map-popup',
        minwidth: 240,
        minheight: 240
    }).setContent(`${name} <a href="orphanage?id=${id}"> <img src="/images/arrow-white.svg" </a>`)

    // Criar e adicionar marcador
    L.marker([lat, lng], { icon })
    .addTo(map)
    .bindPopup(popup)
}

const orphanagesSpan = document.querySelectorAll('.orphanages span')
orphanagesSpan.forEach(span => {
    const orphanage = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng
    }

    addMarker(orphanage)
})