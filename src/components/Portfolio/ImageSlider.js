import React, { useState } from 'react'

import Next from '../../img/Next.png'

const ImageSlider = (props) => {
    const [index, setIndex] = useState(0)

    const next = () => {
        if (index != props.img.length - 1) {
            setIndex(index + 1)
        } else {
            setIndex(0)
        }
    }

    const previous = () => {
        if (index != 0) {
            setIndex(index - 1)
        } else {
            setIndex(props.img.length - 1)
        }
    }

    console.log(props)

    return (
        <div className="container">
            <h1 className="has-text-centered my-2">Photos</h1>
            <div className="slider my-2">
                {props.img.map((item, i) => {
                    return (
                        <div
                            className={`slide-item ${
                                index == i ? 'active' : ''
                            }`}
                        >
                            <img
                                src={item}
                                alt="Projet développement Web, Aurélien Sèbe Castres"
                                style={{ borderRadius: '10px' }}
                            />
                        </div>
                    )
                })}
            </div>
            <nav
                class="pagination is-centered"
                role="navigation"
                aria-label="pagination"
            >
                <button class="pagination-previous" onClick={previous}>
                    <img
                        src={Next}
                        alt="Flèche suivant, Aurélien Sèbe Développeur informatique Castres"
                        style={{ transform: 'rotate(180deg)' }}
                    />
                </button>
                <ul class="pagination-list">
                    {props.img.map((item, i) => {
                        return (
                            <li>
                                <a
                                    class={`pagination-link ${
                                        index == i ? 'is-current' : ''
                                    }`}
                                >
                                    .
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <button class="pagination-next" onClick={next}>
                    <img
                        src={Next}
                        alt="Flèche suivant, Aurélien Sèbe Développeur informatique Castres"
                    />
                </button>
            </nav>
        </div>
    )
}

export default ImageSlider
