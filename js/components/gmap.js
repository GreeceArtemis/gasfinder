'use strict';


/*
  const Gmap = () => {
    const wrapperMap = $('<div id="map"></div>');
    //wrapperMap.init = init.bind(null,wrapper.get(0));
    return wrapperMap;
  }
*/
//


const GasDetails = (station,update) => {

  const wrapperMap = $('<div id="map"></div>');
  
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

  containerMap.append(wrapperMap);
 containerMap.append(container);
/*
 var  map = new GMaps({
     div: '#map',
    // lat: -12.043333,
    // lng: -77.028333
     lat: state.selectedStation.lat,
     lng: state.selectedStation.long
   });

 var pos1=  map.addMarker({
     lat: state.selectedStation.lat,
     lng: state.selectedStation.long,
     title: state.selectedStation.name,
     click: function(e) {
       alert('You Here');
     }
   });
*/

  return containerMap;
}
