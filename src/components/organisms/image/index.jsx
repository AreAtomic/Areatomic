import { useEffect, useState } from 'react'
import { useImage } from '../../../contexts'
import { ButtonPrimary } from '../../atoms'

const ImageUpload = ({ setValue }) => {
    const imageContext = useImage()
    const [file, setFile] = useState(null)

    return (
        <div className="flex w-full h-fit my-4 items-center justify-center bg-grey-lighter">
            <label className="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-sm tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue text-purple-areatomic-900 hover:text-blue-areatomic-500">
                <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                >
                    <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                </svg>
                <span className="mt-2 text-base leading-normal">
                    {file ? file.name : 'Télécharger une image'}
                </span>
                <input
                    type="file"
                    className="hidden"
                    accept="image/jpeg,image/gif,image/png"
                    onChange={(e) => {
                        console.log(e.target.files[0])
                        setFile(e.target.files[0])
                    }}
                />
                <ButtonPrimary
                    onClick={async () => {
                        const image = await imageContext.uploadImage(file)
                        setValue(image)
                    }}
                    className="mt-3"
                >
                    Uploader l'image
                </ButtonPrimary>
            </label>
        </div>
    )
}

const Image = ({ id, url, className }) => {
    const imageContext = useImage()
    const [value, setValue] = useState(imageContext.defaultUrl)
    const width = window.innerHeight / 2.05

    useEffect(() => {
        const fetchImage = async () => {
            console.log(id)
            const response = await imageContext.getImageWithId(id)
            setValue(response.url)
            console.log(response)
        }

        if (!url) {
            fetchImage()
        } else {
            setValue(id)
        }
    }, [])

    return (
        <img
            src={value}
            alt="Areatomic image personnalisé"
            className={className}
            width={`${width}px`}
        />
    )
}

export { ImageUpload, Image }
