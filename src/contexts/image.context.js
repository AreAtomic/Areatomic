import { createContext, useContext, useState } from 'react'
import { useAuth } from './auth.context'
import { useUx } from './ux.context'

const ImageContext = createContext({
    defaultUrl: 'https://ik.imagekit.io/34fxnq3hl/default.png',
    getImageWithId: (value) => {},
    uploadImage: (file) => {},
})

export default function ImageContextProvider({ children }) {
    const uxContext = useUx()
    const authContext = useAuth()

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

    return (
        <ImageContext.Provider
            value={{
                defaultUrl: 'https://ik.imagekit.io/34fxnq3hl/default.png',
                getImageWithId: getImageWithId,
                uploadImage: uploadImage,
            }}
        >
            {children}
        </ImageContext.Provider>
    )
}

export const useImage = () => useContext(ImageContext)
