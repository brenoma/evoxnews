import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export default function Card({ img, title, description, author, url }) {


    return (
        <div className="col-sm-12 mt-5 mx-auto card">
            <h4 className="text-center my-3 mx-2 card-title">{title}</h4>
            <img src={img} alt="Imagem" className="card-img-top img-card mt-3" />
            <div className="card-body">
                <p className="card-text text-justify">{description}</p>

                <div className="row d-flex align-items-center footer-card">
                    <div className="col-6">
                        <a href={url} target="_blank" className="btn btn-sm btn-details">+ detalhes</a>
                    </div>

                    <div className="col-6 text-right">
                        <i className="fas fa-pen-nib"> {author}</i>
                    </div>
                </div>
            </div>
        </div>
    )
}