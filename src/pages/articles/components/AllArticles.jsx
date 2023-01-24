import { ButtonPrimary, CardArticle } from '../../../components/atoms'

import { useAuth, useArticle } from '../../../contexts'
import { Lazy } from '../../../components/molecules'

const AllArticles = () => {
    const authContext = useAuth()
    const articleContext = useArticle()

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
                        <Lazy.Card />
                        <Lazy.Card />
                        <Lazy.Card />
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
