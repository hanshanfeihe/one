import React from 'react';
import '../../api/banner'
import { getBanner } from '../../api/banner';
import { getEnMonth, getDay } from '../../api/time'
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
    return (
      <div className="col-md-8 banner">
        <div id="carousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {
              this.state.bannerList.map((element, index) => <div className={[
                "carousel-item", index == 0 ? 'active' : ''
              ].join(' ')} key={index}>
                <img src={element.hp_img_url} className="d-block w-100 " alt="..." />
                <div className="img-type">
                  摄影
                </div>
                <div className="banner-desc">
                  <div className="banner-desc-left">
                    {
                      element.hp_content
                    }
                  </div>
                  <div className="banner-date-right">
                    <div className="hp-title">
                      {element.hp_title}
                    </div>
                    <div className="hp-day">
                      {getDay(element.hp_makettime)}
                    </div>
                    <div className="hp-year-month">
                      {getEnMonth(element.hp_makettime)}
                    </div>
                  </div>
                </div>
              </div>)
            }
          </div>
          <div className="carousel-indicators indicator">
            {
              this.state.bannerList.map((element, index) => (
                <button type="button" data-bs-target="#carousel" data-bs-slide-to={index.toString()} className={index == 0 ? " indicator-item active" : 'indicator-item'} aria-current={index == 0 ? "true" : 'false'} key={index}></button>
              ))
            }
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon pre-left" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
            <span className="carousel-control-next-icon next-right" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    )
  }
}
export default Banner