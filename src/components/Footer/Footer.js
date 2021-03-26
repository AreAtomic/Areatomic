import React, { useState } from 'react'
import './Footer.css'

const Footer = () => {
    const [mention, setMention] = useState(false)
    const openMentionLegale = () => {
        setMention(!mention)
    }
    return (
        <div className="footer">
            <div className="columns has-text-centered">
                <div className="column has-text-centered">
                    <h4 className="has-text-centered">Adresse mail</h4>
                    <a
                        href="mailto:contact@aureliensebe.com"
                        className="has-text-centered"
                    >
                        contact@aureliensebe.com
                    </a>
                </div>
                <div className="column">
                    <h4 className="has-text-centered">Téléphone</h4>
                    <a href="tel:+33608365730" className="has-text-centered">
                        +336 08 36 57 30
                    </a>
                </div>
            </div>
            <div className="column">
                <p>Site créé par Aurélien SEBE © Copyright 2021</p>
                <a onClick={openMentionLegale}>Mention légales</a>
            </div>
            <div class={`modal ${mention ? 'is-active' : ''}`}>
                <div class="modal-background"></div>
                <div class="modal-content p-2">
                    <div className="notification">
                        <h1 className="my-3">Informations légales</h1>
                        <div class="column">
                            <p>
                                Merci de lire attentivement les présentes
                                modalités d'utilisation du présent site avant de
                                le parcourir. En vous connectant sur ce site,
                                vous acceptez sans réserve les présentes
                                modalités.
                            </p>
                            <h3 className="my-3">Editeur du site</h3>
                            <div class="coordonnees vcard">
                                <p>
                                    <a href="https://aureliensebe.com/">
                                        <strong>
                                            Aurélien Sèbe - Développeur
                                            Informatique
                                        </strong>
                                    </a>
                                    <br />
                                    par{' '}
                                    <a href="http://www.aureliensebe.com/">
                                        Aurélien Sèbe
                                    </a>
                                    <br />
                                    8 rue des maçons
                                    <br />
                                    81100 Castres
                                    <br />
                                    <span class="country-name">France</span>
                                    <br />
                                    <span class="tel">
                                        <span class="type">Tél. : </span>+ 33
                                        (0)6 08 36 57 30
                                    </span>
                                    <br />
                                    <br />
                                    <a
                                        title="Nouvelle fenetre"
                                        href="https://www.aureliensebe.com"
                                        target="_blank"
                                        rel="noopener"
                                    >
                                        https://www.aureliensebe.com
                                    </a>
                                    <br />
                                    <a
                                        title="Agence web Bordeaux et Gironde"
                                        href="https://www.aureliensebe.com/"
                                        target="_blank"
                                        rel="noopener"
                                    >
                                        <br />
                                    </a>{' '}
                                    Aurélien Sèbe - Développeur Informatique est
                                    un entrepreneur indivuel au capital de 300€
                                    <br />
                                    Numéro SIRET : 85189847800017 - APE : 6201Z
                                    <br />
                                </p>
                            </div>
                            <h3 className="my-3">Conditions d'utilisation</h3>
                            Le site accessible par les url suivants :
                            www.aureliensebe.com est exploité dans le respect de
                            la législation française. L'utilisation de ce site
                            est régie par les présentes conditions générales.{' '}
                            <a href="https://www.aureliensebe.com">&nbsp;</a> En
                            utilisant le site, vous reconnaissez avoir pris
                            connaissance de ces conditions et les avoir
                            acceptées. Celles-ci pourront êtres modifiées à tout
                            moment et sans préavis par la société Aurélien Sèbe.
                            <br />
                            Aurélien Sèbe ne saurait être tenu pour responsable
                            en aucune manière d’une mauvaise utilisation du
                            service.
                            <a href="https://www.aureliensebe.com">&nbsp;</a>
                            <h3 className="my-3">Responsable éditorial</h3>
                            <div class="coordonnees vcard">
                                <p>
                                    Aurélien Sèbe
                                    <br />
                                    <strong>
                                        Aurélien Sèbe - Développeur Informatique
                                    </strong>
                                    <br />
                                    par Aurélien Sèbe
                                    <br />
                                    54 Avenue Jean Moulin
                                    <br />
                                    81100 Castres
                                    <br />
                                    <span class="country-name">France</span>
                                    <br />
                                    <span class="tel">
                                        <span class="type">Tél. : </span>+ 33
                                        (0)6 08 36 57 30
                                    </span>
                                    <br />
                                    <br />
                                    <a
                                        class="org url"
                                        title="Développeur Informatique MERN"
                                        href="https://www.aureliensebe.com"
                                        target="_blank"
                                        rel="noopener"
                                    >
                                        http://www.aureliensebe.com
                                    </a>
                                </p>
                            </div>
                            <h3 className="my-3">
                                Limitation de responsabilité
                            </h3>
                            <p>
                                Les informations contenues sur ce site sont
                                aussi précises que possibles et le site est
                                périodiquement remis à jour, mais peut toutefois
                                contenir des inexactitudes, des omissions ou des
                                lacunes. Si vous constatez une lacune, erreur ou
                                ce qui parait être un dysfonctionnement, merci
                                de bien vouloir le signaler par{' '}
                                <a href="/contact">email</a> en décrivant le
                                problème de la manière la plus précise possible
                                (page posant problème, action déclenchante, type
                                d’ordinateur et de navigateur utilisé, …).
                                <br />
                                <br />
                                Tout contenu téléchargé se fait aux risques et
                                périls de l'utilisateur et sous sa seule
                                responsabilité. En conséquence, Aurélien Sèbe ne
                                saurait être tenu responsable d'un quelconque
                                dommage subi par l'ordinateur de l'utilisateur
                                ou d'une quelconque perte de données
                                consécutives au téléchargement.
                                <a href="https://www.aureliensebe.com/">
                                    &nbsp;
                                </a>{' '}
                                <a href="https://www.aureliensebe.com">
                                    &nbsp;
                                </a>{' '}
                                <a href="http://www.aureliensebe.com/">
                                    &nbsp;
                                </a>
                                <br />
                                <br />
                                Les photos sont non contractuelles.
                                <br />
                                <br />
                                Les liens hypertextes mis en place dans le cadre
                                du présent site internet en direction d'autres
                                ressources présentes sur le réseau Internet ne
                                sauraient engager la responsabilité de Natural
                                net.
                            </p>
                            <h3 className="my-3">Litiges</h3>
                            Les présentes conditions sont régies par les lois
                            françaises et toute contestation ou litiges qui
                            pourraient naître de l'interprétation ou de
                            l'exécution de celles-ci seront de la compétence
                            exclusive des tribunaux dont dépend le{' '}
                            <a href="https://www.aureliensebe.com">
                                &nbsp;
                            </a>{' '}
                            siège social de la société Aurélien Sèbe. La langue
                            de référence, pour le règlement de contentieux
                            éventuels, est le français.
                            <h3 className="my-3">Déclaration à la CNIL</h3>
                            Conformément à la loi 78-17 du 6 janvier 1978
                            (modifiée par la loi 2004-801 du 6 août 2004
                            relative à la protection des personnes physiques à
                            l'égard des traitements de données à caractère
                            personnel) relative à l'informatique, aux fichiers
                            et aux libertés, le site a fait l'objet d'une
                            déclaration auprès de la Commission nationale de
                            l'informatique et des libertés (
                            <a
                                href="http://www.cnil.fr/"
                                target="_blank"
                                rel="noopener"
                            >
                                www.cnil.fr
                            </a>
                            ).&nbsp;
                            <h3 className="my-3">Droit d'accès</h3>
                            En application de cette loi, les internautes
                            disposent d’un droit d’accès, de rectification, de
                            modification et de suppression concernant les
                            données qui les concernent personnellement. Ce droit
                            peut être exercé par voie postale auprès de Natural
                            net 49, Boulevard Antoine Gautier 33000 Bordeaux ou
                            par voie électronique à l’adresse email suivante :{' '}
                            <a href="mailto:contact@aureliensebe.com">
                                contact@aureliensebe.com
                            </a>
                            .<br />
                            Les informations personnelles collectées ne sont en
                            aucun cas confiées à des tiers hormis pour
                            l’éventuelle bonne exécution de la prestation
                            commandée par l’internaute.
                            <h3 className="my-3">Confidentialité</h3>
                            Vos données personnelles sont confidentielles et ne
                            seront en aucun cas communiquées à des tiers hormis
                            pour la bonne exécution de la prestation.
                            <h3 className="my-3">Propriété intellectuelle</h3>
                            <p>
                                Tout le contenu du présent site, incluant, de
                                façon non limitative, les graphismes, images,
                                textes, vidéos, animations, sons, logos, gifs et
                                icônes ainsi que leur mise en forme sont la
                                propriété exclusive de la société Aurélien Sèbe
                                à l'exception des marques, logos ou contenus
                                appartenant à d'autres sociétés partenaires ou
                                auteurs.
                                <br />
                                Toute reproduction, distribution, modification,
                                adaptation, retransmission ou publication, même
                                partielle, de ces différents éléments est
                                strictement interdite sans l'accord exprès par
                                écrit de Aurélien Sèbe. Cette représentation ou
                                reproduction, par quelque procédé que ce soit,
                                constitue une contrefaçon sanctionnée par les
                                articles L.335-2 et suivants du Code de la
                                propriété intellectuelle. Le non-respect de
                                cette interdiction constitue une contrefaçon
                                pouvant engager la responsabilité civile et
                                pénale du contrefacteur. En outre, les
                                propriétaires des Contenus copiés pourraient
                                intenter une action en justice à votre encontre.
                                <br />
                                <br />
                                Aurélien Sèbe est identiquement propriétaire des
                                "droits des producteurs de bases de données"
                                visés au Livre III, Titre IV, du Code de la
                                Propriété Intellectuelle{' '}
                                <a href="https://www.aureliensebe.com">
                                    &nbsp;
                                </a>{' '}
                                (loi n° 98-536 du 1er juillet 1998) relative aux
                                droits d'auteur et aux bases de données. <br />
                                <br />
                                Les utilisateurs et visiteurs du site internet
                                peuvent mettre en place un hyperlien en
                                direction de ce site, mais uniquement en
                                direction de la page d’accueil, accessible à
                                l’URL suivante : www.aureliensebe.com, à
                                condition que ce lien s’ouvre dans une nouvelle
                                fenêtre. En particulier un lien vers une sous
                                page (« lien profond ») est interdit, ainsi que
                                l’ouverture du présent site au sein d’un cadre
                                (« framing »), sauf l'autorisation expresse et
                                préalable de Aurélien Sèbe.
                                <br />
                                <br />
                                Pour toute demande d'autorisation ou
                                d'information, veuillez nous contacter par email
                                :{' '}
                                <a href="mailto:contact@aureliensebe.com">
                                    contact@aureliensebe.com
                                </a>
                                . Des conditions spécifiques sont prévues pour
                                la presse.
                            </p>
                            <h3>Hébergeur</h3>
                            <span>o2switch</span>
                            <br />
                            Plateforme d'hébergement sites internet
                            <br />
                            <a
                                href="http://www.o2switch.fr/"
                                target="_blank"
                                rel="noopener"
                            >
                                www.o2switch.fr
                            </a>
                            <br />
                            <h2 className="my-3">Conditions de service</h2>
                            Ce site est proposé en langages{' '}
                            <strong>HTML5 </strong>et <strong>CSS3</strong>,
                            pour un meilleur confort d'utilisation et un
                            graphisme plus agréable, nous vous recommandons de
                            recourir à des navigateurs modernes comme Safari,
                            Firefox, Chrome,...
                            <h3 className="my-3">Informations et exclusion</h3>
                            Aurélien Sèbe met en œuvre tous les moyens dont elle
                            dispose, pour assurer une information fiable et une
                            mise à jour fiable de ses sites internet. Toutefois,
                            des erreurs ou omissions peuvent survenir.
                            L'internaute devra donc s'assurer de l'exactitude
                            des informations auprès de Aurélien Sèbe, et
                            signaler toutes modifications du site qu'il jugerait
                            utile. Aurélien Sèbe n'est en aucun cas responsable
                            de l'utilisation faite de ces informations,{' '}
                            <a href="https://www.aureliensebe.com">&nbsp;</a> et
                            de tout préjudice direct ou indirect pouvant en
                            découler.
                            <h3 className="my-3">Cookies</h3>
                            Pour des besoins de statistiques et d'affichage, le
                            présent site utilise des cookies. Il s'agit de
                            petits fichiers textes stockés sur votre disque dur
                            afin d'enregistrer des données techniques sur votre
                            navigation. Certaines parties de ce site ne peuvent
                            être fonctionnelle sans l’acceptation de cookies.
                            <h3 className="my-3">Liens hypertextes</h3>
                            Les sites internet d'Aurélien Sèbe peuvent offrir
                            des liens vers d’autres sites internet ou d’autres
                            ressources disponibles sur Internet.
                            <a
                                title="Développeur "
                                href="https://www.aureliensebe.com"
                                target="_blank"
                                rel="noopener"
                            >
                                <br />
                            </a>{' '}
                            <br />
                            Aurélien Sèbe ne dispose d'aucun moyen pour
                            contrôler les sites en connexion avec ses sites
                            internet. Aurélien Sèbe ne répond pas de la
                            disponibilité de tels sites et sources externes, ni
                            ne la garantit. Elle ne peut être tenue pour
                            responsable de tout dommage, de quelque nature que
                            ce soit, résultant du contenu de ces sites ou
                            sources externes, et notamment des informations,
                            produits ou services qu’ils proposent, ou de tout
                            usage qui peut être fait de ces éléments. Les
                            risques liés à cette utilisation incombent
                            pleinement à l'internaute, qui doit se conformer à
                            leurs conditions d'utilisation.
                            <br />
                            <br />
                            Les utilisateurs, les abonnés et les visiteurs des
                            sites internet de Aurélien Sèbe ne peuvent mettre en
                            place un hyperlien en direction de ce site sans
                            l'autorisation expresse et préalable de Aurélien
                            Sèbe.
                            <br />
                            <br />
                            Dans l'hypothèse où un utilisateur ou visiteur
                            souhaiterait mettre en place un hyperlien en
                            direction d’un des sites internet de Aurélien Sèbe,
                            il lui appartiendra d'adresser un email accessible
                            sur le site afin de formuler sa demande de mise en
                            place d'un hyperlien. Aurélien Sèbe se réserve le
                            droit d’accepter ou de refuser un hyperlien sans
                            avoir à en justifier sa décision.
                            <h3 className="my-3">Recherche</h3>
                            En outre, le renvoi sur un site internet pour
                            compléter une information recherchée ne signifie en
                            aucune façon que Aurélien Sèbe reconnaît ou accepte
                            quelque responsabilité quant à la teneur ou à
                            l'utilisation dudit site.
                            <h3 className="my-3">Précautions d'usage</h3>
                            Il vous incombe par conséquent de prendre les
                            précautions d'usage nécessaires pour vous assurer
                            que ce que vous choisissez d'utiliser ne soit pas
                            entaché d'erreurs voire d'éléments de nature
                            destructrice tels que virus, trojans, etc....{' '}
                            <a href="https://www.aureliensebe.com">&nbsp;</a>
                            <h3 className="my-3">Responsabilité</h3>
                            Aucune autre garantie n'est accordée au client,
                            auquel incombe l'obligation de formuler clairement
                            ses besoins et le devoir de s'informer. Si des
                            informations fournies par Aurélien Sèbe apparaissent
                            inexactes, il appartiendra au client de procéder
                            lui-même à toutes vérifications de la cohérence ou
                            de la vraisemblance des résultats obtenus. Natural
                            net ne sera en aucune façon responsable vis à vis
                            des tiers de l'utilisation par le client des
                            informations ou de leur absence contenues dans ses
                            produits y compris un de ses sites Internet.
                            <a href="https://www.aureliensebe.com/">
                                &nbsp;
                            </a>{' '}
                            <a href="http://www.aureliensebe.com/">&nbsp;</a>
                            <h3 className="my-3">Contactez-moi</h3>
                            Aurélien Sèbe est à votre disposition pour tous vos
                            commentaires ou suggestions. Vous pouvez nous écrire
                            en français par courrier électronique à :{' '}
                            <a href="mailto:contact@aureliensebe.com">
                                contact@aureliensebe.com
                            </a>
                            .<br />
                            <a href="https://www.aureliensebe.com/">
                                &nbsp;
                            </a>{' '}
                            <a href="http://www.aureliensebe.com/">&nbsp;</a>
                            <p></p>
                        </div>
                    </div>
                </div>
                <button
                    class="modal-close is-large"
                    aria-label="close"
                    onClick={openMentionLegale}
                ></button>
            </div>
        </div>
    )
}

export default Footer
