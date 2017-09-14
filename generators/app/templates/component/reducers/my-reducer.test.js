import { expect } from 'chai';

import * as types from '../my-component-types';
import reducer from './my-reducer';

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
        expect(reducer(previousState, action)).deep.equal(newState);
    });

});
