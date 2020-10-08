import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import MetricasReduzidas from "./MetricasReduzidas";
import MetricasCompletas from "./MetricasCompletas";

class Metricas extends Component {

    render() {
        /*const { data } = this.props.location*/

        return (
            <div className="content">
                <div className="container-fluid">
                    <p>
                        Métricas
                    </p>
                </div>
            </div>

        /*<Router>
            { data.isVersaoReduzida
                ? <Route path="/metricasteste" component={MetricasReduzidas} />
                : <Route path="/metricasteste" component={MetricasCompletas} />
            }
        </Router>*/
        )

    }

}

export default Metricas