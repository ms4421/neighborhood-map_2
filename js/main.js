var map;
var service;
var points = [];

//serachplaces function which finds salons in current bound of the map
function searchPlaces() {
	var request = {
		//rect object of how the map window is bound of the map
		bounds: map.getBounds(),
		name: "salon"
	};
	
	//places nearby search
	//sevice.nearbySearch(request, callback);
	service.nearbySearch(request, processSearchResults);
}
//this will process results and add them to points array
function processSearchResults(results, status) {
	var obj, marker;
	if (status == google.maps.places.PlacesServiceStatus.OK) {
		//console.log(results);
		
		for (var i = 0; i < results.length; i++){
			
			//save the results in points array
			obj = {
				name: results[i].name,
				rating: results[i].rating,
				lat: results[i].geometry.location.lat(),
				lng: results[i].geometry.location.lng(),
				streetImg: "https://maps.googleapis.com/maps/api/streetview?size=180x90&location="+results[i].geometry.location.lat()+","+results[i].geometry.location.lng(),
				showFlag: ko.observable(true),
				
        		flag: true
			};
			points.push(obj);
			setLocations(obj);
		}		
	}
}
//this function will set the location of pointers
function setLocations(location) {
    
    
        location.currentMarker = new google.maps.Marker({
			position: new google.maps.LatLng(location.lat, location.lng),
			map: map,
			title: location.name
        });
        // using google maps infoWindow in the markers used stackoverflow for this part
        var info = new google.maps.InfoWindow({
            content: ""
        });

       //used stackoverflow example for this part to click a marker and see the infowindow
        new google.maps.event.addListener(location.currentMarker, 'click', (function (marker) {
			return function () {
				var cont = '<strong> Salon Name: ' + location.name + '<p style="font-size: 20px ; color: red">' + location.rating + '</p><hr></strong><img src="' + location.streetImg + '">';
				info.setContent(cont);
				info.open(map, this);
			};
        })(location.currentMarker));
	
}

//check for the marker visiblity which should be passed to viewModel
function createAllMapLocations() {
	for (var i = 0; i < points.length; i++) {
		if(points[i].flag === true) {
			points[i].currentMarker.setMap(map);
		}else {
			points[i].currentMarker.setMap(null);
		}
	}
}
//init function will be called at the document ready loading
function init(location){
	console.log(location);
	var currentPoint = new google.maps.LatLng(location.coords.latitude, location.coords.longitude) ;
	//these options tells how to display the map
	//use the lng and ltd of geolocation returned 
	var mapOptions = {
		zoom: 12,
		center: currentPoint
  };

	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	//add a marker for the loation from under overlays in documentations
	//this will set the icon for location of the user to a home icon
	var marker = new google.maps.Marker({
		position: currentPoint,
		map: map,
		icon: "../home2.png"
	});
	
	//google places nearby search api initialize service 
	service = new google.maps.places.PlacesService(map);
	//call the performSearch method here
	//calling this way makes sure all the page is loaded
	google.maps.event.addListenerOnce(map,'bounds_changed',searchPlaces);
	createAllMapLocations();
}

<!-- will also use html5 geolocation to find current location of user -->
$(document).ready(function(){
	//get current location of the user
	navigator.geolocation.getCurrentPosition(init);
});

	

