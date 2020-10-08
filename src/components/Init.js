import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Sidebar from './Sidebar'
import Main from './Main'

class Init extends Component {

    render() {
        const { data } = this.props.location

        return (
            <div className="wrapper">
                <Router>
                    <Sidebar isSintetico={data.isSintetico} />
                    <Route
                        path="/"
                        render={(props) => (
                            <Main {...props} isSintetico={data.isSintetico} />
                        )} />
                </Router>
            </div>
        )
    }
}

export default Init;