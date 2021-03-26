import React from 'react'
import ButtonDarks from '../Button/Button.dark'
import ImageSlider from './ImageSlider'
import PFP from '../../img/PFP.jpg'
import PFP2 from '../../img/PFP2.jpg'

const PaulineFP = () => {
    return (
        <div className="container">
            <h1 className="has-text-centered my-3">Pauline Ferrand Prévot</h1>
            <div className="container green">
                <div>
                    <h2 className="has-text-centered">
                        Cyliste professionnelle
                    </h2>
                    <h4 className="is-size-5 has-text-centered">
                        8 fois championne du monde
                    </h4>
                </div>
                <div className="column is-mobile my-1 is-align-items-center">
                    <p className="is-success has-text-centered">Idée</p>
                    <p className="my-2 has-text-left">
                        Site vitrine présentant la grande Championne de cyclisme
                        Pauline Ferrand Prévot.
                    </p>
                    <p className="my-2 is-success has-text-centered">
                        Technologie
                    </p>
                    <p className=" my-2has-text-left">
                        React JS, Figma, CSS
                    </p>
                    <p className="my-2 is-success has-text-centered">
                        Compétences mise en oeuvre
                    </p>
                    <p className="my-2 has-text-left">
                        UX/UI Design, Dessin
                    </p>
                </div>
                <a
                    href="http://pfp.aureliensebe.com"
                    target="_blank"
                    style={{ display: 'grid' }}
                >
                    <ButtonDarks
                        value="Découvrir"
                        style={{ color: '#EFFBF8' }}
                    />
                </a>
            </div>
            <ImageSlider img={[PFP, PFP2]} />
            <a href="/portfolio" style={{ display: 'grid' }} className="my-3">
                <ButtonDarks value="Portfolio" />
            </a>
        </div>
    )
}

export default PaulineFP
