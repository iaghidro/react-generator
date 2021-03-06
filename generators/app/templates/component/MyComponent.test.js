import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import Connected<%= upperCamelCase %>, {<%= upperCamelCase %>} from './<%= upperCamelCase %>';

describe('<%= upperCamelCase %>', () => {

    it('should render <%= upperCamelCase %>', () => {
        shallow(<<%= upperCamelCase %>/>);
    });

    it('should test something else here', () => {
        const wrapper = shallow(<<%= upperCamelCase %>/>);
//        expect(wrapper.find(SubComponent).exists()).to.equal(true);

        // TO DEVELOPER: FIX THIS BROKEN TEST!
        const developerWroteTest = false;
        expect(developerWroteTest).to.equal(true);
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

    it('should render connected <%= upperCamelCase %>', () => {
        shallow(<Connected<%= upperCamelCase %>
            store={store}/>);
    });

});
