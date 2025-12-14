let map, directionsService, directionsRenderer, autocomplete;
let userLocation = null;
let userMarker = null;
let geocoder;
let watchId = null;
let lastUpdateTime = 0;
let autoCenter = true;
let currentPosition = null;
let activeDestination = null;
let activeMode = null;
function initMap() {
    geocoder = new google.maps.Geocoder();
    //Generating map, route, and displaying route.
    directionsService = new google.maps.DirectionsService();
    directionsRenderer = new google.maps.DirectionsRenderer();
    //Location of the map on the site
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: { lat: 40.6799, lng: -74.2454 },
    });
    directionsRenderer.setMap(map);
    const input = document.getElementById("destination-input");
    autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.bindTo("bounds", map);
    document.getElementById("route-btn").addEventListener("click", getRoute);
    //Trying to get user's location
    if (navigator.geolocation) {
        //Live tracking
        navigator.geolocation.watchPosition(success, error, {
            enableHighAccuracy: true,
            timeout: 6000,
            maximumAge: 0
        });
    } else {
        document.getElementById("output").textContent = "Geolocation not supported.";
    }
    //Map centering or not
    map.addListener("dragstart", () => {
        autoCenter = false;
    });
    directionsRenderer.setOptions({
        preserveViewport: true
    });
    //Markers
    Object.entries(locations).forEach(([categoryName, category]) => {
        Object.values(category).forEach(loc => {
            //Building custom markers
            if (categoryName !== "building" && categoryName !== "food") return; //Markers for only buildings and food
            if (!loc.lat || !loc.lng) return; // Skip entries without coordinates
            // Custom SVG Marker Icon
            const icon = {
                //Marker icon, extracted from Material Icon from google, and get the svg
                path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
                fillColor: categoryName === "building" ? "#2079deff" : "#e77e29ff",
                fillOpacity: 1,
                strokeWeight: 1,
                strokeColor: "#000", //Outline of each marker
                scale: categoryName === "building" ? 0.6 : 1.0, //Boolean for size of markers
                anchor: new google.maps.Point(12, 24) //Location of how the marker should be located
            };
            //Create markers
            const marker = new google.maps.Marker({
                position: { lat: loc.lat, lng: loc.lng },
                map,
                title: loc.name,
                icon: icon
            });
            //Displays the information need it when clicking on the marker
            const infoWindow = new google.maps.InfoWindow({
                content: `<strong>${loc.name}</strong>`
            });
            //open infoWindow when clicking marker
            marker.addListener("click", () => {
                infoWindow.open(map, marker);
            });
        });
    });
}
//Setting moving marker to your current location
function success(pos) {
    const lat = pos.coords.latitude;
    const lng = pos.coords.longitude;
    userLocation = { lat, lng };
    if (!userMarker) {
        userMarker = new google.maps.Marker({
            position: userLocation,
            map,
            title: "Your location",
        });
    } else {
        userMarker.setPosition(userLocation);
    }
    if (autoCenter) {
        map.panTo(userLocation);
    }
    if (activeDestination && activeMode) {
        const now = Date.now();
        if (now - lastUpdateTime > 5000) { 
            lastUpdateTime = now;
            calculateAndDisplayRoute(
                userLocation,
                activeDestination,
                activeMode
            );
        }
    }
}
function error() {
    document.getElementById("output").textContent = "Unable to retrieve your location.";
    alert("Please allow access to geolocation");
}
function getRoute() {
    if (!userLocation) {
        alert("User location not available yet.");
        return;
    }
    const modeInput = document.querySelector("input[name='mode']:checked");
    activeMode = modeInput ? modeInput.value : "DRIVING";
    const place = autocomplete.getPlace();
    if (place && place.geometry) {
        activeDestination = {
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
        };
        calculateAndDisplayRoute(userLocation, activeDestination, activeMode);
        lastUpdateTime = 0;
        return;
    }
    const address = document.getElementById("destination-input").value;
    if (!address) {
        alert("Please enter a destination.");
        return;
    }
    geocoder.geocode({ address }, (results, status) => {
        if (status === "OK" && results[0]) {
            activeDestination = {
                lat: results[0].geometry.location.lat(),
                lng: results[0].geometry.location.lng(),
            };
            activeMode = modeInput.value;
            lastUpdateTime = 0;
            calculateAndDisplayRoute(userLocation, activeDestination, activeMode);
        } else {
            alert("Could not find destination.");
        }
    });
}
function stopLiveNavigation() {
    if (watchId) {
        navigator.geolocation.clearWatch(watchId);
        watchId = null;
    }
}
function calculateAndDisplayRoute(origin, destination, mode) {
    directionsService.route(
    {
        origin,
        destination,
        travelMode: google.maps.TravelMode[mode], //cahnges depending on selected traversal option
    },
    (response, status) => {
        if (status === "OK") {
            directionsRenderer.setDirections(response);
            const route = response.routes[0].legs[0];
            document.getElementById("time").textContent = "Time: " + route.duration.text;
            document.getElementById("distance").textContent = "Distance: " + route.distance.text;
        } else {
            alert("Directions request failed due to " + status);
        }
    }
    );
}
//Button to center map
function recenterMap() {
    if (!userLocation || !map) return;
    autoCenter = true;
    map.panTo(userLocation);
}