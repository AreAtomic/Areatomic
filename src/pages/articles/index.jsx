import { useArticle } from '../../contexts'

import {
    ButtonPrimary,
    ButtonSecondary,
    CardArticle,
} from '../../components/atoms'
import { Code, Editor, Navbar } from '../../components/organisms'

import image from '../../assets/image-product.png'
import { AllArticles, EditArticle, ReadArticle } from './components'

const Articles = () => {
    const articleContext = useArticle()

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
