import './Accueil.css'

import React, { useState } from 'react'

// Composants
import Logo from '../Logo/Logo'
import github from '../../Github.png'
import linkedin from '../../Linkedin.png'
import trainpreddict from '../../TrainPreddict.png'
import ButtonGreen from '../Button/Button.green'

const Accueil = (props) => {
    const [text, setText] = useState('Développeur Informatique')

    function animate() {
        setTimeout(() => {
            let array_text = [
                'Développeur informatique',
                'Entrepreneur',
                'Aventurier',
            ]
            let index =
                array_text.indexOf(text) == array_text.length - 1
                    ? 0
                    : array_text.indexOf(text) + 1

            setText(array_text[index])
        }, 3000)
    }

    animate()

    return (
        <div className="container">
            <div className="column is-centered mt-6" style={{ width: '96vw' }}>
                <h1 className="has-text-centered mt-6">Aurélien Sèbe</h1>
                <div style={{ display: 'grid' }}>
                    <Logo width={150} />
                </div>
                <h2 className="has-text-centered write">{text}</h2>
                <div className="columns is-mobile mt-6">
                    <div className="column">
                        <div style={{ display: 'grid' }}>
                            <img
                                src={github}
                                alt="Github Areatomic, Aurélien Sèbe développeur informatique Castres"
                                style={{ margin: '0 auto' }}
                            />
                        </div>
                        <h5 className="has-text-centered">Areatomic</h5>
                    </div>
                    <a className="column">
                        <div style={{ display: 'grid' }}>
                            <img
                                src={linkedin}
                                alt="Github Areatomic, Aurélien Sèbe développeur informatique Castres"
                                style={{ margin: '0 auto' }}
                            />
                        </div>
                        <h5 className="has-text-centered">LinkedIn</h5>
                    </a>
                </div>
                <div className="columns is-mobile mt-1">
                    <a className="column is-offset-one-third is-one-third">
                        <div style={{ display: 'grid' }}>
                            <img
                                src={trainpreddict}
                                alt="Github Areatomic, Aurélien Sèbe développeur informatique Castres"
                                style={{ margin: '0 auto', width: '60px' }}
                            />
                        </div>
                        <h5 className="has-text-centered">TrainPreddict</h5>
                    </a>
                </div>
                <div className="bouton-accueil mt-5">
                    <ButtonGreen value="Me connaître" />
                </div>
            </div>
        </div>
    )
}

export default Accueil
