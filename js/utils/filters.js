'use strict';

const filterByDistrict = (stations,query) => {
  var filter=[];
  stations.forEach((station) =>{
 (station.district.toUpperCase().indexOf(query.toUpperCase())>-1)? filter.push(station) : null;
  });
  console.log(filter);
 return filter;
}
