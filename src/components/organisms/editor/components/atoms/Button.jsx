import React from 'react'

const Button = (props) => {
    const { children, format, active, ...rest } = props
    return (
        <button
            className={`rounded p-1 ${active ? 'bg-blue-areatomic-500' : ''}`}
            title={format}
            {...rest}
        >
            {children}
        </button>
    )
}

export default Button
