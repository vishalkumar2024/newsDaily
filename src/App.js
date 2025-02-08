import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


export default class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<News category="sports" />} />
            <Route path="/business" element={<News category="business" />} />
            <Route path="/science" element={<News category="science" />} />
            <Route path="/technology" element={<News category="technology" />} />
            <Route path="/sports" element={<News category="sports" />} />
            <Route path="/health" element={<News category="health" />} />
            <Route path="/entertainment" element={<News category="entertainment" />} />
          </Routes>
        </Router>
      </div>
    )
  }
}
