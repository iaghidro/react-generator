import * as types from '../<%= kebabCase %>-types';

const defaultState = {
    hasError: false,
    error: null,
    item: 'First Item'
};

const reducer = (state = defaultState, action) => {
    switch (action.type) {

        case types.FAILED:
          return Object.assign({}, state, { hasError: !state.hasError });

          break;
        default:
          return Object.assign({}, state);

          break;
    }
};

export default reducer;
