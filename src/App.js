import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {

  state={
    progress:0
  }
  setProgress=(progress)=> {
    this.setState({ progress: progress })
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color="#f11946"
            height={3}
            progress={this.state.progress}

          />
          <Routes>
            <Route path="/" element={<News setProgress={this.setProgress}  category="sports" />} />
            <Route path="/business" element={<News setProgress={this.setProgress}  category="business" />} />
            <Route path="/science" element={<News setProgress={this.setProgress}  category="science" />} />
            <Route path="/technology" element={<News setProgress={this.setProgress}  category="technology" />} />
            <Route path="/sports" element={<News setProgress={this.setProgress}  category="sports" />} />
            <Route path="/health" element={<News setProgress={this.setProgress}  category="health" />} />
            <Route path="/entertainment" element={<News setProgress={this.setProgress}  category="entertainment" />} />
          </Routes>
        </Router>
      </div>
    )
  }
}
