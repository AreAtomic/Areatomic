import { useEffect, useState } from 'react'

import { isEmail, isPasswordValid } from '../../../utils'

const Email = ({ label, value, onChange }) => {
    const [error, setError] = useState(true)

    useEffect(() => {
        setError(!isEmail(value))
    }, [value])

    return (
        <div className="grid">
            <label htmlFor={label} className="pl-1 mb-1 text-sm">
                {label}
            </label>
            <input
                onChange={onChange}
                value={value}
                id={label}
                type="email"
                className={`border-2 py-2 px-4 rounded-full ${
                    value !== ''
                        ? error
                            ? 'border-red-500'
                            : 'border-green-500'
                        : 'border-blue-areatomic-500'
                } active:border-blue-areatomic-200`}
            />
        </div>
    )
}

const Password = ({ label, value, onChange }) => {
    const [error, setError] = useState(true)

    useEffect(() => {
        setError(!isPasswordValid(value))
    }, [value])

    return (
        <div className="grid">
            <label htmlFor={label} className="pl-1 mb-1 text-sm">
                {label}
            </label>
            <input
                onChange={onChange}
                value={value}
                id={label}
                type="password"
                className={`border-2 py-2 px-4 rounded-full ${
                    value !== ''
                        ? error
                            ? 'border-red-500'
                            : 'border-green-500'
                        : 'border-blue-areatomic-500'
                } active:border-blue-areatomic-200`}
            />
        </div>
    )
}

const Text = ({ label, value, onChange }) => {
    const [error, setError] = useState(true)

    useEffect(() => {
        setError(false)
    }, [value])

    return (
        <div className="grid">
            <label htmlFor={label} className="pl-1 mb-1 text-sm">
                {label}
            </label>
            <input
                onChange={onChange}
                value={value}
                id={label}
                type="text"
                className={`border-2 py-2 px-4 rounded-full ${
                    value !== ''
                        ? error
                            ? 'border-red-500'
                            : 'border-green-500'
                        : 'border-blue-areatomic-500'
                } active:border-blue-areatomic-200`}
            />
        </div>
    )
}

const Title = ({ value, onChange, placeholder }) => {
    const [error, setError] = useState(true)

    useEffect(() => {
        setError(false)
    }, [value])

    return (
        <div className="grid mb-5">
            <input
                onChange={onChange}
                value={value}
                id="title"
                type="text"
                className={`text-3xl py-3 font-bold`}
                placeholder={placeholder}
            />
        </div>
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

export { Email, Password, Text, Title, Dropdown }
