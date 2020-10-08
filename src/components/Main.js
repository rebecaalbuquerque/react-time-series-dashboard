import React, { Component } from 'react'
import Navbar from "./Navbar"
import Footer from "./Footer"
import { Switch, Route, Redirect } from "react-router-dom"
import Metricas from "./Metricas"
import ImportarPredicoes from "./ImportarPredicoes"
import GerarSeries from "./GerarSeries";

class Main extends Component {

    render() {

        return (
            <div className="main-panel">
                <Navbar />
                <Switch>
                    <Route path="/gerarSeries" component={GerarSeries} />
                    <Route path="/importarPredicoes" component={ImportarPredicoes} />
                    <Route path="/metricas" component={Metricas} />

                    {this.props.isSintetico
                        ? <Redirect from="*" to="/gerarSeries" />
                        : <Redirect from="*" to="/importarPredicoes" />
                    }


                </Switch>
                <Footer />
            </div>
        )

    }

}

export default Main