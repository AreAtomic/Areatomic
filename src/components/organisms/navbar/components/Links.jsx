import { NavbarLink } from './NavbarLink'

export const Links = () => {
    return (
        <>
            <NavbarLink id="Accueil" href="/accueil" titre="Accueil" />
            <NavbarLink id="Services" href="/services" titre="Services" />
            <NavbarLink id="Articles" href="/articles" titre="Articles" />
            <NavbarLink id="Produits" href="/products" titre="Produits" />
        </>
    )
}
