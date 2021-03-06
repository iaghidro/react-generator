import common from 'ui-react-common';

const globalActions = common.globals.methods.actions;

import <%= lowerCamelCase %> from '../<%= lowerCamelCase %>Instance';
import * as types from '../<%= kebabCase %>-types';

export const FAILED_MESSAGE = 'Failed to succeed';

 export const fetchSomething = () => {
     return (dispatch) => {
         dispatch(fetching());
         return <%= lowerCamelCase %>.fetchSomething()
                 .then((something) => dispatch(receivedSomething(something)))
                 .catch((error) => {
                     dispatch(failedToFetch(error));
                     dispatch(globalActions.failedAction(FAILED_MESSAGE));
                 });
     };
 };

export const fetching = () => {
    return {
        type: types.FETCHING
    };
};

export const failedToFetch = (error) => {
    return {
        type: types.FAILED,
        error: error
    };
};

export const receivedSomething = (something) => {
    return {
        type: types.RECEIVED_SOMETHING,
        something: something
    };
};
