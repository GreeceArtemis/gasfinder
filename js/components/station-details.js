'use strict';

const stationItem = (station,update) => {
  const stationItem =$('<div class="station-item"></div>')
  const item = $('<a href="#" class="gas-station-link"></a>');
  const iconMap = $('<span class="fa fa-map" aria-hidden="true"></span>');
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
const StationDetailsFilter = (update) => {
//  const stationContainerFilter = $('<div class="station-container-filter"></div>');
  var availableTags=[];
  state.stations.forEach((station) => {
    availableTags.push(station.district);
  });
  console.log(availableTags);
  $('#autocomplete-input').autocomplete({
    source: availableTags
  });
  //stationContainerFilter.append(stationItem(station,update));
//document.getElementsByClassName("ui-menu-item")[0].firstChild.innerHTML
//$(".ui-menu-item li").text()
//$(".ui-menu-item li div").text()
/*  $( function() {
      var availableTags = state.stations;
      console.log(input.val());
      console.log(state.stations);
      $('#autocomplete-input').autocomplete({
        source: availableTags
      });
    } );*/
  return stationContainerFilter;
}
