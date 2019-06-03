import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import ScrollGallery from 'cr-scrollgallery'
import '../assets/index.less';

const reactContainer = document.getElementById('__react-content');
const bodyContainer = document.getElementsByTagName('body')
bodyContainer[0].style.padding = '10px'

class App extends PureComponent {
  
  render () {
    const galleryTop = (
      <div style={{border: '1px solid red', height: 300}}></div>
    )
    const arrayElement = () => {
      const one = (
        <div key='one'>
          <div style={{ height: 80}}>tab一</div>
          <div style={{border: '1px solid green', height: 450}}></div>
        </div>
      )
      const two = (
        <div key='two'>
          <div style={{ height: 60}}>tab二</div>
          <div style={{border: '1px solid green', height: 450}}></div>
        </div>
      )
      const three = (
        <div key='three'>
          <div style={{ height: 70}}>tab三</div>
          <div style={{border: '1px solid green', height: 450}}></div>
        </div>
      )

      return [one, two, three]
    }

    return (
      <div>
        <div style={{height: 600, border: '10px solid #21c8be'}}>
          <ScrollGallery
            barTab={['tab一', 'tab二', 'tab三']}
            tabSelect={1}
            galleryTop={galleryTop}
            galleryElements={arrayElement()}
          />
        </div>
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