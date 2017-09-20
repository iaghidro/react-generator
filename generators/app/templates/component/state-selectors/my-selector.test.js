import { expect } from 'chai';

import * as selectors from './<%= kebabCase %>';

describe('store::state-selectors::<%= kebabCase %>', () => {
    const baseState = {
        <%= lowerCamelCase %>: {
            item: {hi: 'myValue'}
        }
    };

    let state;

    beforeEach(() => {
        state = baseState;
    });

    describe('getItem', () => {

        it('should return item valuefrom the state', () => {
            const expectedValue = {hi: 'myValue'};
            expect(selectors.getItem(state)).to.deep.equal(expectedValue);
        });

    });

});