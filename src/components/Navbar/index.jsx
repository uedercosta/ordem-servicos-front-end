import React from 'react';
import { APP_NAME } from './../../util/Constantes';


export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">{APP_NAME}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Cadastros</a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="/clientes">Clientes</a>
                                    <a className="dropdown-item" href="/servicos">Serviços</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="/usuarios">Usuários</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/ordem-servicos">Ordem de Serviços</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}