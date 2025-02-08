import React, { Component } from 'react'

export default class NewsItem extends Component {

  render() {

    let { title, description, imageUrl,newsUrl, author, date } = this.props;  //<--The props is used in class-based-component like this
    return (
      <>
        <div className="my-3">
          <div className="card" >
            <img src={imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}...</p>
              <p className='card-text'><small className='text-muted'>By {author} on {new Date(date).toGMTString()}</small></p>
              <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
            </div>
          </div>
        </div>
      </>
    )
  }
}
