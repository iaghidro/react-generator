import React from 'react';
import { Provider } from 'react-redux';
import { shallow, mount} from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import Connected
import reducer from "../../../../../web-ui/source/react-app/components/tracking-items/components/trial-deposits/reducers/trial-deposits";

<%= upperCamelCase %>, {<%= upperCamelCase %>} from './<%= upperCamelCase %>';

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

import setupIntegrationTest from 'redux-integration-store';

describe('Connected<%= upperCamelCase %>', () => {
    let store;
    let dispatchSpy;

  beforeEach(() => {
      ({ store, dispatchSpy } = setupIntegrationTest(reducer, 'trialDeposits'));
    });

    it('should render connected <%= upperCamelCase %>', () => {
        shallow(
            <Provider store={store}>
              <Connected<%= upperCamelCase %>
            </Provider>
        );
    });

});
