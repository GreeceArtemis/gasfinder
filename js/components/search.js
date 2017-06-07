const Search = () => {
  const searchContainer = $('<div class="searchContainer"></div>');
  const row = $('<div class="row"></div>');
  const colN = $('<div class="col s12"></div>');
  const divInput =$('<div class="input-field col s12"></div>');
  const input = $('<input type="text" id="autocomplete-input" class="autocomplete" placeholder="Ingrese tu distrito a buscar">');
  const span = $('<span class="fa fa-search" aria-hidden="true"></span>');

  divInput.append(span);
  divInput.append(input);
  row.append(divInput);
  colN.append(row);
  //row.append(colN);
  searchContainer.append(colN);
  //state.movies.forEach((movie) => {
  //  movieContainer.append(movieItem(movie,update));
  //});
  input.on('keyup',(e)=>{
    e.preventDefault();
    StationDetailsFilter( _ => {
      render(root);
    });

  });
/*  const Complete = () =>{
    input.autocomplete({
        data: {
          "Apple": null,
          "Microsoft": null,
          "Google": null
        },
      });
  }
  Complete();*/

  return searchContainer;
}
