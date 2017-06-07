'use strict';
/*
const init =()=> {
    map = new GMaps({
      div: '#map',
      lat: -12.043333,
      lng: -77.028333
    });
    map.geolocate({
      success: function(position) {
        map.setCenter(position.coords.latitude, position.coords.longitude);
      },
      error: function(error) {
        alert('Geolocation failed: '+error.message);
      },
      not_supported: function() {
        alert("Your browser does not support geolocation");
      },
      always: function() {
        alert("Done!");
      }
    });
    map.addMarker({
      lat: latitude,
      lng: longitude,
      title: 'Lima',
      click: function(e) {
        alert('You Here');
      }
    });

  }

  const Gmap = () => {
    const wrapper = $('<div id="map"></div>');
    wrapper.init = init.bind(null,wrapper.get(0));
    return wrapper;
  }
*/
//

const GasDetails = (station,update) => {
/*
  const gmap = Gmap();
  gmap.init();
  */

//
  const containerMap = $('<div class="gas-map"></div>');
  const container = $('<div class="gas-detail"></div>');
  const hr = $('<hr>');
  const name = $('<p class="name-station">'+state.selectedStation.name+'</p>');
  const direction = $('<p class="address-station">'+state.selectedStation.address+'</p>');
//Creo un span para cada producto
  const Products = () => {
    const productsContainer = $('<div class="productsContainer"></div>');
    state.selectedStation.products.forEach((product) => {
      const spanProduct = $('<span class="product-station">'+product+'</span>');
      productsContainer.append(spanProduct);
    });

    return productsContainer;
  }
//
  const latitud = $('<p class="address-station">'+state.selectedStation.lat+'</p>');
  const longitud = $('<p class="district-station">'+state.selectedStation.long+'</p>');


  container.append(name);
  container.append(hr);
  container.append(direction);
  container.append(Products());
//  containerMap.append(gmap);
//  containerMap.append(container);


  return container;
}
