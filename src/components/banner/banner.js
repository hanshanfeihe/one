import { getYearAndMonth } from '../../api/time'
import React from 'react';
import ReactDOM from 'react-dom';
import '../../api/banner'
import { getBanner } from '../../api/banner';
import 'bootstrap/js/dist/carousel'
class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bannerList: [],
    }
  }
  componentDidMount () {
    this._isMounted = true
    getBanner().then(res => {
      if (this._isMounted) {
        this.setState({
          bannerList: res
        })
      }
    })
  }
  // autoCarousel () {
  //   let index = this.state.currentIndex
  //   const length = this.state.bannerList.length
  //   if (index < length) {
  //     index = index + 1
  //   }
  //   if (index === length) {
  //     index = 0;
  //   }
  //   this.setState({
  //     currentIndex: index
  //   })
  // }
  componentWillUnmount () {
    this._isMounted = false
  }
  render () {
    const bannerList = this.state.bannerList
    return (
      <div className="col-md-8 banner">
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {
              bannerList.map((element, index) => <div className={[
                "carousel-item", index == 0 ? "active" : ''
              ].join(' ')} key={index} data-bs-interval="5000">
                <img src={element.hp_img_url} className="d-block w-100 " alt="..." />
              </div>)
            }
          </div>
        </div>
      </div>
    )
  }
}
export default Banner