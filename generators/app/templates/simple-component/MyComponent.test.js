import React from 'react';
import { shallow, mount} from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import <%= upperCamelCase %> from './<%= upperCamelCase %>'

describe('<%= upperCamelCase %>', () => {
  it('should render <%= upperCamelCase %>', () => {
    let props = {
        text: 'Hello World'
    };

    shallow(<<%= upperCamelCase %> text={props.text}/>);
  });

  it('should have tests written', () => {
    // TODO: FIX THIS BROKEN TEST!
    const developerWroteTest = false;
    expect(developerWroteTest).to.equal(true);
  });
});
