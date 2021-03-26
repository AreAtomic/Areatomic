// Styles
import './Slider.css'

// React
import React, { useState } from 'react'

// Composants
import CardFoncee from '../Card/Card.foncee'
import CardGreen from '../Card/Card.green'
import ButtonGreen from '../Button/Button.green'
// Images
import Next from '../../img/Next.png'


const SliderTimeline = () => {
    const [index, setIndex] = useState(0)

    const next = () => {
        if (index != 1) {
            setIndex(index + 1)
        } else {
            setIndex(0)
        }
    }

    const previous = () => {
        if (index != 0) {
            setIndex(index - 1)
        } else {
            setIndex(1)
        }
    }

    return (
        <div className="container">
            <h1 className="has-text-centered my-2">Parcours</h1>
            <div className="slider my-2">
                <div className={`slide-item ${index == 0 ? 'active' : ''}`}>
                    <CardFoncee
                        title="Etudes"
                        subtitle="Ingénieurs informatique en santé"
                        annee={['2018', '2018 - 2020', '2021 - En cours']}
                        description={[
                            'Mention bien',
                            'Mathématiques, informatiques, e-santé',
                            'Informatiques, chefferie de projet, e-santé',
                        ]}
                        nom={[
                            'Baccalauréat SI',
                            'Classe préparatoire ISIS',
                            'Cycle ingénieurs en apprentisge à ISIS',
                        ]}
                    />
                </div>
                <div className={`slide-item ${index == 1 ? 'active' : ''}`}>
                    <CardGreen
                        title="Expériences"
                        subtitle="Entrepreneur"
                        annee={['2019 - En cours', '2021 - En cours', '2021']}
                        description={[
                            'Création de site web pour des entreprise et des particulier',
                            'Sécurisation et mise à niveau du périmètre du SI de Pierre-Fabre',
                            "Application pour la création et le suivi des plan d'entrainement des cyclistes",
                        ]}
                        nom={[
                            'Développeur web en freelance',
                            'Apprentis Pierre-Fabre',
                            'Création de TrainPreddict',
                        ]}
                    />
                </div>
            </div>
            <nav
                class="pagination is-centered"
                role="navigation"
                aria-label="pagination"
            >
                {index != 0 ? (
                    <button class="pagination-previous" onClick={previous}>
                        <img
                            src={Next}
                            alt="Flèche suivant, Aurélien Sèbe Développeur informatique Castres"
                            style={{ transform: 'rotate(180deg)' }}
                        />
                    </button>
                ) : (
                    <button
                        class="pagination-previous"
                        disabled={true}
                    ></button>
                )}
                {index != 1 ? (
                    <button class="pagination-next" onClick={next}>
                        <img
                            src={Next}
                            alt="Flèche suivant, Aurélien Sèbe Développeur informatique Castres"
                        />
                    </button>
                ) : (
                    <a class="pagination-next" href="/portfolio">
                        <ButtonGreen value="Portfolio"/>
                    </a>
                )}
            </nav>
        </div>
    )
}

export default SliderTimeline
