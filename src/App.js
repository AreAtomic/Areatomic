// Styles
import './global.sass'

// React, Router
import React from 'react'
import {Switch, Root} from 'react-router-dom'

// Composants
import logo from './LogoAS.png'
import Navbar from './components/Navbar/Navbar'
import Accueil from './components/Accueil/Accueil'

const App = () => {
    return (
        <div className="App">
            <Navbar />
            <Accueil />
        </div>
    )
}

export default App
