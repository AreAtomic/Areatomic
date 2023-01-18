import { useState } from 'react'
import { ButtonSecondary, ButtonPrimary, HeadingFour } from '../../atoms'

export const Classic = ({ title, onClose, children, hidden, onSave }) => {
    return (
        <div
            className={`modal fade fixed top-0 left-0 w-full h-full overflow-x-hidden overflow-y-auto p-4 bg-modal z-50 ${
                hidden && 'hidden'
            }`}
            aria-hidden={hidden}
        >
            <div className="modal-dialog relative w-auto pointer-events-none">
                <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                    <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                        <h5
                            className="text-xl font-medium leading-normal text-gray-800"
                            id="exampleModalLabel"
                        >
                            {title}
                        </h5>
                        <button
                            type="button"
                            className="material-icons"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            onClick={() => onClose()}
                        >
                            close
                        </button>
                    </div>
                    <div class="modal-body relative p-4">{children}</div>
                    <div class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                        <div className="mx-1">
                            <ButtonSecondary onClick={() => onClose()}>
                                Fermer
                            </ButtonSecondary>
                        </div>
                        <div className="mx-1">
                            <ButtonPrimary
                                onClick={() => {
                                    onSave()
                                    onClose()
                                }}
                            >
                                Valider
                            </ButtonPrimary>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const Delete = ({ title, onValid, action }) => {
    const [hidden, setHidden] = useState(true)

    return (
        <div className="flex">
            <div className="mx-auto mt-2 mb-6">
                <ButtonPrimary
                    onClick={() => {
                        setHidden(!hidden)
                    }}
                >
                    Supprimer l'image
                </ButtonPrimary>
            </div>
            <Classic
                title={title}
                onClose={() => setHidden(!hidden)}
                hidden={hidden}
                onSave={() => onValid()}
            >
                <HeadingFour>
                    Souhaitez vous réellement {action} ?
                </HeadingFour>
                <b>ATTENTION</b> Cette action est irréversible
            </Classic>
        </div>
    )
}
