import React from 'react'

import { useFocused, useSelected, useSlateStatic } from 'slate-react'

import { removeLink } from '../../../../../../utils/slate/link.js'
import Icon from '../../atoms/Icon.jsx'

const Link = ({ attributes, element, children }) => {
    const editor = useSlateStatic()
    const selected = useSelected()
    const focused = useFocused()
    return (
        <div className="link">
            <a href={element.href} {...attributes} onDoubleClick={() => console.log(selected, focused)}>
                {children}
            </a>
            {selected && focused && (
                <div className="link-popup" contentEditable="false">
                    <a href={element.href}>{element.href}</a>
                    <button onClick={() => removeLink(editor)}>
                        <Icon icon="link" />
                    </button>
                </div>
            )}
        </div>
    )
}

export default Link
