import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Homepage from './Pages/Homepage'
import Samplepage from './Pages/Samplepage'
import Header from './components/Header'
import Footer from './components/Footer'

import './scss/app.scss'
import {header, banner, about, solutions} from './data'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      header: header,
      banner: banner,
      about: about,
      solutions: solutions
    }
  }

  render(){
    return (
            <Router>
              <div>
                  <Header header={this.state.header} />
                  <Switch>
                    <Route exact path={"/"} render={props => <Homepage data={this.state} />} />
                    <Route path="/sprintzero" render={props => <Samplepage {...props} />} />
                    <Route path="/innovationsquad" render={props => <Samplepage {...props} />} />
                    <Route path="/blog5" render={props => <Samplepage {...props} />} />
                  </Switch>
                <Footer />
              </div>
            </Router>
    )
  }
}

export default App
