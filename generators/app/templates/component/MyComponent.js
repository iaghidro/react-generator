import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Alert } from 'react-bootstrap';
import common from 'ui-react-common';

 import * as selectors from './state-selectors/<%= kebabCase %>';
 import * as actions from './actions/<%= kebabCase %>';

export class <%= upperCamelCase %> extends Component {

    render() {
        const {
            firstItem,
            firstAction
        } = this.props;

        return (
                <div id="<%= lowerCamelCase %>">
                    <div> My Item: { firstItem } </div>
                    <div onclick="(event) => firstAction('myValue')"></div>
                </div>
                );
    }

}

<%= upperCamelCase %>.propTypes = {
    firstItem: PropTypes.obj,
    firstAction: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
//        firstItem: selectors.getItem(state),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        firstAction: (firstParam) => dispatch(actions.fetchSomething(firstParam)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(<%= upperCamelCase %>);
