import React from 'react'
// import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import '../../css/header.css'
class Logo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      'logo': "http://image.wufazhuce.com/www-fp-logo.png"
    }
  }
  render () {
    return (
      <div className="logo">
        <Link to="/"> <img src={this.state.logo} alt="" /></Link>
      </div>
    )
  }
}
export default function Header () {
  return (
    <div className="container">
      <div className="header">
        <div className="row">
          <div className="col-md-12">
            <Logo />
          </div>
        </div>
      </div>
    </div>
  )
}