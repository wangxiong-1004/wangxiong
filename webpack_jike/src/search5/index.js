import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import '../font/iconfont.css'
import i401 from '../images/401.gif'
import { a } from './tree-shaking'

class Search extends React.Component {
  constructor() {
    super(...arguments)

    this.state = {
      Text: null
    }
  }

  loadComonent() {
    import('./test.js').then((Text) => {
      this.setState({
        Text: Text.default
      })
    })
  }

  render() {
    const { Text } = this.state

    return (
      <div className="search-text">
        Search Text
        {Text ? <Text /> : null}
        <img src={i401} onClick={this.loadComonent.bind(this)} />
        <span className="iconfont icon-add"></span>
        <span>{a()}</span>
      </div>
    )
  }
}

ReactDOM.render(<Search />, document.getElementById('root'))
