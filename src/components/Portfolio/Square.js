import React from 'react'

import ButtonGreen from '../Button/Button.green'
import ButtonDark from '../Button/Button.dark'

const Square = (props) => {
    return (
        <div className={`square ${props.color} my-4`}>
            <h3 className="is-success">{props.title}</h3>
            <p>{props.description}</p>
            <a href={`/portfolio/${props.lien}`}>
                {props.color == 'foncee' ? (
                    <ButtonGreen value="En savoir plus" />
                ) : (
                    <ButtonDark value="En savoir plus" />
                )}
            </a>
            <div className="background"></div>
            <img src={props.img} className="background-img" />
        </div>
    )
}

export default Square
