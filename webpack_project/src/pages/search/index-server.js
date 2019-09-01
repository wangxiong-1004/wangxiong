'use strict';

// import React from 'react';
// import ReactDOM from 'react-dom';
// import WxNumber from 'wx-number';
// import ad from './images/ad002.png';
// import './index.scss';

const React = require('react');
const WxNumber = require('wx-number');
const ad = require('./images/ad002.png');
require('./index.scss');

class Search extends React.Component {

    constructor() {
        super(...arguments);

        this.state = {
            Text: null
        }
    }

    loadComponent() {
        import('./test.js').then((Text) => {
            this.setState({
                Text: Text.default
            })
        });
    }

    render() {
        const {Text} = this.state;
        const result = WxNumber('999', '1');
        const data = window.__initial_data;
        return <div className="search-text">{result} -- {Text ? <Text/> : null} -- { data } Search Text <img src={ad}
                                                                                                onClick={this.loadComponent.bind(this)}/>
        </div>;
    }
}

module.exports = <Search/>;
