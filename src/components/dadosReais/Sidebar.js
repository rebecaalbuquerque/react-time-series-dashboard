import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

class Sidebar extends Component {

    render() {

        return (
            <div className="sidebar">
                
                <div className="sidebar-wrapper">
                    <div className="logo">
                        <Link to="/" className="simple-text">
                            Lorem ipsum
                        </Link>
                    </div>

                    <ul className="nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/gerarSeries">
                                <p>Item 3</p>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/gerarSeries">
                                <p>Item 4</p>
                            </NavLink>
                        </li>
                    </ul>

                </div>
            </div>
        )

    }

}

export { Sidebar }