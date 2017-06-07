'use strict';


const stationItem = (station,update) => {
  const stationItem =$('<div class="station-item"></div>')
  const item = $('<a href="#" class="gas-station-link"></a>');
  const iconMap = $('<span class="fa fa-map-o" aria-hidden="true"></span>');
  item.append(iconMap);

  const name = $('<p class="name-station">'+station.name+'</p>');
  const direction = $('<p class="address-station">'+station.address+'</p>');
  const place = $('<p class="district-station">'+station.district+'</p>');

  stationItem.append(name);
  stationItem.append(direction);
  stationItem.append(place);
  stationItem.append(item);

  item.on('click',(e) => {
    e.preventDefault();
    state.selectedStation = station;
    update();
  });

  return stationItem;

}
//Evaluando cada Estacion
const StationDetails = (update) => {
  const stationContainer = $('<div class="station-container"></div>');
  state.stations.forEach((station) => {
    stationContainer.append(stationItem(station,update));
  });

  return stationContainer;
}
