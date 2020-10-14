import React, {Component} from 'react';
import {Link} from "react-router-dom"

class Selecao extends Component {

    constructor(props) {
        super(props);

        localStorage.clear()

    }

    render() {
        return (
            <div className="content">
                <div className="vertical-center">
                    <ul className="ul-without-bullets">
                        <li>
                            <Link to={{pathname: "/init", data: {isSintetico: true}}}>
                                <button type="button" className="btn-primary">Dados sintéticos</button>
                            </Link>
                        </li>

                        <li>
                            <Link to={{pathname: "/init", data: {isSintetico: false}}}>
                                <button type="button" className="btn-primary">Dados reais</button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Selecao;
