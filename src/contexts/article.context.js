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
    articles: [],
    id: null,
    edit: false,
    cover: null,
    title: null,
    sections: [],
    status: 'not saved',
    lastEdit: dayjs(),
    read: false,
    getArticles: () => {},
    selectArticle: (value) => {},
    setStatus: (value) => {},
    setEdit: (value) => {},
    setId: (value) => {},
    setTitle: (value) => {},
    addContent: (typeIndex) => {},
    setContent: (contentIndex, contentValue) => {},
    reOrder: (index, newIndex) => {},
    createArticle: () => {},
    editArticle: (state) => {},
    getArticles: () => {},
    setRead: (value) => {},
    setCover: (value) => {},
})

export default function ArticleContextProvider({ children }) {
    const uxContext = useUx()
    const authContext = useAuth()

    const [articles, setArticles] = useState([])
    const [id, setId] = useState(null)
    const [cover, setCover] = useState(null)
    const [edit, setEdit] = useState(false)
    const [read, setRead] = useState(false)
    const [title, setTitle] = useState(null)
    const [sections, setSections] = useState([])
    const [lastEdit, setLastEdit] = useState(dayjs())
    const [status, setStatus] = useState('not saved')

    const selectArticle = (article, edit) => {
        setId(article._id)
        setTitle(article.title)
        setSections(article.sections)
        setStatus(article.status)
        setCover(article.cover)
        if (edit) setEdit(true)
        else setRead(true)
    }

    const addContent = (typeIndex) => {
        const content = [
            ...sections,
            [{ type: type[typeIndex].name, children: [{ text: '' }] }],
        ]

        setSections(content)
    }

    const setContent = (contentIndex, contentValue) => {
        const content = [...sections]
        content[contentIndex] = contentValue

        setSections(content)
    }

    const reOrder = (index, newIndex) => {
        const content = [...sections]
        content.splice(index, 0, content.splice(newIndex, 1)[0])

        setSections(content)
    }

    const getArticles = async () => {
        const response = await authContext.request('get', 'article', null)
        setArticles(response.articles)
    }

    const createArticle = async () => {
        const response = await authContext.request('post', 'article', {
            title: title,
            sections: sections,
            state: 'draft',
            cover: cover ? cover._id : null,
        })
        uxContext.setMessage(response.message)
        setId(response.article._id)
    }

    const editArticle = async (state) => {
        const response = await authContext.request('put', `article/${id}`, {
            title: title,
            sections: sections,
            state: state,
            cover: cover ? cover._id : null,
        })
        uxContext.setMessage(response.message)
        setId(response.article._id)
    }

    return (
        <ArticleContext.Provider
            value={{
                articles: articles,
                id: id,
                edit: edit,
                read: read,
                cover: cover,
                title: title,
                sections: sections,
                lastEdit: lastEdit,
                status: status,
                getArticles: getArticles,
                setEdit: setEdit,
                setStatus: setStatus,
                selectArticle: selectArticle,
                setId: setId,
                setTitle: setTitle,
                addContent: addContent,
                setContent: setContent,
                reOrder: reOrder,
                createArticle: createArticle,
                editArticle: editArticle,
                setRead: setRead,
                setCover: setCover,
            }}
        >
            {children}
        </ArticleContext.Provider>
    )
}

export const useArticle = () => useContext(ArticleContext)
