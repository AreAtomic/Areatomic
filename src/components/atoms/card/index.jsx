import { useState, useEffect } from 'react'
import { ButtonPrimary, ButtonSecondary } from '../buttons'
import { Image } from '../../organisms/image'
import { HeadingTwo } from '../headings'
import arrow from '../../../assets/arrow-right.svg'
import { useAuth } from '../../../contexts'
import { useNavigate } from 'react-router-dom'

// TODO: icon "->" sur bouton "Voir plus"

export const CardWithoutImage = (props) => {
    const [hidden, setHidden] = useState(false)

    useEffect(() => {
        const width = window.innerWidth

        window.addEventListener('resize', () => {
            const width = window.innerWidth
            setHidden(width < 1024)
        })

        setHidden(width < 1024)
    }, [])

    return (
        <div
            className={`w-96 md:w-card-sm max-w-card max-h-card-sm bg-component-500 rounded px-4 py-4 ${
                hidden && ''
            }`}
        >
            <HeadingTwo color="text-blue-areatomic-500">
                {props.heading}
            </HeadingTwo>
            <div className="mb-3"></div>
            <p className="text-white-areatomic-500 text-[17px]">{props.text}</p>
            <ButtonSecondary className="flex mx-0 mt-4 items-center justify-center">
                Voir plus{' '}
                <img
                    src={arrow}
                    alt="Flèche voir plus, Areatomic sit web sur mesure"
                    className="ml-2"
                />
            </ButtonSecondary>
        </div>
    )
}

export const CardProduct = (props) => {
    return (
        <div className="w-card-product bg-component-500 rounded px-4 py-7">
            <HeadingTwo color="text-blue-areatomic-500">
                {props.heading}
            </HeadingTwo>
            <div className="mb-2"></div>
            <img src={props.image} alt={props.alt} className="rounded-md" />
            <div className="mb-2"></div>
            <HeadingTwo color="text-blue-areatomic-500">
                {props.price}€
            </HeadingTwo>
            <div className="mb-2"></div>
            <p className="text-white-areatomic-500 text-[17px]">{props.text}</p>
            <div className="mb-10"></div>
            <div className="grid grid-cols-2 justify-items-start">
                <ButtonPrimary className="mx-0 mt-4 items-center justify-center">
                    Acheter
                </ButtonPrimary>
                <ButtonSecondary className="flex mx-0 mt-4 items-center justify-center">
                    Voir plus{' '}
                    <img
                        src={arrow}
                        alt="Flèche voir plus, Areatomic sit web sur mesure"
                        className="ml-2"
                    />
                </ButtonSecondary>
            </div>
        </div>
    )
}

export const CardArticle = ({
    heading,
    image,
    alt,
    title,
    text,
    edit,
    read,
    more,
}) => {
    const authContext = useAuth()
    const navigate = useNavigate()
    return (
        <div className="xs:w-screen md:w-card-article bg-component-500 rounded px-4 py-7">
            <HeadingTwo color="text-blue-areatomic-500">{heading}</HeadingTwo>
            <div className="mb-2"></div>
            <div className="h-40">
                <Image
                    id={image}
                    url={false}
                    width="300px"
                    height="150px"
                    className="mx-auto rounded-md"
                />
            </div>
            <div className="mb-2"></div>
            <HeadingTwo color="text-blue-areatomic-500">{title}</HeadingTwo>
            <div className="mb-2"></div>
            <p className="text-white-areatomic-500 text-[17px]">{text}</p>
            <div className="mb-2"></div>
            <div className="grid grid-cols-2 justify-items-start">
                <ButtonSecondary
                    className="mx-0 mt-4 items-center justify-center"
                    onClick={() => read()}
                >
                    Lire
                </ButtonSecondary>
                {more && (
                    <ButtonSecondary
                        className="flex mx-0 mt-4 items-center justify-center"
                        onClick={() => navigate('/articles')}
                    >
                        Voir plus{' '}
                        <div className="material-icons arrow-next">
                            arrow_back
                        </div>
                    </ButtonSecondary>
                )}
                {authContext.type === 'admin' && (
                    <ButtonPrimary className="mx-0 mt-4" onClick={() => edit()}>
                        Editer
                    </ButtonPrimary>
                )}
            </div>
        </div>
    )
}
