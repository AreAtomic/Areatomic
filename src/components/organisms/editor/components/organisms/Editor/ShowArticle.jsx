import React, { useCallback, useMemo, useState } from 'react'

import { createEditor } from 'slate'
import { withHistory } from 'slate-history'
import { Slate, Editable, withReact } from 'slate-react'
import { Link, Image, Video } from '../../molecules'

import {
    sizeMap,
    fontFamilyMap,
} from '../../../../../../utils/slate/SlateUtilityFunctions.js'
import withLinks from '../../../../../../utils/slate/withLinks.js'
import withTables from '../../../../../../utils/slate/withTable.js'
import withEmbeds from '../../../../../../utils/slate/withEmbeds.js'

const Element = (props) => {
    const { attributes, children, element } = props

    switch (element.type) {
        case 'headingOne':
            return (
                <h1 {...attributes} className="text-3xl font-bold">
                    {children}
                </h1>
            )
        case 'headingTwo':
            return (
                <h2 {...attributes} className="text-xl font-bold">
                    {children}
                </h2>
            )
        case 'headingThree':
            return (
                <h3 {...attributes} className="text-lg font-semibold">
                    {children}
                </h3>
            )
        case 'blockquote':
            return (
                <blockquote {...attributes} className="font-thin italic">
                    {children}
                </blockquote>
            )
        case 'alignLeft':
            return (
                <div
                    style={{ textAlign: 'left', listStylePosition: 'inside' }}
                    {...attributes}
                >
                    {children}
                </div>
            )
        case 'alignCenter':
            return (
                <div
                    style={{ textAlign: 'center', listStylePosition: 'inside' }}
                    {...attributes}
                >
                    {children}
                </div>
            )
        case 'alignRight':
            return (
                <div
                    style={{ textAlign: 'right', listStylePosition: 'inside' }}
                    {...attributes}
                >
                    {children}
                </div>
            )
        case 'list-item':
            return (
                <li {...attributes} className="list-inside">
                    {children}
                </li>
            )
        case 'orderedList':
            return (
                <ol type="1" {...attributes} className="list-decimal">
                    {children}
                </ol>
            )
        case 'unorderedList':
            return (
                <ul {...attributes} className="list-disc">
                    {children}
                </ul>
            )
        case 'link':
            return <Link {...props} />

        case 'table':
            return (
                <table>
                    <tbody {...attributes}>{children}</tbody>
                </table>
            )
        case 'table-row':
            return <tr {...attributes}>{children}</tr>
        case 'table-cell':
            return <td {...attributes}>{children}</td>
        case 'image':
            return <Image {...props} />
        case 'video':
            return <Video {...props} />
        default:
            return <p {...attributes}>{children}</p>
    }
}
const Leaf = ({ attributes, children, leaf }) => {
    if (leaf.bold) {
        children = <strong>{children}</strong>
    }

    if (leaf.code) {
        children = (
            <code className="bg-purple-areatomic-900 rounded-md text-blue-areatomic-100 p-2">
                {children}
            </code>
        )
    }

    if (leaf.italic) {
        children = <em>{children}</em>
    }
    if (leaf.strikethrough) {
        children = (
            <span style={{ textDecoration: 'line-through' }}>{children}</span>
        )
    }
    if (leaf.underline) {
        children = <u>{children}</u>
    }
    if (leaf.superscript) {
        children = <sup>{children}</sup>
    }
    if (leaf.subscript) {
        children = <sub>{children}</sub>
    }
    if (leaf.color) {
        children = <span style={{ color: leaf.color }}>{children}</span>
    }
    if (leaf.bgColor) {
        children = (
            <span style={{ backgroundColor: leaf.bgColor }}>{children}</span>
        )
    }
    if (leaf.fontSize) {
        const size = sizeMap[leaf.fontSize]
        children = <span style={{ fontSize: size }}>{children}</span>
    }
    if (leaf.fontFamily) {
        const family = fontFamilyMap[leaf.fontFamily]
        children = (
            <span className={`font-[${leaf.fontFamily}]`}>{children}</span>
        )
    }
    return <span {...attributes}>{children}</span>
}

export const SlateReader = ({ value }) => {
    const editor = useMemo(
        () =>
            withHistory(
                withEmbeds(withTables(withLinks(withReact(createEditor()))))
            ),
        []
    )

    const renderElement = useCallback((props) => <Element {...props} />, [])

    const renderLeaf = useCallback((props) => {
        return <Leaf {...props} />
    }, [])

    return (
        <Slate editor={editor} value={value}>
            <div className="h-fit drop-shadow-sm relative rounded">
                <Editable
                    placeholder="Votre texte ..."
                    renderElement={renderElement}
                    renderLeaf={renderLeaf}
                    readOnly
                />
            </div>
        </Slate>
    )
}
