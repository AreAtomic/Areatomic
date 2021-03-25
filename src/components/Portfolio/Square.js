import React from 'react'

import ButtonGreen from '../Button/Button.green'

const Square = () => {
    return (
        <div className="square">
            <h3>{props.title}</h3>
            <a href={`/portfolio/${props.lien}`}>
                <ButtonGreen value={props.value} />
            </a>
        </div>
    )
}

export default Square
