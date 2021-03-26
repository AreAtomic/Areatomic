//Styles
import './Portfolio.css'

// React
import React from 'react'

// Composants
import Square from './Square'
import Trainpreddict from '../../img/TrainPreddict.jpg'
import LesArtsEnBois from '../../img/accueil.png'
import FabMusic from '../../img/fabmusic.jpg'
import BlackPanther from '../../img/BlackPanther.jpg'
import PFP from '../../img/PFP.jpg'
import Mail from '../../img/Mail.jpg'

const Portfolio = () => {
    return (
        <div className="container is-mobile mt-1 has-text-centered">
            <h1>Portfolio</h1>
            <Square
                color="foncee"
                lien="trainpreddict"
                img={Trainpreddict}
                title="TrainPreddict"
                description="Application pour cyclistes"
            />
            <Square
                color="green"
                lien="lesartsenbois"
                img={LesArtsEnBois}
                title="Les Arts en Bois"
                description="Artisane ébéniste"
            />
            <Square
                color="clair"
                lien="fabmusic"
                img={FabMusic}
                title="Fab.Music"
                description="Fabrique à musique"
            />
            <Square
                color="foncee"
                lien="blackpanther"
                img={BlackPanther}
                title="Black Panther"
                description="Site vitrine animé"
            />
            <Square
                color="green"
                lien="pfp"
                img={PFP}
                title="Pauline Ferrand Prévot"
                description="Sitre de présentation"
            />
        </div>
    )
}

export default Portfolio
