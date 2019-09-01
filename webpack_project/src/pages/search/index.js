'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import WxNumber from 'wx-number';
import ad from './images/ad002.png';
import './index.scss';

import { a } from './tree_shaking';

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
        const { Text } = this.state;
        const result = WxNumber('999', '2');
        return <div className="search-text">{ result } -- { Text ? <Text/> : null }Search Text <img src={ ad } onClick={ this.loadComponent.bind(this) } />
        </div>;
    }
}

ReactDOM.render(
    <Search />,
    document.getElementById('root')
);
