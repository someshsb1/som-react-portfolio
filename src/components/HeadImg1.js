import "./HeadImg1.css"

import React, { Component } from 'react'

class HeadImg1 extends Component {
  render () {
    return (
    <div className="head-img1">
        <div className="heading">
            <h1>{this.props.heading}</h1>
            <p>{this.props.text}</p>
        </div>
    </div>
  )
}
}

export default HeadImg1