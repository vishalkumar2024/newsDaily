import React, { Component } from 'react'
import loading from "./spinner.gif";
export default class Loading extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loading} alt="Loading Image" />
      </div>
    )
  }
}
