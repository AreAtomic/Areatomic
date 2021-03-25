import React from 'react'
import ButtonDarks from '../Button/Button.dark'
import ImageSlider from './ImageSlider'

const TrainPreddict = () => {
    return (
        <div className="container">
            <h1 className="has-text-centered my-3">TrainPreddict</h1>
            <div className="container foncee">
                <h2 className="has-text-centered">Application Web</h2>
                <h4 className="is-size-5 has-text-centered">
                    Pour les cyclistes
                </h4>
                <div className="column is-mobile my-1 is-align-items-center">
                    <p className="my-2 is-success has-text-centered">Idée</p>
                    <p className="my-2 has-text-left">
                        Une application pour cycliste permettant de générer un
                        plan d’entrainement personnalisé et d’avoir un suivi
                        personnalisé
                    </p>
                    <p className="my-2 is-success has-text-centered">
                        Technologie
                    </p>
                    <p className=" my-2has-text-left">
                        Mongo DB, Express JS, React JS, Node JS
                    </p>
                    <p className="my-2 is-success has-text-centered">
                        Compétences mise en oeuvre
                    </p>
                    <p className="my-2 has-text-left">
                        UX/UI Design, modélisation de donné et Intelligence
                        artificielle
                    </p>
                </div>
            </div>
            <ImageSlider />
            <a href="/portfolio" style={{display: "grid"}} className="my-3">
                <ButtonDarks value="Portfolio" />
            </a>
        </div>
    )
}

export default TrainPreddict
