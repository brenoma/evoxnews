import React from 'react';

import './styles.css';

export default function Card({ img, title, description, author, url, key }) {


    return (
        <div className="col-sm-12 mt-5 mx-auto card">

            <div className="row-6 card-content">
                <h4 className="text-center my-3 mx-2 card-title">{title}</h4>
                <img src={img} alt="Imagem" className="card-img-top img-fluid img-card mt-3" />
                <div className="card-body">
                    <p className="card-text text-justify">{description}</p>

                    <div className="d-flex align-items-center footer-card">
                        <div className="col-6">
                            <a href={url} rel='noopener noreferrer' target="_blank" className="btn btn-sm btn-details">+ detalhes</a>
                        </div>

                        <div className="col-6 text-right">
                            <i className="fas fa-pen-nib"> {author}</i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}