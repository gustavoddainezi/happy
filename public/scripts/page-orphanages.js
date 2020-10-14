// Criar mapa
const map = L.map('mapid').setView([-23.5423, -46.369], 16);

// Criar e adicionar TileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

// Criar icon

//
L.marker([-23.5423, -46.369]).addTo(map).bindPopup('A pretty CSS3 popup.<br> Easily customizable.').openPopup();