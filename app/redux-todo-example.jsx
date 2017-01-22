const redux = require('redux');

console.log('Starting todo redux example');
var stateDefault = {
  searchText: '',
  showCompleted: false,
  todos: []
}
var reducer = (state = stateDefault, action) => {
  //state = state || {name: 'Anonymous'};

switch (action.type) {
  case 'CHANGE_SEARCH_TEXT':
    return {
      ...state,
      searchText: action.searchText
    }
  default:
    return state;
}


};

var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

store.subscribe(() => {
  var state = store.getState();

  console.log('searchText is', state.searchText);
  document.getElementById('app').innerHTML = state.searchText;
});

var currentState = store.getState();

console.log('currentState', currentState);

//TODO: CHANGE_SEARCH_TEXT
store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Do Something'
});

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Do another thing'
});
