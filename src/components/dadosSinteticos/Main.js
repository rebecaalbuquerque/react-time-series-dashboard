import React, { Component } from 'react'
import Navbar from "../Navbar"
import Footer from "../Footer"
import { Switch, Route, Redirect } from "react-router-dom"
import GerarSeries from "../GerarSeries"
import Metricas from "../Metricas"

class Main extends Component {

    render() {

        return (
            <div className="main-panel">
                <Navbar />
                <Switch>
                    <Route path="/gerarSeries" component={GerarSeries} />
                    <Route path="/metricas" component={Metricas} />
                    <Redirect from="*" to="/gerarSeries" />
                </Switch>
                <Footer />
            </div>
        )

    }

}

export { Main }