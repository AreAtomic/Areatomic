import { createContext, useState, useContext, useEffect } from 'react'
import dayjs from 'dayjs'
import { useUx } from './ux.context'
import { useAuth } from './auth.context'

export const type = [
    { name: 'headingOne', display: 'Heading 1' },
    { name: 'headingTwo', display: 'Heading 2' },
    { name: 'headingThree', display: 'Heading 3' },
    { name: 'paragraph', display: 'Paragraph' },
    { name: 'bold', display: 'Bold' },
    { name: 'italic', display: 'Italic' },
    { name: 'underline', display: 'Underline' },
    { name: 'strikethrough', display: 'Strikethrough' },
    { name: 'orderedList', display: 'Ordered List' },
    { name: 'unorderedList', display: 'Unordered List' },
    { name: 'code', display: 'Code' },
]

export const status = [
    { name: 'draft', display: 'Brouillon' },
    { name: 'published', display: 'Publié' },
    { name: 'archived', display: 'Archivé' },
]

const ArticleContext = createContext({
    products: [],
    id: null,
    edit: false,
    images: [],
    title: null,
    description: null,
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

export default function ArticleContextProvider({ children }) {
    const uxContext = useUx()
    const authContext = useAuth()

    const [products, setProducts] = useState([])
    const [id, setId] = useState(null)
    const [edit, setEdit] = useState(false)
    const [images, setImages] = useState([])
    const [title, setTitle] = useState(null)
    const [description, setDescription] = useState(null)
    const [price, setPrice] = useState('0.00')
    const [lastEdit, setLastEdit] = useState(dayjs())
    const [show, setShow] = useState(false)
    const [repositorie, setRepositorie] = useState(null)
    const [link, setLink] = useState(null)
    const [digital, setDigital] = useState(true)
    const currency = 'EUR'

    const selectProduct = (product, edit) => {
        setId(product._id)
        setTitle(product.title)
        setDescription(product.description)
        setImages(product.images)
        setPrice(product.price)
        if (edit) setEdit(true)
        else setRead(true)
    }

    const addImage = (image) => {
        const content = [...images, image]

        setImages(content)
    }

    const getProducts = async () => {
        const response = await authContext.request('get', 'product', null)
        setProducts(response.products)
    }

    const createProduct = async () => {
        const response = await authContext.request('post', 'product', {
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
        <ArticleContext.Provider
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
        </ArticleContext.Provider>
    )
}

export const useArticle = () => useContext(ArticleContext)
