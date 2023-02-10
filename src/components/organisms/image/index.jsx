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

const Default = ({ id, url, className, width, height }) => {
    const imageContext = useImage()
    const [value, setValue] = useState(imageContext.defaultUrl)
    const [hover, setHover] = useState(false)

    useEffect(() => {
        const fetchImage = async () => {
            const response = await imageContext.getImageWithId(id)
            setValue(response.url)
        }

        if (!url) {
            fetchImage()
        } else {
            setValue(id)
        }
    }, [])

    return (
        <div
            className="relative rounded-lg"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {hover && (
                <div
                    className="absolute w-full h-full flex justify-center items-center rounded-lg"
                    style={{
                        background: 'rgba(107, 114, 128, 0.5)',
                        cursor: 'zoom-in',
                    }}
                    onClick={() => {
                        imageContext.setZoom(true)
                    }}
                >
                    <div className="grid text-center cursor-pointer">
                        Zoom
                        <div className="material-icons text-3xl">zoom_in</div>
                    </div>
                </div>
            )}
            <img
                src={value}
                alt="Areatomic image personnalisé"
                className={className}
                width={width}
                height={height}
                style={{ maxWidth: width, height: height }}
            />
        </div>
    )
}

const ImageZoom = ({ id, url }) => {
    const imageContext = useImage()

    const [value, setValue] = useState(imageContext.defaultUrl)
    const [width, setWidth] = useState(window.innerWidth * 0.8)
    const [height, setHeight] = useState(window.innerWidth * 0.43)
    const [hover, setHover] = useState(false)

    const [percentageX, setPercentageX] = useState(0)
    const [percentageY, setPercentageY] = useState(0)
    const [size, setSize] = useState(width)

    useEffect(() => {
        const fetchImage = async () => {
            const response = await imageContext.getImageWithId(id)
            setValue(response.url)
        }

        if (!url) {
            fetchImage()
        } else {
            setValue(id)
        }

        let container = document.getElementById('zoom')
        let img = new Image()
        img.src = value

        container.addEventListener('mousemove', (event) => {
            const image = event.target.getBoundingClientRect()
            const ratio = width / height
            let x = event.clientX - image.left
            let y = event.clientY - image.top

            x = x / (container.clientWidth / 100)
            y = (y / (container.clientWidth / ratio)) * 100
            setPercentageX(x)
            setPercentageY(y)
            setSize(img.naturalWidth)
        })
    }, [])

    return (
        <div style={{ width: width, height: height, overflow: 'hidden' }}>
            <div
                id="zoom"
                style={{
                    width: width,
                    height: height,
                    backgroundImage: `url(${value})`,
                    backgroundPosition: !hover
                        ? 'center'
                        : `${percentageX}% ${percentageY}%`,
                    backgroundSize: !hover ? 'cover' : `${size}px`,
                    transition: 'transform ease 0.3s',
                    transform: `${hover ? 'scale(1.2)' : 'scale(1)'}`,
                }}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            />
        </div>
    )
}

const ImageSlider = ({ images }) => {
    const imageContext = useImage()

    return (
        <div
            className="fixed z-50 w-screen h-screen top-0 left-0 flex justify-center items-center py-3 flex-col"
            style={{
                background: 'rgba(107, 114, 128, 0.8)',
            }}
        >
            <div
                className="absolute material-icons top-10 right-5"
                onClick={() => imageContext.setZoom(false)}
            >
                close
            </div>
            {images.map((image, index) => {
                if (index === imageContext.selected)
                    return (
                        <ImageZoom
                            id={typeof image === 'object' ? image.url : image}
                            url={typeof image === 'object'}
                        />
                    )
            })}
            <div className="flex pt-2 w-full justify-center">
                {images.map((image, index) => {
                    return (
                        <div
                            className={`mr-5 h-fit flex items-center w-1/12 ${
                                index === imageContext.selected &&
                                'border-4 border-purple-areatomic-500 rounded'
                            }`}
                            onClick={() => imageContext.setSelected(index)}
                        >
                            <Default
                                id={
                                    typeof image === 'object'
                                        ? image.url
                                        : image
                                }
                                url={typeof image === 'object'}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export { ImageUpload, Default, ImageZoom, ImageSlider }
