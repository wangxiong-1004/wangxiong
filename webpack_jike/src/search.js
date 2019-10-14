'use strict';

import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss';
import i401 from './images/401.gif';

class Search extends React.Component {
    render() {
        return <div className="search-text">Search Text
            <img src={ i401 } />
        </div>
    }
}

ReactDOM.render(
    <Search />,
    document.getElementById('root')
)