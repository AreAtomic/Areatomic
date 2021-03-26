import React from 'react'
import ButtonDarks from '../Button/Button.dark'
import ImageSlider from './ImageSlider'
import BP from '../../img/BlackPanther.jpg'
import BP2 from '../../img/BP2.jpg'
import BP3 from '../../img/BP3.jpg'
import ButtonGreen from '../Button/Button.green'

const BlackPanther = () => {
    return (
        <div className="container">
            <h1 className="has-text-centered my-3">BlackPanther</h1>
            <div className="container foncee">
                <div>
                    <h2 className="has-text-centered">Vitrine et animation</h2>
                    <h4 className="is-size-5 has-text-centered">
                        Présentation de BlackPanther
                    </h4>
                </div>
                <div className="column is-mobile my-1 is-align-items-center">
                    <p className="is-success has-text-centered">Idée</p>
                    <p className="my-2 has-text-left">
                        Un site qui permet d'animer le personnage Marvel de
                        BlackPanther de ses mouvement les plus connus.
                    </p>
                    <p className="my-2 is-success has-text-centered">
                        Technologie
                    </p>
                    <p className=" my-2has-text-left">React JS, CSS, Figma</p>
                    <p className="my-2 is-success has-text-centered">
                        Compétences mise en oeuvre
                    </p>
                    <p className="my-2 has-text-left">
                        UX/UI Design, Animation,
                    </p>
                </div>
                <a
                    href="http://blackpanther.aureliensebe.com"
                    style={{ display: 'grid' }}
                >
                    <ButtonGreen
                        value="Découvrir"
                        style={{ color: '#EFFBF8' }}
                    />
                </a>
            </div>
            <ImageSlider img={[BP, BP2, BP3]} />
            <a href="/portfolio" style={{ display: 'grid' }} className="my-3">
                <ButtonDarks value="Portfolio" />
            </a>
        </div>
    )
}

export default BlackPanther
