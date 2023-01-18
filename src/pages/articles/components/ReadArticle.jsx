import {
    ButtonPrimary,
    ButtonSecondary,
    HeadingOne,
    Input,
} from '../../../components/atoms'
import { Code, Editor, Modal, Image } from '../../../components/organisms'
import { Reader } from '../../../components/organisms/editor'
import { useArticle } from '../../../contexts/article.context'
import AddSection from './AddSection'

const ReadArticle = () => {
    const articleContext = useArticle()

    return (
        <>
            <div className="flex my-2 w-fit">
                <div
                    className="flex mr-auto cursor-pointer"
                    onClick={() => articleContext.setRead(false)}
                >
                    <div className="material-icons mr-2">arrow_back</div>
                    Retour
                </div>
            </div>
            {articleContext.cover && (
                <div className="relative w-full grid justify-center overflow-clip">
                    <Image.Image
                        id={
                            typeof articleContext.cover === 'object'
                                ? articleContext.cover.url
                                : articleContext.cover
                        }
                        url={typeof articleContext.cover === 'object'}
                    />
                </div>
            )}
            <HeadingOne>{articleContext.title}</HeadingOne>
            {articleContext.sections.map((section, index) => {
                return (
                    <div className="my-2" key={`${index}${section[0].type}`}>
                        {section[0].type !== 'code' ? (
                            <Reader
                                value={section}
                                setValue={(value) => {
                                    articleContext.setContent(index, value)
                                }}
                            />
                        ) : (
                            <Code
                                value={section[0].text}
                                setValue={(value) => {
                                    console.log(value)
                                    articleContext.setContent(index, [
                                        { ...section[0], text: value },
                                    ])
                                }}
                            />
                        )}
                    </div>
                )
            })}
        </>
    )
}

export default ReadArticle
