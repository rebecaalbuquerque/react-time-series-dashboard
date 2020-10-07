import React, {Component} from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import Init from './components/Init'
import Selecao from './components/Selecao'

class App extends Component {
  render() {
    return (

        <Router>
          <Switch>
            <Route path="/init" component={Init} />
            <Route path="/selecao" component={Selecao} />
            <Redirect from="*" to="/selecao" />
          </Switch>
        </Router>

    )
  }
}

export default App;
