import { useArticle } from '../../contexts'

import {
    ButtonPrimary,
    ButtonSecondary,
    CardArticle,
} from '../../components/atoms'
import { Code, Editor, Navbar } from '../../components/organisms'

import image from '../../assets/image-product.png'
import { AllArticles, EditArticle, ReadArticle } from './components'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Articles = () => {
    const articleContext = useArticle()
    const params = useParams()

    useEffect(() => {
        const id = params.id
        if (articleContext.articles !== 0 && id && !articleContext.id) {
            articleContext.articles.map((article) => {
                if(article._id === id) articleContext.selectArticle(article, false)
            })
        } else {
            if (articleContext.articles.length === 0)
                articleContext.getArticles()
        }
    }, [articleContext])

    return (
        <div className="relative">
            <Navbar />
            <div className="relative pt-14 px-3 bg-gradient-to-b from-blue-areatomic-50 to-white-areatomic-500 min-h-screen">
                {!articleContext.edit && !articleContext.read ? (
                    <AllArticles />
                ) : articleContext.read ? (
                    <ReadArticle />
                ) : (
                    <EditArticle />
                )}
            </div>
        </div>
    )
}

export default Articles
