import React from 'react'
import './styles.css'

function NewsItem({title, description, url, urlToImage}) {
    return (
        <div className="card">
            <img src={urlToImage} onError={(e)=>{e.target.onerror = null; e.target.src="im.gif"}} alt="noimage"/>
            <h3>
                <a href={url}>{title}</a>
            </h3>
            <p>{description}</p>
        </div>
    )
}

export default NewsItem;
