import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import NewsItem from "./NewsItem"
import './styles.css'


function NewsList() {
    const[articles, setArticles] = useState([]);

    useEffect(() => {
        const getArticles = async () =>{
            const res = await Axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=07be8689e0494829bc846f6cd607746f')

            setArticles(res.data.articles);
            console.log(res);
        }
        getArticles();
    }, []);

    return (
        <>
        <div className="head" >
            <h1>NEWS</h1>
            <p>click on heading to redirect to that news</p>
        </div>
        <div className = "cards">
            {articles.map(({title, description, url, urlToImage}) => (
                <NewsItem 
                 title = {title}
                 description = {description}
                 url = {url}
                 urlToImage = {urlToImage}
                />
            ))}
        </div>
        </>
    )
}

export default NewsList;
