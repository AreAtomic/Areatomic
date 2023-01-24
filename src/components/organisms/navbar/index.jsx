import { useEffect, useState } from 'react'
import { Links, LienLogo, Button } from './components'

export const Navbar = () => {
    const [active, setActive] = useState(false)
    const [closed, setClosed] = useState(true)
    const [background, setBackground] = useState(false)

    useEffect(() => {
        if (!active) {
            setTimeout(() => {
                setClosed(!active)
            }, 400)
        } else {
            setClosed(!active)
        }
    }, [active])

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                setBackground(true)
            } else {
                setBackground(false)
            }
        })

        return () => {
            window.removeEventListener('scroll', () => {})
            window.removeEventListener('resize', () => {})
        }
    }, [])

    return (
        <header>
            <div
                className={`flex items-center px-4 transition-colors ${
                    background ? 'bg-purple-areatomic-500' : 'bg-transparent'
                } fixed w-screen z-40`}
            >
                <LienLogo />
                <div className="hidden lg:flex mx-2">
                    <Links />
                </div>
                <div className="hidden lg:flex ml-auto">
                    <Button />
                </div>
                <div
                    className="flex lg:hidden ml-auto"
                    onClick={() => setActive(!active)}
                >
                    {!active ? (
                        <i className={`material-icons left mr-1 text-4xl ${background ? "text-blue-areatomic-500" :"text-purple-areatomic-500"}`}>
                            menu
                        </i>
                    ) : (
                        <i className={`material-icons left mr-1 text-4xl ${background ? "text-blue-areatomic-500" :"text-purple-areatomic-500"}`}>
                            close
                        </i>
                    )}
                </div>
                <div
                    className={`absolute grid lg:hidden w-full left-0 top-12 bg-purple-areatomic-500 text-blue-areatomic-500 ${
                        active ? 'animate-fade-in-down' : 'animate-fade-out-up'
                    } ${closed && 'hidden'} py-1`}
                >
                    <Links />
                    <div className="mx-4 mt-2">
                        <Button />
                    </div>
                </div>
            </div>
        </header>
    )
}
