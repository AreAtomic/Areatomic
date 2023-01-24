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
                className={`text-3xl py-3 px-2 font-bold`}
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

const Money = ({ value, onChange }) => {
    return (
        <div>
            <label for="price" class="block text-sm font-medium">
                Prix
            </label>
            <div class="relative mb-3 rounded-md shadow-sm p-4 bg-white ">
                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span class="text-gray-500 sm:text-sm">€</span>
                </div>
                <input
                    type="text"
                    name="price"
                    id="price"
                    class="block w-fit rounded-md ml-7 mr-12 sm:text-sm"
                    placeholder="0.00"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                />
                <div class="absolute inset-y-0 right-0 flex items-center">
                    <label for="currency" class="sr-only">
                        Currency
                    </label>
                    <select
                        id="currency"
                        name="currency"
                        class="h-full rounded-md border-transparent bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    >
                        <option>EUR</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export { Email, Password, Text, Title, Dropdown, Money }
