import React from 'react';
import ReactDOM from 'react-dom';
import '../../css/content.css'
import Article from '../article/article';
import Banner from '../banner/banner';
class Content extends React.Component {
  render () {
    return (
      <div className="container main">
        <div className="row content">
          <Banner></Banner>
          <Article></Article>
        </div>
      </div>
    )
  }
}
export default Content