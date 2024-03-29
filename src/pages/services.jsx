import { useEffect, useState } from 'react'
import { HeadingOne } from '../components/atoms'
import { Navbar, Footer } from '../components/organisms/index'
import website from '../assets/WebisteSurMesure.svg'
import accompagnement from '../assets/Accompagnement.svg'
import outils from '../assets/Outils.svg'

const Services = (props) => {
    const [hidden, setHidden] = useState(false)

    useEffect(() => {
        const width = window.innerWidth

        setHidden(width < 1024)

        window.addEventListener('resize', () => {
            setHidden(width < 1024)
        })
    }, [])

    return (
        <>
            <div className="bg-gradient-to-b from-blue-areatomic-50 to-white-areatomic-500 grid">
                <Navbar />
                <section id="sur-mesure">
                    <div
                        className={`grid ${
                            !hidden ? 'grid-cols-3 px-10' : 'grid-cols-1 px-4'
                        } py-20`}
                    >
                        {/* Left side */}
                        <div className="mt-10 col-span-2">
                            <HeadingOne>
                                Faites <b>décoller</b> votre business avec un
                                site <b>sur mesure</b>
                            </HeadingOne>
                            <div className={`${hidden ? 'flex' : 'hidden'}`}>
                                <img
                                    src={website}
                                    id="rocket"
                                    alt="Votre business sur mesure qui décolle, by areatomic"
                                />
                            </div>
                            <p className="py-3 mt-4 text-purple-areatomic-500">
                                La présence sur le web est un <b>atout</b>{' '}
                                majeur pour vous et votre business.
                                <br />
                                C'est pour cela qu'Areatomic vous propose un{' '}
                                <b>accompagnement complet</b>
                                <br />
                                pour réaliser un site web <b>
                                    à votre image
                                </b>{' '}
                                et faire décoller votre business.
                            </p>
                            <p className="py-2 text-purple-areatomic-500">
                                Pour cela, nous réalisons des réunions pour{' '}
                                <b>cibler</b> vos besoins réels, afin
                                <br />
                                d'orienter le développement de votre site dans
                                la <b>direction</b> que vous
                                <br />
                                souhaitez. Par la suite, nous vous proposons des
                                maquettes que nous
                                <br />
                                ajustons selon vos retours jusqu'à ce que cela
                                soit <b>parfait.</b>
                            </p>
                            <p className="py-3 text-purple-areatomic-500">
                                Pour finir, une fois que cela vous convient,
                                nous développons votre site et
                                <br />
                                nous vous le <b>livrons.</b> Lorsque le site est
                                en ligne, nous vous laissons la
                                <br />
                                main si vous le <b>souhaitez,</b> sinon, nous
                                réalisons l'administration du site
                                <br />
                                pour vous.
                            </p>
                        </div>
                        {/* Right side */}
                        <div className={`${!hidden ? 'flex' : 'hidden'}`}>
                            <img
                                src={website}
                                id="rocket"
                                alt="Votre business sur mesure qui décolle, by areatomic"
                                className="mx-auto"
                            />
                        </div>
                    </div>
                </section>
                <section id="accompagnement-formation">
                    <div
                        className={`grid ${
                            !hidden ? 'grid-cols-3 px-10' : 'grid-cols-1 px-4'
                        } py-20`}
                    >
                        {/* Left side */}
                        <div className={`${!hidden ? 'flex' : 'hidden'}`}>
                            <img
                                src={accompagnement}
                                id="rocket"
                                alt="Un accompagnement informatique sur mesure, by areatomic"
                                className="mx-auto"
                            />
                        </div>
                        {/* Right side */}
                        <div className={`xl:mt-32 lg:mt-20 col-span-2 md:pl-5`}>
                            <HeadingOne>
                                Un <b>accompagnement</b> complet et une{' '}
                                <b>formation</b> continue
                            </HeadingOne>
                            <div className={`${hidden ? 'flex' : 'hidden'}`}>
                                <img
                                    src={accompagnement}
                                    id="rocket"
                                    alt="Un accompagnement informatique sur mesure, by areatomic"
                                    className="mx-auto"
                                />
                            </div>
                            <p className="py-3 mt-4 text-purple-areatomic-500">
                                Vous aimeriez <b>savoir</b> développer vos
                                propres sites web, vous remettre à
                                <br />
                                niveau sur des technologies récentes ou
                                apprendre de{' '}
                                <b>
                                    nouvelles
                                    <br />
                                    technologies
                                </b>{' '}
                                pour ajouter une plus value à votre business ?
                            </p>
                            <p className="py-2 text-purple-areatomic-500">
                                Nous vous donnons la possibilité d'accéder à des{' '}
                                <b>formations</b> en ligne
                                <br />
                                sur des technologie de développement web telle
                                que <b>JavaScript.</b> Ces
                                <br />
                                formations seront suivies de 5 heures{' '}
                                <b>d'accompagnement</b> personnalisé
                                <br />
                                par mois pour vous aider à avancer au mieux.
                            </p>
                            <p className="py-3 text-purple-areatomic-500">
                                Si vous disposez déjà d'une équipe technique,
                                nous mettons une équipe
                                <br />
                                spécialisée à votre service pour les{' '}
                                <b>accompagner</b> dans leurs
                                <br />
                                problématiques du moment et les orienter dans
                                leurs <b>choix stratégiques.</b>
                            </p>
                        </div>
                    </div>
                </section>
                <section id="outils">
                    <div
                        className={`grid ${
                            !hidden ? 'grid-cols-3 px-10' : 'grid-cols-1 px-4'
                        } py-20`}
                    >
                        {/* Left side */}
                        <div className="xl:mt-32 lg:mt-20 col-span-2">
                            <HeadingOne>
                                Des <b>outils</b> pour vous les{' '}
                                <b>développeurs</b>
                            </HeadingOne>
                            <div className={`${hidden ? 'flex' : 'hidden'}`}>
                                <img
                                    src={outils}
                                    id="rocket"
                                    alt="Un accompagnement informatique sur mesure, by areatomic"
                                    className="mx-auto"
                                />
                            </div>
                            <p className="py-3 mt-4 text-purple-areatomic-500">
                                Si vous êtes vous aussi développeur, vous savez
                                à quel point nous
                                <br />
                                pouvons perdre du temps sur des{' '}
                                <b>taches simples mais répétitives,</b>
                                <br />
                                ce qui nous empêche de nous concentrer sur
                                celles qui comptent réellement.
                            </p>
                            <p className="py-2 text-purple-areatomic-500">
                                C'est pour cela qu'au sein d'Areatomic nous
                                réalisons des outils pour
                                <br />
                                vous permettre de{' '}
                                <b>développer plus rapidement</b> et oublier les
                                taches répétitives afin
                                <br />
                                de nous concentrer sur l'essentiel, nos clients.
                            </p>
                            <p className="py-3 text-purple-areatomic-500">
                                Vous pourrez donc trouver des cheatsheet, des
                                extensions VS Code,
                                <br />
                                des <b>templates,</b> etc. Et si vous ne trouvez
                                pas ce que vous souhaitez,
                                <br />
                                <b>contactez-nous !</b>
                            </p>
                        </div>
                        {/* Right side */}
                        <div className={`${hidden ? 'hidden' : 'flex'}`}>
                            <img
                                src={outils}
                                id="rocket"
                                alt="Un accompagnement informatique sur mesure, by areatomic"
                                className="mx-auto"
                            />
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}

export default Services
