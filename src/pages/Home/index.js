import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import Navbar from '../../components/navbar';
import Card from '../../components/card';

import './styles.css';

export default function Home(match) {
    require('dotenv').config()

    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(1);
    let btn = document.getElementById('btn-top');

    async function handleSearch(e) {
        setLoading(1);
        if (e.target.value === '') {
            await api.get(`http://newsapi.org/v2/top-headlines?country=br&pageSize=100&apiKey=${process.env.REACT_APP_API_KEY}`).then(response => {
                setNews(response.data.articles)
                setLoading(0);
            })
        }
        try {
            await api.get(`http://newsapi.org/v2/everything?q=${e.target.value}&sortBy=relevancy&apiKey=${process.env.REACT_APP_API_KEY}`).then(response => {
                setNews(response.data.articles)
                setLoading(0);
            })
        } catch {
            console.log("Erro")
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                await api.get(`http://newsapi.org/v2/top-headlines?country=br&pageSize=100&apiKey=${process.env.REACT_APP_API_KEY}`).then(response => {
                    setNews(response.data.articles)
                    setLoading(0);
                })
            } catch {
                console.log("Erro");
            }
        }
        fetchData();
    });

    /*
        Scroll Handle Functions
    */

    window.onscroll = function () {
        scroll();
    }

    function scrolltoTop() {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' })
    }

    function scroll() {
        if (document.documentElement.scrollTop > 50) {
            btn.style.display = "block"
        } else {
            btn.style.display = "none"
        }
    }

    return (
        <>
            <Navbar />

            <div className="row mx-auto input-area">
                <input onChange={handleSearch} type="text" className="form-control text-center input-text" placeholder="Search News" />
            </div>

            <br /><br />

            {

                loading ? <div className="row load-container"><div className="spinner-grow text-danger mx-auto" role="status"><span className="sr-only"></span></div></div>
                    :
                    <div>
                        <div className="row">
                            {news.map((news, index) => (
                                <Card
                                    key={index}
                                    img={news.urlToImage}
                                    title={news.title}
                                    description={news.description}
                                    author={news.author}
                                    name={news.source.name}
                                    url={news.url}
                                    date={news.publishedAt}
                                />
                            ))}
                        </div>
                    </div>
            }

            <a href="#top" onClick={scrolltoTop} id="btn-top" className="btn-top text-white">
                <i class="fas fa-arrow-up p-3"></i>
            </a>
        </>
    )
}