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

                <div
                    className="navbar-item"
                    style={{
                        display: `${largeur > 1023 ? 'none' : 'grid'}`,
                        alignItems: 'center',
                        margin: '0 auto',
                    }}
                >
                    <ButtonDark value="Me contacter" />
                </div>

                <a
                    className="navbar-burger"
                    style={{
                        display: `${largeur > 1023 ? 'none' : 'grid'}`,
                        alignItems: 'center',
                        marginLeft: '0'
                    }}
                    onClick={activeMenu}
                >
                    {active ? (
                        <img
                            src={close}
                            alt="Menu"
                            className="margin"
                        />
                    ) : (
                        <img
                            src={menu}
                            alt="Menu"
                            className="margin"
                        />
                    )}
                </a>
            </div>

            <div className={`navbar-menu ${active ? 'is-active' : ''}`}>
                <div className="navbar-start">
                    <a className="navbar-item">Accueil</a>

                    <a className="navbar-item">Compétences</a>

                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">Portfolio</a>

                        <div className="navbar-dropdown">
                            <a className="navbar-item">TrainPreddict</a>
                            <a className="navbar-item">Les arts en bois</a>
                            <a className="navbar-item">Fabmusic</a>
                            <a className="navbar-item">BlackPanther</a>
                        </div>
                    </div>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <ButtonDark value="Me contacter" />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
