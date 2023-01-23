import { Link } from 'react-router-dom'
import { ButtonPrimary, ButtonSecondary } from '../../../atoms'
import { useAuth } from '../../../../contexts'

const Deconnexion = () => {
    const authContext = useAuth()

    return (
        <div id="logout" onClick={authContext.loggedOut}>
            <ButtonSecondary className="mx-0 mb-3">Déconnexion</ButtonSecondary>
        </div>
    )
}

const Connexion = (props) => {
    const location = document.location.href
    return (
        <div id="Login">
            <Link to="/login">
                <ButtonSecondary
                    className={`mx-0 mb-3 ${
                        (location.includes('login') ||
                            location.includes('register')) &&
                        'cursor-not-allowed'
                    }`}
                >
                    Connexion
                </ButtonSecondary>
            </Link>
        </div>
    )
}

export const Button = () => {
    const authContext = useAuth()

    return authContext.isLogged === true ? (
        <Deconnexion logout={() => authContext.loggedOut} />
    ) : (
        <Connexion />
    )
}
