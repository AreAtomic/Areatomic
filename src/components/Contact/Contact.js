import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import ButtonGreen from '../Button/Button.green'
import './Contact.css'

const Contact = () => {
    const [sending, setSending] = useState(false)
    const [send, setSend] = useState('')

    const sendMail = (e) => {
        setSending(true)
        e.preventDefault()
        const serviceID = 'default_service'
        const templateID = 'template_fsc1pxp'
        const userID = 'user_ZxyoPZfkQ5PWeOtPX8BVy'

        emailjs.sendForm(serviceID, templateID, e.target, userID).then(
            (result) => {
                setSend('Email Envoyé, je reviens vers vous le plus rapidement possible. Merci')
            },
            (error) => {
                setSend(error.text)
            }
        )

        setSending(false)
    }

    const closeNotification = () => {
        setSend('')
    }

    return (
        <form className="container" onSubmit={sendMail}>
            {send != '' ? (
                <div className="modal is-active p-1">
                    <div class="modal-background"></div>
                    <div class="modal-content">
                        <div className="notification is-success">{send}</div>
                    </div>
                    <button
                        class="modal-close is-large"
                        aria-label="close"
                        onClick={closeNotification}
                    ></button>
                </div>
            ) : (
                ''
            )}
            <h1 className="has-text-centered my-3">Contact</h1>
            <div className="form container foncee">
                <div className="columns">
                    <div className="field column">
                        <label className="label">Prénom</label>
                        <input
                            type="text"
                            required={true}
                            placeHolder="Aurélien"
                            name="prenom"
                            className="input"
                        />
                    </div>
                    <div className="field column">
                        <label className="label">Nom</label>
                        <input
                            type="text"
                            required={true}
                            placeHolder="Sèbe"
                            name="nom"
                            className="input"
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Email</label>
                    <input
                        type="text"
                        required={true}
                        placeHolder="contact@aureliensebe.fr"
                        name="reply_to"
                        className="input"
                    />
                </div>
                <div className="field">
                    <label className="label">Sujet</label>
                    <input
                        type="text"
                        required={true}
                        placeHolder="Le sujet de votre demande"
                        name="sujet"
                        className="input"
                    />
                </div>
                <div className="field">
                    <label className="label">Message</label>
                    <textarea
                        type="text"
                        required={true}
                        placeHolder="Votre demande en détail"
                        name="message"
                        className="textarea"
                    />
                </div>
            </div>
            <button type="submit" className="mt-3">
                <ButtonGreen value={sending ? 'Envoie ...' : 'Envoyer'} />
            </button>
        </form>
    )
}

export default Contact
