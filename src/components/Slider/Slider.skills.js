// Styles
import './Slider.css'

// React
import React, { useState } from 'react'

// Composants
import CardFoncee from '../Card/Card.foncee'
import CardGreen from '../Card/Card.green'
import CardWhite from '../Card/Card.white'
import ButtonGreen from '../Button/Button.green'
// Images
import Node from '../../img/node.png'
import Mongo from '../../img/leaf.png'
import ReactJS from '../../img/React.png'
import Express from '../../img/Express.png'
import Next from '../../img/Next.png'
import Figma from '../../img/Figma.png'
import Css from '../../img/Css.png'
import Javascript from '../../img/Javascript.png'
import Uxui from '../../img/uxui.png'
import Livre from '../../img/Livre.png'
import Entrepreneur from '../../img/Entrepreneur.png'
import Sports from '../../img/Medals.png'

const SliderSkills = () => {
    const [index, setIndex] = useState(0)

    const next = () => {
        if (index != 2) {
            setIndex(index + 1)
        } else {
            setIndex(0)
        }
    }

    const previous = () => {
        if (index != 0) {
            setIndex(index - 1)
        } else {
            setIndex(2)
        }
    }

    console.log(index)
    return (
        <div className="container">
            <h1 className="has-text-centered my-2">Compétences</h1>
            <div className="slider my-2">
                <div className={`slide-item ${index == 0 ? 'active' : ''}`}>
                    <CardFoncee
                        title="Développeur"
                        subtitle="FullStack"
                        img={[Node, Mongo, ReactJS, Express]}
                        pourcentage={[93, 90, 95, 92]}
                        nom={['Node JS', 'Mongo DB', 'React', 'Express']}
                    />
                </div>
                <div className={`slide-item ${index == 1 ? 'active' : ''}`}>
                    <CardGreen
                        title="Web"
                        subtitle="Designer"
                        img={[Figma, Css, Javascript, Uxui]}
                        pourcentage={[89, 96, 97, 82]}
                        nom={['Figma', 'CSS', 'Javascript', 'UX/UI Design']}
                    />
                </div>
                <div className={`slide-item ${index == 2 ? 'active' : ''}`}>
                    <CardWhite
                        title="Aventurier"
                        subtitle="Étudiant, Entrepreneur, Sportif"
                        img={[Livre, Entrepreneur, Sports]}
                        pourcentage={[99, 95, 97]}
                        nom={['Autodidacte', 'Entrepreneur', 'Sportif']}
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
                {index != 2 ? (
                    <button class="pagination-next" onClick={next}>
                        <img
                            src={Next}
                            alt="Flèche suivant, Aurélien Sèbe Développeur informatique Castres"
                        />
                    </button>
                ) : (
                    <a class="pagination-next" href="/parcours">
                        <ButtonGreen value="Parcours" />
                    </a>
                )}
            </nav>
        </div>
    )
}

export default SliderSkills
