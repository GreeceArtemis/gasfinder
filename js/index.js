'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
//  wrapper.append(Header(_ => render(root)));
  wrapper.append(Header());
  if (state.selectedMovie == null) {
    wrapper.append(StationDetails( _ => {
      render(root);
    }));
  } else {
    wrapper.append(Gmap( _ => {
      render(root);
    }));
  }




  root.append(wrapper);
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
