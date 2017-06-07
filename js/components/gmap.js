'use strict';
  var init =function(parent) {
    map = new GMaps({
      el: '#map',
      lat: -12.043333,
      lng: -77.028333
    });

    map.addMarker({
      lat: -12.043333,
      lng: -77.03,
      title: 'Lima'
    });

  }

  var Gmap = () => {
    var wrapper = $('<div id="map"></div>');
    wrapper.init = init.bind(null,wrapper.get(0));
    return wrapper;
  }

//
const GasDetails = (station,update) => {

  var gmap = Gmap();
  gmap.init();
  var map;


//
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



  return container;
}
