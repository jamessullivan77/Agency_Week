// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

jQuery(document).ready(function(){
  $(window).scroll(function(e){
    parallaxScroll();
    });
     

 }); 

function parallaxScroll(){
    console.log("parallaxscroll")
    var scrolled = $(window).scrollTop();
    $('#parallax-bg-1').css('top',(0-(scrolled*.25))+'px');
    $('#parallax-bg-2').css('top',(0-(scrolled*.4))+'px');
    $('#parallax-bg-3').css('top',(0-(scrolled*.75))+'px');
    $('#parallax-bg-4').css('top',(0-(scrolled*.66))+'px');
}
 

// var map;

// function initializeMap(location){
    	
//     	console.log(location);

//     	var currentLocation = new google.maps.LatLng(location.coords.latitude, location.coords.longitude);

//     	var mapsOptions = {
//     		center: currentLocation,
//     		zoom: 20,
//     		mapTypeId: google.maps.MapTypeId.ROADMAP
//     	};

//     	 map = new google.maps.Map(document.getElementById('map'), mapsOptions);

//     	 var marker = new google.maps.Marker({
//     	 	position: currentLocation,
//     	 	map: map
    	
//     	});
			
// 				function createInfoWindow(text){
//   				var infowindow = new google.maps.InfoWindow({
//     				content: text
//   				});
//   				return infowindow;
// 				}

// 				var info = createInfoWindow(document.getElementById("homeless_marker"));
// 						google.maps.event.addListener(marker, 'click', function() {
//   						info.open(map,marker);
// 							});


//     	}

    