'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  wrapper.append(Header(_ => render(root)));
//  wrapper.append(Header());
  if (state.selectedStation == null) {
    wrapper.append(StationDetails( _ => {
      render(root);
    }));
    root.append(wrapper);
  } else {
    wrapper.append(GasDetails( _ => {

      render(root);
    }));
    root.append(wrapper);

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
  }






}

const state = {
  stations: null,
  selectedStation: null
};

$( _ => {
//Como obtengo los datos de JSON a const state
  getJSON('stations.json', (err, json) => {

    if (err) { return alert(err.message);}

    state.stations = json;
//
    const root = $('.root');
    render(root);
  });

});
