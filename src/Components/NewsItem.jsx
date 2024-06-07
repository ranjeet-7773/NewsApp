import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title, description, imageUrl, newsUrl ,author,date,source} = this.props;
        return (
            <div className="my-3">
                <div className="card">
                    <img src={imageUrl?imageUrl:"https://thumbs.dreamstime.com/b/news-woodn-dice-depicting-letters-bundle-small-newspapers-leaning-left-dice-34802664.jpg"} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className='card-text'><small className ="muted">By {author?author:"Unknown"} on {new Date (date).toGMTString()} </small></p>
                        <p className='Source'>{source}</p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem