// import * as ku from './../lib/ke-utils'

export const getCurrentPokemonId = (state) => {
  // ku.log('selectors.getCurrentComponentId: state', state, 'orange' )
  //; ku.log('selectors.getCurrentComponentId: id', state.ui.currentComponentId.id, 'orange' )
  return state.ui.currentPokemonId.id;

}

// redux selectors
export const getRequest = (state, key) =>
  state.requests[key] || {};

export const getRequests = (state) =>
  state.requests;

export const areRequestsPending = (requests) => {
  return Object.keys(requests)
    .some((key) => requests[key].status === 'pending');
};
