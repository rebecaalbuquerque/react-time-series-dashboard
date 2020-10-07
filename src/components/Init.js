import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Sidebar as SidebarSinteticos } from './dadosSinteticos/Sidebar'
import { Sidebar as SidebarReais } from './dadosReais/Sidebar'
import { Main as MainSinteticos } from './dadosSinteticos/Main'
import { Main as MainReais } from './dadosReais/Main'

class Init extends Component {
    render() {

        const { data } = this.props.location
        console.log(data)

        return (
            <div className="wrapper">
                <Router>
                    { data.isSintetico
                        ? <SidebarSinteticos />
                        : <SidebarReais />
                    }
                    { data.isSintetico
                        ? <Route path="/" component={MainSinteticos} />
                        : <Route path="/" component={MainReais} />
                    }
                
                </Router>
            </div>
        )
    }
}

export default Init;