import React, { useState } from 'react'

import Next from '../../img/Next.png'

const ImageSlider = () => {
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

    return (
        <div className="container">
            <h1 className="has-text-centered my-2">Photos</h1>
            <div className="slider my-2">
                <div className={`slide-item ${index == 0 ? 'active' : ''}`}>
                    Image 1
                </div>
                <div className={`slide-item ${index == 1 ? 'active' : ''}`}>
                    Image 2
                </div>
                <div className={`slide-item ${index == 2 ? 'active' : ''}`}>
                    Image 3
                </div>
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
                    <li>
                        <a
                            class={`pagination-link ${
                                index == 0 ? 'is-current' : ''
                            }`}
                        >
                            .
                        </a>
                    </li>
                    <li>
                        <a
                            class={`pagination-link ${
                                index == 1 ? 'is-current' : ''
                            }`}
                        >
                            .
                        </a>
                    </li>
                    <li>
                        <a
                            class={`pagination-link ${
                                index == 2 ? 'is-current' : ''
                            }`}
                        >
                            .
                        </a>
                    </li>
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
