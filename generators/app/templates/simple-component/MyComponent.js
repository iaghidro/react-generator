import React, { Component, ReactDOM } from 'react';
import PropTypes from 'prop-types';

class <%= upperCamelCase %> extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }

    render() {
        return (
            <p>{ text }</p>
        );
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }
}

<%= upperCamelCase %>.propTypes = {
  text: PropTypes.string.isRequired
};


export default <%= upperCamelCase %>;
