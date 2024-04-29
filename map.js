document.addEventListener('DOMContentLoaded', function() {
    // Initialize the map and set its view to our chosen geographical coordinates and a zoom level:
    var map = L.map('map').setView([37.8715, -122.2730], 13);
  
    // Add a tile layer to add to our map, in this case it's a Mapbox Streets tile layer:
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
        maxZoom: 18,
    }).addTo(map);
  
    // Replace 'YOUR_RETREAT_LOCATION_DATA' with your actual data, which should be an array of objects containing at least a latitude, longitude, and a description of each retreat location.
    var retreatLocations = [
      // Example data:
      {lat: 37.8715, lng: -122.2730, description: 'Full Stack Web Development Decal home'},
      {lat: 36.5552, lng: -1121.9233, description: 'Bare Retreat'},
      {lat: 39.0968, lng: -120.0324, description: 'Berkeley Consulting Retreat'},
      {lat: 34.1371, lng: -118.3533, description: 'Codebase Retreat'},
      {lat: 21.3099, lng: -157.8581, description: 'Diversatech Retreat'},
      {lat: 37.8651, lng: -119.5383, description: 'Formula 1 Retreat'},
      {lat: 19.5429, lng: -155.6659, description: 'Plextech Retreat'},
      {lat: 39.5299, lng: -119.8143, description: 'Voyager Retreat'},
      // Add more locations here
    ];
  
    // Loop through the locations and add a marker for each one to the map with a popup:
    retreatLocations.forEach(function(location) {
      var marker = L.marker([location.lat, location.lng]).addTo(map);
      marker.bindPopup(location.description);
    });
  
    // Optionally, if you want to add custom icons or other functionalities, you can add them here
  });
  