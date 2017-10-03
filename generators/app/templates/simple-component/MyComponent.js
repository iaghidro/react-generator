import React, { Component, ReactDOM } from 'react';
import PropTypes from 'prop-types';

export default class extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        text: PropTypes.string.isRequired
    };

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
