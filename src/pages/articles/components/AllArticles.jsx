import { ButtonPrimary, CardArticle } from '../../../components/atoms'

import image from '../../../assets/image-product.png'
import { useArticle } from '../../../contexts/article.context'
import { useEffect } from 'react'
import { useAuth } from '../../../contexts'

const AllArticles = () => {
    const authContext = useAuth()
    const articleContext = useArticle()

    useEffect(() => {
        articleContext.getArticles()
    }, [])

    return (
        <>
            {authContext.type === 'admin' && (
                <div className="mb-4">
                    <ButtonPrimary
                        onClick={() => {
                            articleContext.setEdit(true)
                        }}
                    >
                        Nouvel article
                    </ButtonPrimary>
                </div>
            )}
            <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-3 justify-center">
                {articleContext.articles?.length == 0 && (
                    <>
                        <div class="border border-purple-areatomic-300 bg-component-500 shadow rounded-md p-4 max-w-sm w-full">
                            <div class="animate-pulse flex space-x-4">
                                <div class="flex-1 space-y-6 py-6">
                                    <div class="grid grid-cols-3 gap-4">
                                        <div class="h-2 bg-purple-areatomic-700 rounded col-span-2"></div>
                                    </div>
                                    <div class="h-40 bg-purple-areatomic-700 rounded"></div>
                                    <div class="space-y-3">
                                        <div class="h-2 bg-purple-areatomic-700 rounded"></div>
                                        <div class="h-2 bg-purple-areatomic-700 rounded"></div>
                                        <div class="h-2 bg-purple-areatomic-700 rounded"></div>
                                        <div class="h-2 bg-purple-areatomic-700 rounded"></div>
                                        <div class="grid grid-cols-3 gap-4">
                                            <div class="h-2 bg-purple-areatomic-700 rounded col-span-2"></div>
                                        </div>
                                    </div>
                                    <div class="grid grid-cols-2 gap-4">
                                        <div class="h-10 bg-purple-areatomic-700 rounded"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="border border-purple-areatomic-300 bg-component-500 shadow rounded-md p-4 max-w-sm w-full">
                            <div class="animate-pulse flex space-x-4">
                                <div class="flex-1 space-y-6 py-6">
                                    <div class="grid grid-cols-3 gap-4">
                                        <div class="h-2 bg-purple-areatomic-700 rounded col-span-2"></div>
                                    </div>
                                    <div class="h-40 bg-purple-areatomic-700 rounded"></div>
                                    <div class="space-y-3">
                                        <div class="h-2 bg-purple-areatomic-700 rounded"></div>
                                        <div class="h-2 bg-purple-areatomic-700 rounded"></div>
                                        <div class="h-2 bg-purple-areatomic-700 rounded"></div>
                                        <div class="h-2 bg-purple-areatomic-700 rounded"></div>
                                        <div class="grid grid-cols-3 gap-4">
                                            <div class="h-2 bg-purple-areatomic-700 rounded col-span-2"></div>
                                        </div>
                                    </div>
                                    <div class="grid grid-cols-2 gap-4">
                                        <div class="h-10 bg-purple-areatomic-700 rounded"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="border border-purple-areatomic-300 bg-component-500 shadow rounded-md p-4 max-w-sm w-full">
                            <div class="animate-pulse flex space-x-4">
                                <div class="flex-1 space-y-6 py-6">
                                    <div class="grid grid-cols-3 gap-4">
                                        <div class="h-2 bg-purple-areatomic-700 rounded col-span-2"></div>
                                    </div>
                                    <div class="h-40 bg-purple-areatomic-700 rounded"></div>
                                    <div class="space-y-3">
                                        <div class="h-2 bg-purple-areatomic-700 rounded"></div>
                                        <div class="h-2 bg-purple-areatomic-700 rounded"></div>
                                        <div class="h-2 bg-purple-areatomic-700 rounded"></div>
                                        <div class="h-2 bg-purple-areatomic-700 rounded"></div>
                                        <div class="grid grid-cols-3 gap-4">
                                            <div class="h-2 bg-purple-areatomic-700 rounded col-span-2"></div>
                                        </div>
                                    </div>
                                    <div class="grid grid-cols-2 gap-4">
                                        <div class="h-10 bg-purple-areatomic-700 rounded"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
                {articleContext.articles.map((article, index) => {
                    if (authContext.type === 'admin') {
                        return (
                            <CardArticle
                                heading={article.title}
                                text={article.sections[0][0].children[0].text}
                                image={article.cover}
                                alt="Template React & Tailwind by Areatomic"
                                author={article._author}
                                edit={() =>
                                    articleContext.selectArticle(article, true)
                                }
                                read={() => {
                                    articleContext.selectArticle(article, false)
                                }}
                            />
                        )
                    } else {
                        console.log(article.state)
                        if (article.state === 'published') {
                            return (
                                <CardArticle
                                    heading={article.title}
                                    text={
                                        article.sections[0][0].children[0].text
                                    }
                                    image={article.cover}
                                    alt="Template React & Tailwind by Areatomic"
                                    author={article._author}
                                    edit={() =>
                                        articleContext.selectArticle(
                                            article,
                                            true
                                        )
                                    }
                                    read={() => {
                                        articleContext.selectArticle(
                                            article,
                                            false
                                        )
                                    }}
                                />
                            )
                        }
                    }
                })}
            </div>
        </>
    )
}

export default AllArticles
