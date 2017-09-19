import * as types from './<%= kebabCase %>-types';

const defaultState = {
    hasError: false,
    error: null
};

const reducer = (state = defaultState, action) => {
    const {
        hasError,
        error
    } = state;

    switch (action.type) {

        case types.FAILED:
            return {
                hasError: true,
                error: action.error
            };
            break;
        default:
            return {
                hasError,
                error
            };
            break;
    }
};
export default reducer;
