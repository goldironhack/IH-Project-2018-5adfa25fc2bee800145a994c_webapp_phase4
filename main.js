const DATASET_WEATHER = "";
var map;
var marker;



function myMap() {


        // Create a map object, and include the MapTypeId to add
        // to the map type control.
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 40.7291, lng: -73.9965}, // centro
          zoom: 11,
          mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain']
          }
        });

        //Associate the styled map with the MapTypeId and set it to display.

        	var icon = {
		url: "https://iconos8.es/icon/2340/universidad",
	    scaledSize: new google.maps.Size(30, 30), // scaled size
	    origin: new google.maps.Point(0,0), // origin
	    anchor: new google.maps.Point(0, 0) // anchor

	};

	marker = new google.maps.Marker({ //Line 1
		position: {lat: 40.7291, lng: -73.9965}, //Line2: Location to be highlighted
		map: map,//Line 3: Reference to map object
		icon: icon
	});
}
$(document).ready(function(){
	myMap();
});
