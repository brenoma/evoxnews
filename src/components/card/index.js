import React from 'react';

import './styles.css';

// function handleClick(props) {
//     window.open(props);
// }

function handleTime(props) {
    return (props.slice(11, 13) + ':' + props.slice(14, 16))
}

function handleDate(props) {
    return (props.slice(8, 10) + "/" + props.slice(5, 7) + "/" + props.slice(0, 4))
}

function card({ img, title, description, author, name, url, date, key }) {
    return (
        <div className="col-md-4 col-sm-12 mx-auto body">
            <div className="card">
                <img
                    src={img}
                    alt="Imagem"
                    className="card-image"
                />

                <div className="card-text">
                    <span className="date">às {handleTime(date)} de {handleDate(date)}</span>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>

                <div className="card-stats">
                    <div className="stat borders">
                        <div className="type">Autor</div>
                        <div className="value">{author}</div>
                    </div>
                    <div className="stat">
                        <div className="type">Fonte</div>
                        <div className="value">{name}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default card;

// Just test
    // const dtPartida = props
    // var date1 = new Date(dtPartida.slice(0, 4), dtPartida.slice(5, 7), dtPartida.slice(8, 10), dtPartida.slice(11, 13), dtPartida.slice(14, 16));
    // var dNow = new Date();
    // var diffMs = (date1 - dNow)
    // var diffHrs = Math.floor((diffMs % 86400000) / 3600000);
    // var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000);
    // var diff = diffHrs + 'h ' + diffMins + 'm';
    // return diff.toString();