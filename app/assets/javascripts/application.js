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

$(document).ready(function() {

  var active1 = false;
  var active2 = false;
  var active3 = false;
  var active4 = false;

    $('.parent2').on('mousedown touchstart', function() {
    
    if (!active1) $(this).find('.test1').css({'background-color': 'gray', 'transform': 'translate(0px,125px)'});
    else $(this).find('.test1').css({'background-color': 'dimGray', 'transform': 'none'}); 
     if (!active2) $(this).find('.test2').css({'background-color': 'gray', 'transform': 'translate(60px,105px)'});
    else $(this).find('.test2').css({'background-color': 'darkGray', 'transform': 'none'});
      if (!active3) $(this).find('.test3').css({'background-color': 'gray', 'transform': 'translate(105px,60px)'});
    else $(this).find('.test3').css({'background-color': 'silver', 'transform': 'none'});
      if (!active4) $(this).find('.test4').css({'background-color': 'gray', 'transform': 'translate(125px,0px)'});
    else $(this).find('.test4').css({'background-color': 'silver', 'transform': 'none'});
    active1 = !active1;
    active2 = !active2;
    active3 = !active3;
    active4 = !active4;
      
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
 

// #####################################
// for google maps api map  page
// #####################################
if(location.pathname == '/map'){
  var map, marker; 


function initializeMap(location){

   console.log(location);

   var currentLocation = new google.maps.LatLng(location.coords.latitude, location.coords.longitude);

   var mapsOptions = {
      center: currentLocation,
      zoom: 19,
      mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  map = new google.maps.Map(document.getElementById('map'), mapsOptions);

  marker = new google.maps.Marker({
     position: currentLocation,
     map: map
 });

  function createInfoWindow(text){
      var infowindow = new google.maps.InfoWindow({
        content: text
    });
      return infowindow;
  }
  
var rightclick = google.maps.event.addListener(map, "rightclick", function(event) {
   console.log("rightclick")
   // console.log("print:" + JSON.stringify(rightclick))
    var lat = event.latLng.lat();
    var lng = event.latLng.lng();
  
    // populate yor box/field with lat, lng
    // alert("Lat=" + lat + "; Lng=" + lng);
    var marker = new google.maps.Marker({
       position: event.latLng,
       map: map,
       icon: {
          url: '/assets/homeless.png',
          scaledSize: new google.maps.Size(50, 50)
        }
   });
  $(marker).addClass('marker');


    

    google.maps.event.addListener(marker, 'click',function() {
            info.open(map, marker);
            // update the hidden form field with the homeless id
            $("#homeless_id").val($(marker).attr('data-id'));
    });

    $.ajax({
          url: '/map',
          method: 'POST',
          dataType: "json",
          data: { 
            x: lat,
            y: lng
          },
          success: function(data) {
            console.log(data);
            $(marker).attr('data-id',data.id);
          }
      });
});


  var info = createInfoWindow(document.getElementById("homeless_item"));

  google.maps.event.addListener(marker, 'click',function() {
          info.open(map, marker);
  });


  $('#add_marker').fadeIn().click(function(event){

      console.log("location:",location);
      $.ajax({
          url: '/map',
          method: 'POST',
          dataType: "json",
          data: { 
            x: location.coords.latitude,
            y: location.coords.longitude,
            // item_name: info.
          },
          success: function(data){
            marker.setIcon({
              url: '/assets/homeless.png',
              scaledSize: new google.maps.Size(50, 50)
            });
          },
      });
  });
      function createInfoWindow(input){
          var infowindow = new google.maps.InfoWindow({
            content: document.getElementById('homeless_item')
          });
          return infowindow;
        }

  
}

}

// ################################################################
// Feed Page Map
// ################################################################

if(location.pathname == '/feed'){
  var map, marker; 

function initializeMap(location){

   console.log(location);

   var currentLocation = new google.maps.LatLng(location.coords.latitude, location.coords.longitude);

   var mapsOptions = {
      center: currentLocation,
      zoom: 14,
      mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  map = new google.maps.Map(document.getElementById('map_2'), mapsOptions);

 //  marker = new google.maps.Marker({
 //     position: currentLocation,
 //     map: map
 // });

  function createInfoWindow(text){
      var infowindow = new google.maps.InfoWindow({
        content: text
    });
      return infowindow;
  }
  

  
    // populate yor box/field with lat, lng
    // alert("Lat=" + lat + "; Lng=" + lng);
   //  var marker = new google.maps.Marker({
   //     position: event.latLng,
   //     map: map,
   //     icon: {
   //        url: '/assets/homeless.png',
   //        scaledSize: new google.maps.Size(50, 50)
   //      }
    
   // });

    google.maps.event.addListener(marker, 'click',function() {
            info.open(map, marker);
    });

      function createInfoWindow(input){
          var infowindow = new google.maps.InfoWindow({
            content: document.getElementById('homeless_item')
          });
          return infowindow;
        }

  
}

$(window).load(function(){
  var markerArray = []
  setTimeout(function(){
    $.ajax({

          url: '/api/markers/list',
          type: 'GET',
          map: map,
          success: function(markers){
              for(var i = 0; i < markers.length; i++){
                //everything
                var markerLoc = new google.maps.LatLng(markers[i].lat, markers[i].long);
                console.log(markers[i])
                   markerArray.push(new google.maps.Marker({
                       position: markerLoc,
                       map: map,
                       icon: {
                          url: '/assets/homeless.png',
                          scaledSize: new google.maps.Size(50, 50)
                        }
                   }))
              }
          }
  })
  },5000)
  // var marker = new google.maps.Marker({
  //      position: event.latLng,
  //      map: map,
  //      icon: {
  //         url: '/assets/homeless.png',
  //         scaledSize: new google.maps.Size(50, 50)
  //       }
  //  });

})
}



$(document).ready(function(){

    if(location.pathname == '/feed'){
      navigator.geolocation.getCurrentPosition(initializeMap);
    }
    if(location.pathname == '/map'){

      navigator.geolocation.getCurrentPosition(initializeMap);
    }
  });

$(".toggle").click(function(){
  $(".navcollapse").toggleClass("show");
});



    