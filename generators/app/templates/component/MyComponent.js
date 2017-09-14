import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Alert } from 'react-bootstrap';
import common from 'ui-react-common';

import * as selectors from './state-selectors/index';
import * as actions from './actions/index';

export class <%= upperCamelCase %> extends Component {

    render() {

        return (
                <div id="<%= lowerCamelCase %>">
                </div>
                );
    }

}

<%= upperCamelCase %>.propTypes = {

};

const mapStateToProps = (state) => {
    return {
//        firstItem: selectors.getFirstItem(state),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
//        firstAction: (firstParam) => dispatch(actions.doFirstAction(firstParam)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(<%= upperCamelCase %>);
