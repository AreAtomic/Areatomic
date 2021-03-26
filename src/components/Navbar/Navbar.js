import React, { useState } from 'react'

// Composants
import ButtonDark from '../Button/Button.dark'
import Logo from '../Logo/Logo'
import menu from '../../img/Menu.png'
import close from '../../img/close.png'

const Navbar = () => {
    const [active, setActive] = useState(false)
    const [largeur, setLargeur] = useState(window.innerWidth)

    const activeMenu = () => {
        setActive(!active)
    }

    window.onresize = () => {
        setLargeur(window.innerWidth)
    }

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    <Logo width={50} />
                </a>

                <a
                    className="navbar-item"
                    style={{
                        display: `${largeur > 1023 ? 'none' : 'grid'}`,
                        alignItems: 'center',
                        margin: '0 auto',
                    }}
                    href="/contact"
                >
                    <ButtonDark value="Me contacter" />
                </a>

                <a
                    className="navbar-burger"
                    style={{
                        display: `${largeur > 1023 ? 'none' : 'grid'}`,
                        alignItems: 'center',
                        marginLeft: '0',
                    }}
                    onClick={activeMenu}
                >
                    {active ? (
                        <img src={close} alt="Menu" className="margin" />
                    ) : (
                        <img src={menu} alt="Menu" className="margin" />
                    )}
                </a>
            </div>

            <div className={`navbar-menu ${active ? 'is-active' : ''}`}>
                <div className="navbar-start">
                    <a className="navbar-item" href="/competences">
                        Compétences
                    </a>
                    <a className="navbar-item" href="/parcours">
                        Parcours
                    </a>

                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">Portfolio</a>

                        <div className="navbar-dropdown">
                            <a className="navbar-item" href="/portfolio">
                                Tous mes projets
                            </a>
                            <a
                                className="navbar-item"
                                href="/portfolio/trainpreddict"
                            >
                                TrainPreddict
                            </a>
                            <a
                                className="navbar-item"
                                href="/portfolio/lesartsenbois"
                            >
                                Les arts en bois
                            </a>
                            <a
                                className="navbar-item"
                                href="/portfolio/fabmusic"
                            >
                                Fab.Music
                            </a>
                            <a
                                className="navbar-item"
                                href="/portfolio/blackpanther"
                            >
                                Black Panther
                            </a>
                            <a className="navbar-item" href="/portfolio/pfp">
                                Pauline Ferrand Prévot
                            </a>
                        </div>
                    </div>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <a className="buttons" href="/contact">
                            <ButtonDark value="Me contacter" />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
