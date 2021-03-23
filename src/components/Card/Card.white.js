// Styles
import './Card.css'

// React
import React from 'react'

const CardGreen = (props) => {
    return (
        <div className="container white">
            <h2 className="has-text-centered">{props.title}</h2>
            <h4 className="is-size-5 has-text-centered">{props.subtitle}</h4>
            <div style={{ display: 'grid', height: '52vh' }}>
                {props.img.map((item, i) => {
                    return (
                        <div className="columns is-mobile my-1 is-align-items-center">
                            <div className="column is-4">
                                <div style={{ display: 'grid' }}>
                                    <img
                                        src={item}
                                        alt="Logo framework JS, Aurélien Sèbe développeur web Castres"
                                        style={{ margin: '0 auto' }}
                                    />
                                </div>
                                <p className="is-success has-text-centered">
                                    {props.nom[i]}
                                </p>
                            </div>
                            <div className="column is-7 percent">
                                <div
                                    style={{
                                        width: `${props.pourcentage[i]}%`,
                                        height: '18px',
                                        background: '#1A535C',
                                    }}
                                ></div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CardGreen
