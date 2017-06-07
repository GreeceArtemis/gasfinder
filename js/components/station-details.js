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

  return stationItem;

}
//Evaluando cada Estacion

const StationDetails = (update) => {
  const stationContainer = $('<div class="station-container"></div>');
//  state.stations.forEach((station) => {
  //  stationContainer.append(stationItem(station,update));
//  });
    const searchContent = $('<div class="content-search"></div>');
    state.stations.forEach((station) => {
    searchContent.append(stationItem(station,update));
    });
    stationContainer.append(searchContent);
  return stationContainer;
}

const reRender = (content, filterStations) =>{
  content.empty();
  filterStations.forEach((filterStation) =>{
    content.append(stationItem(filterStation, _ => {reRender(content, filterStations);}));
  });
}

//otra manera
/*
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
//$(".ui-menu-item").text()
//$(".ui-menu-item div").text()
/*  $( function() {
      var availableTags = state.stations;
      console.log(input.val());
      console.log(state.stations);
      $('#autocomplete-input').autocomplete({
        source: availableTags
      });
    } );
  return stationContainerFilter;
}
*/
