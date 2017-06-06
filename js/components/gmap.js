'use strict';

const GasDetails = (station,update) => {
  const container = $('<div class="gas-detail"></div>');
  const hr = $('<hr>');
  const name = $('<p class="name-station">'+state.selectedStation.name+'</p>');
  const direction = $('<p class="address-station">'+state.selectedStation.address+'</p>');
  const products = $('<p class="district-station">'+state.selectedStation.products+'</p>');

  const latitud = $('<p class="address-station">'+state.selectedStation.lat+'</p>');
  const longitud = $('<p class="district-station">'+state.selectedStation.long+'</p>');


  container.append(name);
  container.append(hr);
  container.append(direction);
  container.append(products);

  

  return container;
}
