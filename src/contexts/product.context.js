import { createContext, useState, useContext, useEffect } from 'react'
import dayjs from 'dayjs'
import { useUx } from './ux.context'
import { useAuth } from './auth.context'

const ProductContext = createContext({
    products: [],
    id: null,
    edit: false,
    images: [],
    title: null,
    description: [{ type: 'paragraph', children: [{ text: '' }] }],
    price: '0.00',
    currency: 'EUR',
    lastEdit: dayjs(),
    show: false,
    repositorie: null,
    link: null,
    digital: true,
    getProducts: () => {},
    selectProduct: (value) => {},
    setEdit: (value) => {},
    setId: (value) => {},
    setTitle: (value) => {},
    setDescription: (value) => {},
    setPrice: (value) => {},
    createProduct: () => {},
    editProduct: (state) => {},
    setShow: (value) => {},
    setImages: (value) => {},
    setRepositorie: (value) => {},
    setLink: (value) => {},
    setDigital: (value) => {},
})

export default function ProductContextProvider({ children }) {
    const uxContext = useUx()
    const authContext = useAuth()

    const [products, setProducts] = useState([])
    const [id, setId] = useState(null)
    const [edit, setEdit] = useState(false)
    const [images, setImages] = useState([])
    const [title, setTitle] = useState(null)
    const [description, setDescription] = useState([
        { type: 'paragraph', children: [{ text: '' }] },
    ])
    const [price, setPrice] = useState('0.00')
    const [lastEdit, setLastEdit] = useState(dayjs())
    const [show, setShow] = useState(false)
    const [repositorie, setRepositorie] = useState(null)
    const [link, setLink] = useState(null)
    const [digital, setDigital] = useState(true)
    const currency = 'EUR'

    const selectProduct = (product, edit) => {
        setId(product._id)
        setTitle(product.name)
        setDescription(product.description)
        setImages(product.images)
        setPrice(product.price)
        if (edit) setEdit(true)
        else setShow(true)
    }

    const addImage = (image) => {
        const content = [...images, image]

        setImages(content)
    }

    const getProducts = async () => {
        const response = await authContext.request('get', 'product', null)
        setProducts(response.products)
    }

    const returnImageId = () => {
        return images.map((image) => {
            return image._id
        })
    }

    const createProduct = async () => {
        const response = await authContext.request('post', 'product', {
            name: title,
            description: description,
            images: returnImageId(images),
            price: price,
            currency: currency,
            link: link,
            repositorie: repositorie,
            digital: digital,
        })
        uxContext.setMessage(response.message)
        setId(response.product._id)
    }

    const editProduct = async (state) => {
        const response = await authContext.request('put', `product/${id}`, {
            title: title,
            description: description,
            images: images,
            price: price,
            currency: currency,
            link: link,
            repositorie: repositorie,
            digital: digital,
        })
        uxContext.setMessage(response.message)
        setId(response.product._id)
    }

    return (
        <ProductContext.Provider
            value={{
                products: products,
                id: id,
                edit: edit,
                images: images,
                title: title,
                description: description,
                price: price,
                currency: currency,
                lastEdit: lastEdit,
                show: show,
                repositorie: repositorie,
                link: link,
                digital: digital,
                getProducts: getProducts,
                selectProduct: selectProduct,
                setEdit: setEdit,
                setId: setId,
                setTitle: setTitle,
                setDescription: setDescription,
                setPrice: setPrice,
                createProduct: createProduct,
                editProduct: editProduct,
                setShow: setShow,
                setImages: setImages,
                setRepositorie: setRepositorie,
                setLink: setLink,
                setDigital: setDigital,
            }}
        >
            {children}
        </ProductContext.Provider>
    )
}

export const useProduct = () => useContext(ProductContext)
