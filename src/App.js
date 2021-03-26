// Styles
import './global.sass'

// React, Router
import React from 'react'
import { Switch, Router, Route } from 'react-router-dom'

import { createBrowserHistory } from 'history'

// Composants
import Navbar from './components/Navbar/Navbar'
import Accueil from './components/Accueil/Accueil'
import SliderSkill from './components/Slider/Slider.skills'
import SliderTimeline from './components/Slider/Slider.timeline'
import Portfolio from './components/Portfolio/Portfolio'
import TrainPreddict from './components/Portfolio/TrainPreddict'
import LesArtsEnBois from './components/Portfolio/LesArtsEnBois'
import FabMusic from './components/Portfolio/FabMusic'
import PaulineFP from './components/Portfolio/PFP'
import BlackPanther from './components/Portfolio/BlackPanther'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const history = createBrowserHistory()

const App = () => {
    return (
        <div>
            <Navbar />
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={Accueil} />
                    <Route exact path="/competences" component={SliderSkill} />
                    <Route exact path="/parcours" component={SliderTimeline} />
                    <Route exact path="/portfolio" component={Portfolio} />
                    <Route
                        exact
                        path="/portfolio/trainpreddict"
                        component={TrainPreddict}
                    />
                    <Route
                        exact
                        path="/portfolio/lesartsenbois"
                        component={LesArtsEnBois}
                    />
                    <Route
                        exact
                        path="/portfolio/fabmusic"
                        component={FabMusic}
                    />
                    <Route
                        exact
                        path="/portfolio/blackpanther"
                        component={BlackPanther}
                    />
                    <Route exact path="/portfolio/pfp" component={PaulineFP} />
                    <Route exact path="/contact" component={Contact} />
                </Switch>
            </Router>
            <Footer />
        </div>
    )
}

export default App
