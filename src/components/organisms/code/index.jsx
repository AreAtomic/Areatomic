import { useState } from 'react'
import CodeMirror from '@uiw/react-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import { githubDark } from '@uiw/codemirror-theme-github'

export const Code = ({value}) => {
    return (
        <CodeMirror
            value={value}
            theme={githubDark}
            extensions={[javascript({ jsx: true })]}
        />
    )
}
