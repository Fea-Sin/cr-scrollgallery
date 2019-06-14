import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import ScrollGallery from 'cr-scrollgallery'
import '../assets/index.less';
import styles from '../assets/index.less'

const reactContainer = document.getElementById('__react-content');
const bodyContainer = document.getElementsByTagName('body')
bodyContainer[0].style.padding = '10px'

class App extends PureComponent {

  componentDidMount() {
    const enterDom = document.getElementById('enter')
    setTimeout(() => {
      const helloDom = document.createElement('div')
      helloDom.style.height = 300 + 'px'
      helloDom.style.border = '1px solid red'
      enterDom.appendChild(helloDom)
    }, 1000)
  }
  handleClick = () => {
    console.log(this.gallery)
    this.gallery.setInitScrollNum()
    console.log('click 0000')

  }
  
  render () {
    const galleryTop = (
      <div style={{border: '1px solid red', height: 300}}></div>
    )
    const arrayElement = () => {
      const one = (
        <div key='one'>
          <div style={{ height: 80}}>tab一</div>
          <div>dfdfjajdf</div>
          <div>dfdfjajdf</div>
          <div>dfdfjajdf</div>
          <div>dfdfjajdf</div>
          <div>dfdfjajdf</div>
          <div style={{border: '1px solid green', height: 450}}></div>
        </div>
      )
      const two = (
        <div key='two' id='enter'>
          <div style={{ height: 60}}>tab二</div>
          <div style={{border: '1px solid green', height: 450}}></div>
        </div>
      )
      const three = (
        <div key='three'>
          <div style={{ height: 70}}>tab三</div>
          <div>dfdfjajdf</div>
          <div>dfdfjajdf</div>
          <div>dfdfjajdf</div>
          <div style={{border: '1px solid green', height: 3450}}></div>
        </div>
      )

      return [one, two, three]
    }

    const elementTwo = () => {
      const data = {}
      const one = (<div  style={{height: 600, border: '1px solid red'}}>
        <div className={styles.title}>工商信息</div>
        <table className={styles.table}>
          <tr>
            <th>法定代表人</th>
            <td colSpan="3">{(data && data.OperName) || ''}</td>
          </tr>
          <tr>
            <th>注册资本</th>
            <td>{(data && data.RegistCapi) || ''}</td>
            <th>实缴资本</th>
            <td>{(data && data.aaa) || ''}</td>
          </tr>
          <tr>
            <th>经营状态</th>
            <td>{(data && data.aaa) || ''}</td>
            <th>成立日期</th>
            <td>{(data && data.StartDate) || ''}</td>
          </tr>
          <tr>
            <th>统一社会信用代码</th>
            <td>{(data && data.CreditCode) || ''}</td>
            <th>纳税人识别号</th>
            <td>{(data && data.aaa) || ''}</td>
          </tr>
          <tr>
            <th>注册号</th>
            <td>{(data && data.No) || ''}</td>
            <th>组织机构代码</th>
            <td>{(data && data.OrgNo) || ''}</td>
          </tr>
          <tr>
            <th>公司类型</th>
            <td>{(data && data.EconKind) || ''}</td>
            <th>所属行业</th>
            <td>{(data && data.aaa) || ''}</td>
          </tr>
          <tr>
            <th>核准日期</th>
            <td>{(data && data.aaa) || ''}</td>
            <th>登记机关</th>
            <td>{(data && data.BelongOrg) || ''}</td>
          </tr>
          <tr>
            <th>所属地区</th>
            <td>{(data && data.Province) || ''}</td>
            <th>英文名</th>
            <td>{(data && data.aaa) || '-'}</td>
          </tr>
          <tr>
            <th>曾用名</th>
            <td>{(data && data.aaa) || '-'}</td>
            <th>参保人数 </th>
            <td>{(data && data.aaa) || ''}</td>
          </tr>
          <tr>
            <th>人员规模</th>
            <td>{(data && data.aaa) || ''}</td>
            <th>营业期限</th>
            <td>{(data && data.aaa) || ''}</td>
          </tr>
          <tr>
            <th>企业地址</th>
            <td colSpan="3">{(data && data.Address) || ''}</td>
          </tr>
          <tr>
            <th>经营范围</th>
            <td colSpan="3">{(data && data.Scope) || ''}</td>
          </tr>
        </table>
      </div>)

      const two = (<div  style={{height: 600, border: '1px solid red'}}>
        <div className={styles.title}>其他信息</div>
        <table className={styles.table}>
          <tr>
            <th>法定代表人</th>
            <td colSpan="3">{(data && data.OperName) || ''}</td>
          </tr>
          <tr>
            <th>注册资本</th>
            <td>{(data && data.RegistCapi) || ''}</td>
            <th>实缴资本</th>
            <td>{(data && data.aaa) || ''}</td>
          </tr>
          <tr>
            <th>经营状态</th>
            <td>{(data && data.aaa) || ''}</td>
            <th>成立日期</th>
            <td>{(data && data.StartDate) || ''}</td>
          </tr>
          <tr>
            <th>统一社会信用代码</th>
            <td>{(data && data.CreditCode) || ''}</td>
            <th>纳税人识别号</th>
            <td>{(data && data.aaa) || ''}</td>
          </tr>
          <tr>
            <th>注册号</th>
            <td>{(data && data.No) || ''}</td>
            <th>组织机构代码</th>
            <td>{(data && data.OrgNo) || ''}</td>
          </tr>
          <tr>
            <th>公司类型</th>
            <td>{(data && data.EconKind) || ''}</td>
            <th>所属行业</th>
            <td>{(data && data.aaa) || ''}</td>
          </tr>
          <tr>
            <th>核准日期</th>
            <td>{(data && data.aaa) || ''}</td>
            <th>登记机关</th>
            <td>{(data && data.BelongOrg) || ''}</td>
          </tr>
          <tr>
            <th>所属地区</th>
            <td>{(data && data.Province) || ''}</td>
            <th>英文名</th>
            <td>{(data && data.aaa) || '-'}</td>
          </tr>
          <tr>
            <th>曾用名</th>
            <td>{(data && data.aaa) || '-'}</td>
            <th>参保人数 </th>
            <td>{(data && data.aaa) || ''}</td>
          </tr>
          <tr>
            <th>人员规模</th>
            <td>{(data && data.aaa) || ''}</td>
            <th>营业期限</th>
            <td>{(data && data.aaa) || ''}</td>
          </tr>
          <tr>
            <th>企业地址</th>
            <td colSpan="3">{(data && data.Address) || ''}</td>
          </tr>
          <tr>
            <th>经营范围</th>
            <td colSpan="3">{(data && data.Scope) || ''}</td>
          </tr>
        </table>
      </div>)

    return [one, two]
    }

    return (
      <div>
        <div style={{width: 100, height: 100, border: '1px solid red'}} onClick={this.handleClick}></div>
        <div style={{height: 600, border: '10px solid #21c8be'}}>
          <ScrollGallery
            ref={gallery => this.gallery = gallery }
            barTab={['tab一', 'tab二', 'tab三']}
            tabSelect={1}
            galleryTop={galleryTop}
            galleryElements={arrayElement()}
            barMinWidth={500}
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