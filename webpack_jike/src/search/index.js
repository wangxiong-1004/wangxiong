'use strict';

import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss';
import '../font/iconfont.css';
import i401 from '../images/401.gif';

class Search extends React.Component {
    render() {
        return <div className="search-text">Search Text
            <img src={ i401 } /><span className="iconfont icon-add"></span>
        </div>
    }
}

ReactDOM.render(
    <Search />,
    document.getElementById('root')
)