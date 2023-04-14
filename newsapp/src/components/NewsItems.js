import React, { Component } from 'react'

export class NewsItems extends Component {

    render() {
        let { title, description, imageUrl, newsUrl, date, author, source } = this.props
        return (
            <div className='my-3'>
                <div className="card mt-3 text-center">
                    <img src={!imageUrl ? "https://i.postimg.cc/W4ngWBzw/newsmonkey.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title} <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '82%' }}>
                            {source}
                        </span></h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-body-secondary">By {author} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItems
