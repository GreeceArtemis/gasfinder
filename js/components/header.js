'use strict';

const Header = (update) => {
  const header = $("<header></header>");
  const title = $("<span>Gas Finder</span>");
  const itemSearch = $('<a href="#" class="item-search"></a>');
  if(state.selectedStation == null){
      header.append(title);
      header.append(Search());

  }else{
      const iconArrow = $('<span class="fa fa-chevron-left" aria-hidden="true"></span>');
      itemSearch.append(iconArrow);
      header.append(itemSearch);
      header.append(title);
  }

  return header;
}
