import { expect } from 'chai';

import * as types from '../<%= kebabCase %>-types';
import reducer from './<%= kebabCase %>';
import deepFreeze from 'deep-freeze';

describe('reducers:<%= kebabCase %>', () => {

    it('should return the initial state', () => {
        const newState = {
            hasError: false,
            error: null
        };
        expect(reducer(undefined, {})).deep.equal(newState);
    });

    it('should return FAILED state', () => {
        const previousState = {
            hasError: false,
            error: null
        };
        const newState = {
            hasError: true,
            error: {code: 'bad'}
        };
        const action = {
            type: types.FAILED,
            error: {code: 'bad'}
        };
        deepFreeze(previousState);
        expect(reducer(previousState, action)).deep.equal(newState);
    });

});
