import { useEffect, useState } from 'react'
import { HashLink } from 'react-router-hash-link'

import {
    HeadingOne,
    CardWithoutImage,
    ButtonPrimary,
    ButtonSecondary,
    CardArticle,
} from '../components/atoms'
import { Navbar, Footer } from '../components/organisms/index'

import rocket from '../assets/rocket-3d.png'
import planetPurple from '../assets/planet-purple.png'
import planetGold from '../assets/planet-gold.png'
import planetSilver from '../assets/planet-silver.png'
import animationGroup from '../assets/animation-group.svg'
import { useNavigate } from 'react-router-dom'
import { useArticle, useAuth } from '../contexts'
import { AllArticles } from './articles/components'

const Home = (props) => {
    const navigate = useNavigate()
    const articleContext = useArticle()
    const authContext = useAuth()

    const [styles, setStyles] = useState({
        rocket: {
            position: 'absolute',
            zIndex: '4',
            left: '0%',
            top: '60%',
            width: '10vw',
        },
        planetPurple: {
            position: 'absolute',
            zIndex: '3',
            left: '30%',
            top: '-2%',
            width: '1vw',
        },
        planetGold: {
            position: 'absolute',
            zIndex: '2',
            top: '-10%',
            left: '90%',
            width: '0.2vw',
        },
        planetSilver: {
            position: 'absolute',
            zIndex: '2',
            top: '15%',
            left: '80%',
            width: '5vw',
        },
    })
    const [hidden, setHidden] = useState(false)

    useEffect(() => {
        articleContext.getArticles()

        const width = window.innerWidth

        setTimeout(() => {
            setStyles({
                rocket: {
                    position: 'absolute',
                    zIndex: '4',
                    left: '10%',
                    top: '7%',
                    width: '30vw',
                },
                planetPurple: {
                    position: 'absolute',
                    zIndex: '3',
                    top: '2%',
                    left: '0',
                    width: '15vw',
                },
                planetGold: {
                    position: 'absolute',
                    zIndex: '2',
                    top: '2%',
                    left: '70%',
                    width: '5vw',
                },
                planetSilver: {
                    position: 'absolute',
                    zIndex: '1',
                    top: width > 1100 ? '40%' : '20%',
                    left: '60%',
                    width: '17vw',
                },
            })
        }, 100)

        window.addEventListener('resize', () => {
            const width = window.innerWidth
            setHidden(width < 1024)
        })

        setHidden(width < 1024)
    }, [])

    return (
        <>
            <Navbar />
            <div className="bg-gradient-to-b from-blue-areatomic-50 to-white-areatomic-500 w-100 grid">
                <div
                    className={`grid ${
                        hidden ? 'w-fit mx-auto' : 'grid-cols-2'
                    } py-10 md:px-10 px-3`}
                >
                    {/* Left side */}
                    <div className={`${!hidden && 'w-3/4'}`}>
                        <div className="mb-10" />
                        <HeadingOne>
                            Areatomic met votre business en <b>orbite</b>
                        </HeadingOne>
                        {hidden && (
                            <div className="grid justify-center">
                                <img
                                    src={animationGroup}
                                    id="rocket"
                                    alt="Votre business sur mesure qui décolle, by areatomic"
                                    className="duration-1000 ease-in mx-auto"
                                />
                                <div className="mx-auto">
                                    <ButtonPrimary
                                        onClick={() => navigate('/login')}
                                    >
                                        Connexion
                                    </ButtonPrimary>
                                </div>
                            </div>
                        )}
                        <div className="mb-6" />
                        <div className="py-5">
                            <HashLink
                                scroll={(el) =>
                                    el.scrollIntoView({ behavior: 'smooth' })
                                }
                                to={'/services#sur-mesure'}
                                className="w-fit"
                            >
                                <CardWithoutImage
                                    heading="Site sur mesure"
                                    text="Création de site vitrine et de site e-commerce 100% personnalisé pour vous permettre de faire décoller votre business."
                                />
                            </HashLink>
                        </div>
                        <div className="py-1">
                            <HashLink
                                scroll={(el) =>
                                    el.scrollIntoView({ behavior: 'smooth' })
                                }
                                to={'/services#accompagnement-formation'}
                            >
                                <CardWithoutImage
                                    heading="Formation & Apprentissage"
                                    text="Accompagnement des équipes techniques de votre entreprise pour fixer des axes de travail stratégiques pour faire évoluer vos produits."
                                />
                            </HashLink>
                        </div>
                        <div className="py-5">
                            <HashLink
                                scroll={(el) =>
                                    el.scrollIntoView({ behavior: 'smooth' })
                                }
                                to={'/services#outils'}
                            >
                                <CardWithoutImage
                                    heading="Outils"
                                    text="Mise à disposition d'outils pour les développeurs: templates, cheatsheet."
                                />
                            </HashLink>
                        </div>
                    </div>
                    {/* Right side */}
                    {!hidden && (
                        <div className="relative h-[80vh]">
                            <div className="hidden"></div>
                            <img
                                src={rocket}
                                id="rocket"
                                alt="Votre business sur mesure qui décolle, by areatomic"
                                className="duration-1000 ease-in"
                                style={styles.rocket}
                            />
                            <img
                                src={planetPurple}
                                alt="Planète pour votre site sur mesure, by areatomic"
                                className="duration-1000 ease-in"
                                style={styles.planetPurple}
                            />
                            <img
                                src={planetGold}
                                alt="Planète pour des formations web sur mesure, by areatomic"
                                className="duration-1000 ease-in"
                                style={styles.planetGold}
                            />
                            <img
                                src={planetSilver}
                                alt="Planète pour des outils de développement sur mesure, by areatomic"
                                className="duration-1000 ease-in"
                                style={styles.planetSilver}
                            />
                        </div>
                    )}
                </div>
                <section id="produits" className="py-10 px-10 hidden">
                    <div className="flex">
                        <div>
                            <HeadingOne>Nos produits</HeadingOne>
                        </div>
                        <div className="px-20 py-2">
                            <ButtonPrimary className="px-10">
                                Voir tous nos produits
                            </ButtonPrimary>
                        </div>
                    </div>
                    <div>
                        <div id="listeProduits"></div>
                    </div>
                </section>
                <section id="articles" className="py-10 px-10">
                    <div className="flex mb-5">
                        <div>
                            <HeadingOne>Actualité</HeadingOne>
                        </div>
                        <div className="px-20 py-2">
                            <ButtonPrimary
                                className="px-10"
                                onClick={() => navigate('/articles')}
                            >
                                Voir tous nos articles
                            </ButtonPrimary>
                        </div>
                    </div>
                    <div>
                        <div id="listeArticle" className="mb-20">
                            <AllArticles />
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}
export default Home
