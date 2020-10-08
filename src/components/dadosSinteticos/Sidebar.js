import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

class Sidebar extends Component {

    render() {

        return (
            <div className="sidebar">
                
                <div className="sidebar-wrapper">
                    <div className="logo">
                        <Link to="/" className="simple-text">
                            TS Forecast Analysis
                        </Link>
                    </div>

                    <ul className="nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/gerarSeries">
                                <p>Gerar séries</p>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/importarPredicoes">
                                <p>Importar predições</p>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/metricas">
                                <p>Métricas</p>
                            </NavLink>
                        </li>
                    </ul>

                </div>
            </div>
        )

    }

}

export { Sidebar }