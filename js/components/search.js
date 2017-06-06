const Search = () => {
  const searchContainer = $('<div class="searchContainer"></div>');
  const row = $('<div class="row"></div>');
  const colN = $('<div class="col s12"></div>');
  const divInput =$('<div class="input-field col s12"></div>');
  const input = $('<input type="text" id="autocomplete-input" class="autocomplete">');
  const label = $('<label for="autocomplete-input"><span class="fa fa-search" aria-hidden="true"></span></label>');

  divInput.append(input);
  divInput.append(label);
  row.append(divInput);
  colN.append(row);
  //row.append(colN);
  searchContainer.append(colN);
  //state.movies.forEach((movie) => {
  //  movieContainer.append(movieItem(movie,update));
  //});

  return searchContainer;
}
