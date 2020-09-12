import React from 'react';
import {Link} from 'react-router-dom';
// import {useSelector,useDispatch} from 'react-redux';

import './styles.css';

export default function Navbar() {
    // const dispatch = useDispatch();

    return (
        <nav className="navbar navbar-expand-lg">
            <i className="far fa-newspaper text-white fa-2x mx-2"></i>

            <div className="collapse navbar-collapse">
                {/* <h3><Link className="nav-link" to="/">evox<strong>News</strong></Link></h3> */}
                <ul className="navbar-nav">
                    <li className="nav-item"><Link className="nav-link" to="/">evox <strong>News</strong></Link></li>

                    {/* {
                        useSelector(state => state.userLogged) > 0 ?
                            <>
                                <li className="nav-item"><Link className="nav-link" to="/newevent">Publicar Evento</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/events/mine">Meus Eventos</Link></li>
                                <li className="nav-item"><Link className="nav-link" onClick={() => dispatch({ type: 'LOG_OUT' })}>Sair</Link></li>
                            </>
                            :
                            <>
                                <li className="nav-item"><Link className="nav-link" to="/register">Cadastrar</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
                            </>

                    } */}
                </ul>
            </div>
        </nav>
    )
}