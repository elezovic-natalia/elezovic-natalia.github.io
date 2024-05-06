document.addEventListener('DOMContentLoaded', function () {
    var map = L.map('map').setView([41.7881, -87.5962], 13); // Adjusted to show an initial view of the University of Chicago area
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    var marker = L.marker([41.79019456570371, -87.59823494904883]).addTo(map);
    marker.bindPopup("Frederick C. Robie House").openPopup();

    var circle = L.circle([41.78959254191152, -87.59966751829029], {
        color: 'blye',
        fillColor: '#35f',
        fillOpacity: 0.1,
        radius: 300,
    }).addTo(map);
    circle.bindPopup("You are in the Main Quad's area.").openPopup();
});
