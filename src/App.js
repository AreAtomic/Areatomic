// Styles
import './global.sass'

// React, Router
import React from 'react'
import { Switch, Router, Route } from 'react-router-dom'

import { createBrowserHistory } from 'history';

// Composants
import Navbar from './components/Navbar/Navbar'
import Accueil from './components/Accueil/Accueil'
import SliderSkill from './components/Slider/Slider.skills'
import SliderTimeline from './components/Slider/Slider.timeline'

const history = createBrowserHistory();

const App = () => {
    return (
        <div>
            <Navbar />
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={Accueil} />
                    <Route exact path="/competences" component={SliderSkill}/>
                    <Route exact path="/parcours" component={SliderTimeline}/>
                </Switch>
            </Router>
        </div>
    )
}

export default App
