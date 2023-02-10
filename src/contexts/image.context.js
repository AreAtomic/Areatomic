import { createContext, useContext, useEffect, useState } from 'react'
import { useAuth } from './auth.context'
import { useProduct } from './product.context'

const ImageContext = createContext({
    defaultUrl: 'https://ik.imagekit.io/34fxnq3hl/default.png',
    zoom: false,
    selected: 0,
    getImageWithId: async (value) => {},
    uploadImage: (file) => {},
    setZoom: (value) => {},
    setSelected: (value) => {},
    deleteImage: (value) => {},
})

export default function ImageContextProvider({ children }) {
    const authContext = useAuth()
    const productContext = useProduct()

    const [zoom, setZoom] = useState(false)
    const [selected, setSelected] = useState(0)

    const uploadImage = async (file) => {
        const createFormData = (file) => {
            const data = new FormData()

            data.append('file', file, file.name)

            return data
        }

        const response = await authContext.request(
            'post',
            'image',
            createFormData(file),
            'multipart/form-data'
        )

        return response.image
    }

    const getImageWithId = async (id) => {
        const fetchImage = async () => {
            const response = await authContext.request(
                'get',
                `image/${id}`,
                null
            )

            return response.image
        }

        return await fetchImage()
    }

    const deleteImage = async (id) => {
        console.log(id)
        const response = await authContext.request(
            'delete',
            `image/${id}`,
            {},
            null
        )
        console.log(response)

        let images = productContext.images

        images = images.filter((value) => {
            if (typeof value === 'object') {
                return value._id === id
            } else {
                return value !== id
            }
        })
        console.log(images)

        productContext.setImages(images)
    }

    return (
        <ImageContext.Provider
            value={{
                defaultUrl: 'https://ik.imagekit.io/34fxnq3hl/default.png',
                zoom: zoom,
                selected: selected,
                getImageWithId: getImageWithId,
                uploadImage: uploadImage,
                setZoom: setZoom,
                setSelected: setSelected,
                deleteImage: deleteImage,
            }}
        >
            {children}
        </ImageContext.Provider>
    )
}

export const useImage = () => useContext(ImageContext)
