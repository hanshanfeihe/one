import 'bootstrap/js/dist/carousel'
import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import Detail from './components/detail/detail'
import './components/banner/banner'
import Content from './components/content/content'
import Header from './components/header/header'
import './css/index.css'
class App extends React.Component {
  render () {
    return (
      <div className="app">
        <Header />
        <Content />
      </div>
    )
  }
}
ReactDOM.render((
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="detail" element={<Detail />} />
    </Routes>
  </BrowserRouter>
), document.getElementById('root'))