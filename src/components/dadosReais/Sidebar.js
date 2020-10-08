import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

class Sidebar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            metricasEstado: localStorage.getItem("@time-series-dashboard/teste") == null ? "nav-link-desabilitado" : "nav-link-habilitado"
        };
    }

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
                            <NavLink className="nav-link" to="/importarPredicoes">
                                <p>Importar predições</p>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={"nav-link " + this.state.metricasEstado} to="/metricas">
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