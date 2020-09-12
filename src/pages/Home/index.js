import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import Navbar from '../../components/navbar';
import Card from '../../components/card';

import './styles.css';

export default function Home() {

    const [news, setNews] = useState([]);
    let newsList = [];



    useEffect(() => {
        api.get('/v2/top-headlines?country=br&apiKey=85444b264aa246f28c5f41494efd6e03').then(response => {
            setNews(response.data.articles)
        })
    }, []);

    return (
        <>
            <Navbar />

            <div className="row px-5 input-area">
                <input type="text" className="form-control text-center input-text" placeholder="Search News" />
            </div>

            <div className="row">
                {news.map(news => (
                    <div className="col-md-12">
                        <Card img={news.urlToImage} title={news.title} description={news.description} author={news.author} url={news.url} />
                    </div>
                ))}
            </div>
        </>
    )
}