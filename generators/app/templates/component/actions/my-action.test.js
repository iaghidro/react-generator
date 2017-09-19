import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { expect } from 'chai';
import sinon from 'sinon';
import common from 'ui-react-common';

import * as actions from './<%= kebabCase %>';
import * as types from '../<%= kebabCase %>-types';

const globalTypes = common.globals.constants.actionTypes;
import LoanReview from '../myModelInstance';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mockResponse = {hi: "hello"};

describe('actions::<%= kebabCase %>', () => {

    describe('resetFilters', () => {

        it('should create action for FETCHING', () => {
            const expectedAction = {
                type: types.FETCHING
            };
            expect(actions.fetching()).deep.equal(expectedAction);
        });

    });

    describe('fetchSomething', () => {
        let fetchSomethingStub;

        beforeEach(() => {
            fetchSomethingStub = sinon.stub(LoanReview.prototype, 'fetchSomething');
        });

        afterEach(() => {
            fetchSomethingStub.restore();
        });

        it('should create actions for sucessfully fetching something', () => {
            fetchSomethingStub.resolves(mockResponse);
            
            const expectedActions = [
                {type: types.FETCHING},
                {type: types.RECEIVED_SOMETHING, something: 'value'}
            ];

            const store = mockStore({myStore: {}});

            return store.dispatch(actions.fetchSomething('value')).then(() => {
                expect(store.getActions()).deep.equal(expectedActions);
            });
        });

    });

});