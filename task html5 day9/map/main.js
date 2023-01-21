let map;
navigator.geolocation.watchPosition(pos => {
    // console.log({ lat:pos.coords.latitude, lng: pos.coords.longitude });
    initMap({ lat:pos.coords.latitude, lng: pos.coords.longitude });

})
// navigator.geolocation.getCurrentPosition(pos => {
//     initMap({ lat:pos.coords.latitude, lng: pos.coords.longitude });

// })
function initMap(pos) {
  map = new google.maps.Map(document.getElementById("map"), {
    center:pos ,
    zoom:12,
  });
  const marker = new google.maps.Marker({
    position: pos,
    map: map,
  });
}

window.initMap = initMap;