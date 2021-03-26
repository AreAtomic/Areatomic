import React from 'react'
import ButtonDarks from '../Button/Button.dark'
import ImageSlider from './ImageSlider'
import FM from '../../img/fabmusic.jpg'
import FM2 from '../../img/fabm2.jpg'
import FM3 from '../../img/fabm3.jpg'
import ButtonGreen from '../Button/Button.green'

const FabMusic = () => {
    return (
        <div className="container">
            <h1 className="has-text-centered my-3">Fab.Music</h1>
            <div className="container white">
                <div>
                    <h2 className="has-text-centered">Joueur de musique</h2>
                    <h4 className="is-size-5 has-text-centered">
                        Piano virtuel
                    </h4>
                </div>
                <div className="column is-mobile my-1 is-align-items-center">
                    <p className="is-success has-text-centered">Idée</p>
                    <p className="my-2 has-text-left">
                        Un site qui permet de jouer quelques notes de musique et
                        de jouer des animations en même temps.
                    </p>
                    <p className="my-2 is-success has-text-centered">
                        Technologie
                    </p>
                    <p className=" my-2has-text-left">HTML, CSS, Javascript</p>
                    <p className="my-2 is-success has-text-centered">
                        Compétences mise en oeuvre
                    </p>
                    <p className="my-2 has-text-left">
                        Gestion de son, Animation, et Design
                    </p>
                </div>
                <a
                    href="http://fab-music.porfolio.aureliensebe.com/"
                    style={{ display: 'grid' }}
                >
                    <ButtonDarks
                        value="Découvrir"
                        style={{ color: '#EFFBF8' }}
                    />
                </a>
            </div>
            <ImageSlider img={[FM, FM2, FM3]} />
            <a href="/portfolio" style={{ display: 'grid' }} className="my-3">
                <ButtonDarks value="Portfolio" />
            </a>
        </div>
    )
}

export default FabMusic
