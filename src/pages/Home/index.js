import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import Navbar from '../../components/navbar';
import Card from '../../components/card';

import './styles.css';

export default function Home(match) {

    const [news, setNews] = useState([]);

    function handleSearch(e) {
        console.log(e.target.value)
        try {
            api.get(`/everything?q=${e.target.value}&apiKey=85444b264aa246f28c5f41494efd6e03`).then(response => {
                setNews(response.data.articles)
            })
        } catch {
            console.log("Erro")
        }
    }


    useEffect(() => {
        try {
            api.get('/top-headlines?country=br&apiKey=85444b264aa246f28c5f41494efd6e03').then(response => {
                setNews(response.data.articles)
            })
        } catch {
            console.log("Erro");
        }
    }, []);

    return (
        <>
            <Navbar />

            <div className="row mx-auto input-area">
                <input onChange={handleSearch} type="text" className="form-control text-center input-text" placeholder="Search News" />
            </div>

            <div className="row">
                {news.map(news => (
                    <div className="col-md-6">
                        <Card img={news.urlToImage} title={news.title} description={news.description} author={news.source.name} url={news.url} key={news.source.id} />
                    </div> //
                ))}
            </div>
        </>
    )
}