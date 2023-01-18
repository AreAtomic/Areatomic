import { useState } from 'react'
import { ButtonSecondary, HeadingFive, Input } from '../../../components/atoms'
import { Code, Editor, Modal } from '../../../components/organisms'
import { useArticle, type } from '../../../contexts/article.context'

const AddSection = () => {
    const articleContext = useArticle()
    const [addSection, setAddSection] = useState(false)
    const [typeIndex, setTypeIndex] = useState(null)

    return (
        <>
            <div
                onClick={() => setAddSection(true)}
                className="w-full flex justify-center border-2 border-purple-areatomic-500 rounded py-4 hover:bg-purple-areatomic-200 hover:text-white-areatomic-500 peer"
            >
                <div className="grid center">
                    <div className="material-icons text-white-areatomic-500 bg-purple-areatomic-500 w-8 rounded px-1 mx-auto">
                        addbox
                    </div>
                    <div className="mx-auto">
                        <h5 className={`text-lg `}>Ajouter une section</h5>
                    </div>
                </div>
            </div>
            <Modal.Classic
                title="Nouvelle section"
                onClose={() => setAddSection(!addSection)}
                hidden={!addSection}
                onSave={() => {
                    console.log('Save')
                    articleContext.addContent(typeIndex)
                }}
            >
                <Dropdown
                    value={typeIndex}
                    onChange={(value) => setTypeIndex(value)}
                    values={type}
                />
            </Modal.Classic>
        </>
    )
}

const Dropdown = ({ value, onChange, values }) => {
    const [active, setActive] = useState(false)

    return (
        <div
            className={`relative text-xl text-bold ${active && 'h-40'}`}
            onClick={() => setActive(!active)}
        >
            <div className="border p-3 rounded">
                {typeof value === 'number'
                    ? values[value].display
                    : 'Sélectionner un type'}
            </div>
            <div
                className={`${
                    active
                        ? 'grid absolute text-sm h-24 overflow-y-scroll w-full bg-white-areatomic-500'
                        : 'hidden'
                }`}
            >
                {values.map((value, index) => {
                    return (
                        <div
                            className="px-3 py-2 hover:bg-blue-areatomic-500"
                            onClick={() => onChange(index)}
                        >
                            {value.display}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default AddSection
