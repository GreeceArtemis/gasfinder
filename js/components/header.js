'use strict';

const Header = (update) => {
  const header = $("<header></header>");
  const title = $("<span>Gas Finder</span>");

  if(state.selectedStation == null){
      header.append(title);
      header.append(Search(update));

  }else{
      const itemReturn = $('<a href="#" class="item-return"></a>');
      const iconArrow = $('<span class="fa fa-chevron-left" aria-hidden="true"></span>');
      itemReturn.append(iconArrow);
      header.append(itemReturn);
      header.append(title);

      itemReturn.on('click',(e) => {
        e.preventDefault();
        state.selectedStation = null;
        update();
      })
  }

  return header;
}
