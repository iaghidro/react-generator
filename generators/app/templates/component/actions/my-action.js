import common from 'ui-react-common';

const globalActions = common.globals.methods.actions;

import modelInstance from '../myModelInstance';
import * as types from '../<%= kebabCase %>-types';
import * as selectors from '../state-selectors/<%= kebabCase %>';

export const FAILED_MESSAGE = 'Failed to succeed';

export const fetchSomething = () => {
    return (dispatch) => {
        dispatch(fetching());
        return modelInstance.fetchSomething()
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
