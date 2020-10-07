import React, { Component } from 'react'
import Navbar from "../Navbar"
import Footer from "../Footer"
import { Switch, Route, Redirect } from "react-router-dom"
import GerarSeries from "../GerarSeries"

class Main extends Component {

    render() {

        return (
            <div className="main-panel">
                <Navbar />
                <Switch>
                    <Route path="/gerarSeries" component={GerarSeries} />
                    <Redirect from="*" to="/gerarSeries" />
                </Switch>
                <Footer />
            </div>
        )

    }

}

export { Main }