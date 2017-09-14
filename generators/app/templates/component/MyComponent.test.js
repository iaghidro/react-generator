/**
 * Enxzyme docs:
 * http://airbnb.io/enzyme/docs/api/
 * 
 * Console log the rendered template:
 * console.log(wrapper.debug())
 */

import React from 'react';
import { shallow, mount} from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import Connected<%= upperCamelCase %>, {<%= upperCamelCase %>} from './<%= upperCamelCase %>';

describe('<%= upperCamelCase %>', () => {

    it('should render', () => {
        shallow(<<%= upperCamelCase %>/>);
    });

    it('should test something else here', () => {
        const wrapper = shallow(<<%= upperCamelCase %>/>);
//        expect(wrapper.find(SubComponent).exists()).to.equal(true);
    });

});

/////////////////
////CONNECTED////
/////////////////

import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Connected<%= upperCamelCase %>', () => {
    let store;

    beforeEach(() => {
        store = mockStore({
            firstStoreAttribute: {
                
            }
        });
    });

    it('should render connected', () => {
        shallow(<Connected<%= upperCamelCase %> 
            store={store}/>);
    });

});
