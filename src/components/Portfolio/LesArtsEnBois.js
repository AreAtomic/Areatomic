import React from 'react'
import ButtonDarks from '../Button/Button.dark'
import ButtonGreen from '../Button/Button.green'
import ImageSlider from './ImageSlider'
import LAB from '../../img/accueil.png'
import LAB2 from '../../img/services.png'
import LAB3 from '../../img/creations1.png'
import LAB4 from '../../img/contact.png'

const LesArtsEnBois = () => {
    return (
        <div className="container">
            <h1 className="has-text-centered my-3">Les Arts en Bois</h1>
            <div className="container green">
                <div>
                    <h2 className="has-text-centered">Artisane ébéniste</h2>
                    <h4 className="is-size-5 has-text-centered">
                        Installée en Haute Savoie
                    </h4>
                </div>
                <div className="column is-mobile my-1 is-align-items-center">
                    <p className="is-success has-text-centered">Idée</p>
                    <p className="my-2 has-text-left">
                        Site vitrine pour Séverine Claudel, artisane ébéniste
                        installée en haute savoie. Présentation des services et
                        des travaux de Sévérine.
                    </p>
                    <p className="my-2 is-success has-text-centered">
                        Technologie
                    </p>
                    <p className=" my-2has-text-left">
                        HTML, CSS, Javascript, PHP
                    </p>
                    <p className="my-2 is-success has-text-centered">
                        Compétences mise en oeuvre
                    </p>
                    <p className="my-2 has-text-left">
                        Design Web, Formulaire de contact, Animation
                    </p>
                </div>
                <a
                    href="http://lesartsenbois.fr"
                    target="_blank"
                    style={{ display: 'grid' }}
                >
                    <ButtonDarks
                        value="Découvrir"
                        style={{ color: '#EFFBF8' }}
                    />
                </a>
            </div>
            <ImageSlider img={[LAB, LAB2, LAB3, LAB4]} />
            <a href="/portfolio" style={{ display: 'grid' }} className="my-3">
                <ButtonDarks value="Portfolio" />
            </a>
        </div>
    )
}

export default LesArtsEnBois
