import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import MindTree from 'cr-scrollgallery'
import '../assets/index.less';

const reactContainer = document.getElementById('__react-content');
const bodyContainer = document.getElementsByTagName('body')
bodyContainer[0].style.padding = '10px'

class App extends PureComponent {
  
  render () {
    return (
      <div>
        <div>rc scroll gallery</div>
      </div>
    )
  }
}


function render(container) {
  ReactDOM.render(
    <div>
      <h3>RCSCROLLGALLERY TEST</h3>
      <div><App /></div>               
    </div>, container
  )
}

render(reactContainer)