# cr-scrollgallery

react component

## Example
<img src="./github/example.jpg" alt="example" />

## Usage

```jsx
cnpm install --save cr-scrollgallery
```

```js
import ScrollGallery from 'cr-scrollgallery'
import 'cr-scrollgallery/assets/index.css'
// 注意在使用的时候不能忘记引入css
// 如果使用cssModule，不需要在此处引入css，而是在对应的less或scss文件引入，查看注意01
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
            tabSelect={3}
            galleryTop={galleryTop}
            galleryElements={arrayElement()}
          />
        </div>
      </div>
    )
  }

```

## 注意01
如果使用了cssModule，作为样式的使用方式，在引入css时应特别注意
以And Design Pro使用为例，在对应的页面less中引入css。注意包名前面的波浪线
```less
@import '~cr-scrollgallery/assets/index.css';
```

## 注意02
如果组件传入的是异步元素，因为组件在`componentDidMount`时计算元素的高度导致不准确，因此组件增加了修补措施，在异步完成是调用方法`this.gallery.setInitScrollNum()`
2019-06-14已修复，一般状态下不需要手动触发修补措施
如何使用：
```js
promise.then(() => {
  this.gallery.setInitScrollNum()
})
<ScrollGallery ref={gallery => this.gallery = gallery }></ScrollGallery>
```

## API
name | type | description
-----|------|------------
barTab|array|标题tab
tabSelect|number|默认选中的tab,并且滚动到相应位置
galleryTop|react node|tab bar上部内容
galleryElements|array of react node|tab对应的页面内容
barMinWidth|string/number|设置tabBar最小宽度，合适的值可以使tabBar居中 (例如：`500`,`'500px'`,`'85%'`)

## Development

```
cnpm install
npm start
```

## Example

http://localhost:8020/examples/testOne.html


## License

cr-scrollgallery is released under the MIT license.
