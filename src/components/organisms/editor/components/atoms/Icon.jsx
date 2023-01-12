import React from 'react'
import {
    MdFormatBold,
    MdFormatItalic,
    MdStrikethroughS,
    MdFormatUnderlined,
    MdFormatQuote,
    MdFormatAlignLeft,
    MdFormatAlignCenter,
    MdFormatAlignRight,
    MdFormatListNumbered,
    MdFormatListBulleted,
    MdInsertLink,
    MdVideoLibrary,
    MdImage,
    MdAdd,
} from 'react-icons/md'
import { BsTypeH1, BsTypeH2, BsTypeH3 } from 'react-icons/bs'
import { FaSuperscript, FaSubscript, FaRegFileCode } from 'react-icons/fa'
import {
    AiOutlineTable,
    AiOutlineInsertRowBelow,
    AiOutlineInsertRowRight,
    AiOutlineDelete,
} from 'react-icons/ai'

const iconColor = '#000000'

const iconList = {
    bold: <MdFormatBold size={20} color={iconColor} />,
    italic: <MdFormatItalic size={20} color={iconColor} />,
    strikethrough: <MdStrikethroughS size={20} color={iconColor} />,
    underline: <MdFormatUnderlined size={20} color={iconColor} />,
    headingOne: <BsTypeH1 size={20} color={iconColor} />,
    headingTwo: <BsTypeH2 size={20} color={iconColor} />,
    headingThree: <BsTypeH3 size={20} color={iconColor} />,
    blockquote: <MdFormatQuote size={20} color={iconColor} />,
    superscript: <FaSuperscript size={15} color={iconColor} />,
    subscript: <FaSubscript size={15} color={iconColor} />,
    alignLeft: <MdFormatAlignLeft size={20} color={iconColor} />,
    alignCenter: <MdFormatAlignCenter size={20} color={iconColor} />,
    alignRight: <MdFormatAlignRight size={20} color={iconColor} />,
    orderedList: <MdFormatListNumbered size={20} color={iconColor} />,
    unorderedList: <MdFormatListBulleted size={20} color={iconColor} />,
    link: <MdInsertLink size={20} color={iconColor} />,
    image: <MdImage size={20} color={iconColor} />,
    video: <MdVideoLibrary size={20} color={iconColor} />,
    add: <MdAdd size={20} color={iconColor} />,
    table: <AiOutlineTable size={20} color={iconColor} />,
    row: <AiOutlineInsertRowBelow size={20} color={iconColor} />,
    column: <AiOutlineInsertRowRight size={20} color={iconColor} />,
    removeTable: <AiOutlineDelete size={20} color={iconColor} />,
    code: <FaRegFileCode size={20} color={iconColor} />,
}

const Icon = (props) => {
    const { icon } = props
    return iconList[icon]
}

export default Icon
