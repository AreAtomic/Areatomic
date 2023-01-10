import React, { useRef, useState } from 'react'

import Button from '../../atoms/Button'
import Icon from '../../atoms/Icon'

import { isBlockActive } from '../../../../../../utils/slate/SlateUtilityFunctions'
import usePopup from '../../../../../../utils/slate/usePopup'
import { insertEmbed } from '../../../../../../utils/slate/embed.js'

const Embed = ({ editor, format }) => {
    const urlInputRef = useRef()
    const [showInput, setShowInput] = usePopup(urlInputRef)
    const [formData, setFormData] = useState({
        url: '',
        width: '',
        height: '',
    })
    const handleButtonClick = (e) => {
        e.preventDefault()
        setShowInput((prev) => !prev)
    }
    const handleFormSubmit = (e) => {
        e.preventDefault()
        insertEmbed(editor, { ...formData }, format)
        setShowInput(false)
        setFormData({
            url: '',
            width: '',
            height: '',
        })
    }
    return (
        <div ref={urlInputRef} className="popup-wrapper">
            <Button
                active={isBlockActive(editor, format)}
                style={{
                    border: showInput ? '1px solid lightgray' : '',
                    borderBottom: 'none',
                }}
                format={format}
                onClick={handleButtonClick}
            >
                <Icon icon={format} />
            </Button>
            {showInput && (
                <div className="absolute left-0 bg-component-one-800 py-1 px-3 z-[10] rounded">
                    <form onSubmit={handleFormSubmit}>
                        <input
                            type="text"
                            placeholder="Enter url"
                            value={formData.url}
                            onChange={(e) =>
                                setFormData((prev) => ({
                                    ...prev,
                                    url: e.target.value,
                                }))
                            }
                            className="bg-component-one-500 p-1 rounded-sm"
                        />

                        <Button
                            type="submit"
                            className="bg-high-contrast-500 opacity-100 p-2 mt-2 rounded"
                        >
                            Save
                        </Button>
                    </form>
                </div>
            )}
        </div>
    )
}

export default Embed
