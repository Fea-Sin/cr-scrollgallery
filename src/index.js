import React, { PureComponent, Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import OuiDom from './utils/ouiDomUtils'

class ScrollGalleryShow extends PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      tabSelect: props.tabSelect,
      barFix: false,
      scrollBarH: 0,
      barTabH: 0,
      listElementMessage: [],
      scrollTop: 0,
    }
  }

  componentDidMount() {
    const barTabRect = this.galleryBox.getBoundingClientRect()
    const elementW = OuiDom.outerWidth(this.gallery)
    const gTopH = OuiDom.outerHeight(this.gTop)
    const barTabH = OuiDom.outerHeight(this.barTab)
    const scrollBarH = gTopH
    OuiDom.setStyles(this.barTabTwo, {
      ['display']: 'none',
      ['width']: elementW + 'px',
    })
    this.setState({
      scrollBarH,
      barTabH,
    })
    const listElement = this.listBox.children
    const listElementArr = Array.from(listElement)
    const elementMessage = []
    // 修正第一次检测
    elementMessage.push(0)
    listElementArr.forEach((ele, index, arr) => {
      let height = OuiDom.outerHeight(ele)
      let sumH = 0
      for (let i=0; i<=index; i++) {
        sumH += OuiDom.outerHeight(arr[i])
      }
      elementMessage.push(sumH)
    })
    this.setState({
      listElementMessage: elementMessage,
    }, () => {
      if (this.state.tabSelect > 0) {
        this.setScrollTop(this.state.tabSelect)
      }
    })
  }
  componentDidUpdate(prevProps, prevState) {
    // console.log('component up date', prevState)
  }

  handleTabClick = (e, val) => {
    this.setState({
      tabSelect: val
    })
    this.setScrollTop(val)
  }

  setScrollTop = (val) => {
    const gTopH = this.state.scrollBarH
    const elementTop = this.state.listElementMessage[val]
    this.galleryBox.scrollTop = gTopH + elementTop
  }

  handleGalleryScroll = (e) => {
    let scrollTop = e.target.scrollTop
    let gTopH = this.state.scrollBarH
    //向上滚动还是向下滚动
    let scrollUp = true
    scrollTop > this.state.scrollTop ? scrollUp = true : scrollUp = false
    
    if (scrollTop > gTopH ) {
      this.barTab.style.display = 'none'
      this.listBox.style.marginTop = this.state.barTabH + 'px'
      this.barTabTwo.style.display = 'block'
    } else {
      this.listBox.style.marginTop = 0
      this.barTab.style.display = 'block'
      this.barTabTwo.style.display = 'none'
    }

    let listElementMessage = this.state.listElementMessage
    let length = listElementMessage.length

    // 提前多少距离选中tab
    const interval = 50
    const galleryBoxH = OuiDom.outerHeight(this.galleryBox)
    
    for (let i=0; i<length; i++) {
      if (scrollUp) {
        // console.log('往上滚动')
        let tabSelect
        if (scrollTop < listElementMessage[i]+gTopH-interval) {
          i === 0 ? tabSelect = i : tabSelect = i - 1
          this.setState({
            tabSelect
          })
          break
        }        

      } else {
        // console.log('往下滚动')
        let tabSelect
        let lastTabSelect
        if (scrollTop < listElementMessage[i]+gTopH+interval) {
          i === 0 ? lastTabSelect = i : lastTabSelect = i - 1
          if ( (listElementMessage[lastTabSelect]+gTopH - scrollTop) >  galleryBoxH/2) {
            tabSelect = lastTabSelect
          } else {
            tabSelect = i
          }
          this.setState({
            tabSelect
          })
          break          
        }
      }
    }

    // 保存滚动
    this.setState({
      scrollTop,
    })
  }

  render () {
    const { barTab, prefixCls, barMinWidth } = this.props
    const tab = barTab && barTab.length > 0 && (
      barTab.map((item, index) => {
        const tabClassName = classNames({
          [`${prefixCls}-bar-list`]: true,
          [`${prefixCls}-bar-box-select`]: this.state.tabSelect === index,
        })
        return (
          <div className={tabClassName} key={index} onClick={e => this.handleTabClick(e, index)}>{item}</div>
        )
      })
    )
    
    return (
      <div className={`${prefixCls}-out-box`}>
        <div className={`${prefixCls}-box`} ref={ galleryBox => this.galleryBox = galleryBox } onScroll={this.handleGalleryScroll}>
          <div className={`${prefixCls}`} ref={ gallery => this.gallery = gallery }>
            <div className={`${prefixCls}-top`} ref={gTop => this.gTop = gTop}>
              {this.props.galleryTop}
            </div>
            <div className={`${prefixCls}-bar`} ref={barTab => this.barTab = barTab }>
              <div className={`${prefixCls}-bar-box`} style={{ minWidth: barMinWidth }}>
                {tab}
              </div>
            </div>
            <div className={`${prefixCls}-listBox`} ref={listBox => this.listBox = listBox}>
              {this.props.galleryElements}
            </div>
          </div>
        </div>
        <div className={`${prefixCls}-out-box-barFixBox`} ref={barTabTwo => this.barTabTwo = barTabTwo }>
          <div className={`${prefixCls}-out-box-bar`}>
            <div className={`${prefixCls}-out-box-bar-box`} style={{ minWidth: barMinWidth }}>
              {tab}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ScrollGalleryShow.propTypes = {
  barTab: PropTypes.array,
  tabSelect: PropTypes.number,
  galleryTop: PropTypes.element,
  galleryElements: PropTypes.arrayOf(PropTypes.element),
  prefixCls: PropTypes.string,
  barMinWidth: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ])
}
ScrollGalleryShow.defaultProps = {
  tabSelect: 0,
  prefixCls: 'cr-scrollgallery',
  barMinWidth: '90%',
}
export default ScrollGalleryShow