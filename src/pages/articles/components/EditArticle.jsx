import { useEffect } from 'react'
import {
    ButtonPrimary,
    ButtonSecondary,
    HeadingFour,
    Input,
} from '../../../components/atoms'
import {
    Code,
    Editor,
    Image,
    Modal,
    Navbar,
} from '../../../components/organisms'
import { useArticle, status } from '../../../contexts/article.context'
import AddSection from './AddSection'

const EditArticle = () => {
    const articleContext = useArticle()

    return (
        <>
            <div className="flex my-4 w-fit">
                <div
                    className="flex mr-auto cursor-pointer"
                    onClick={() => articleContext.setEdit(false)}
                >
                    <div className="material-icons mr-2">arrow_back</div>
                    Retour
                </div>
            </div>
            {articleContext.cover ? (
                <div className="relative w-full grid justify-center overflow-clip">
                    <Image.Image
                        id={
                            typeof articleContext.cover === 'object'
                                ? articleContext.cover.url
                                : articleContext.cover
                        }
                        url={typeof articleContext.cover === 'object'}
                    />
                    <Modal.Delete
                        title="Suppression image de couverture"
                        action="supprimer l'image de couverture"
                        onValid={() => articleContext.setCover(null)}
                    />
                </div>
            ) : (
                <div className="grid">
                    <Image.ImageUpload
                        setValue={(value) => articleContext.setCover(value)}
                    />
                </div>
            )}
            <Input.Title
                placeholder="Titre de l'article"
                value={articleContext.title}
                onChange={(e) => {
                    articleContext.setTitle(e.target.value)
                }}
            />
            {articleContext.sections.map((section, index) => {
                return (
                    <div
                        className="border my-2"
                        key={`${index}${section[0].type}`}
                    >
                        {section[0].type !== 'code' ? (
                            section[0].type !== 'image' ? (
                                <Editor
                                    value={section}
                                    setValue={(value) => {
                                        articleContext.setContent(index, value)
                                    }}
                                />
                            ) : section[0].text !== '' ? (
                                <div className="relative w-full grid justify-center overflow-clip">
                                    <Image.Image
                                        id={
                                            typeof section[0].text ===
                                            'object'
                                                ? section[0].text
                                                : section[0].text
                                        }
                                        url={
                                            typeof section[0].text ===
                                            'object'
                                        }
                                    />
                                </div>
                            ) : (
                                <div className="grid">
                                    <Image.ImageUpload
                                        setValue={(value) =>
                                            articleContext.setCover(value)
                                        }
                                    />
                                </div>
                            )
                        ) : (
                            <Code
                                value={section[0].text}
                                setValue={(value) => {
                                    articleContext.setContent(index, [
                                        { ...section[0], text: value },
                                    ])
                                }}
                            />
                        )}
                        <div className="flex w-full justify-end">
                            <div
                                className="material-icons mx-2 text-4xl cursor-pointer"
                                onClick={() =>
                                    articleContext.reOrder(
                                        index,
                                        index - 1 > 0 ? index - 1 : 0
                                    )
                                }
                            >
                                expand_less
                            </div>
                            <div
                                className="material-icons mx-2 text-4xl cursor-pointer"
                                onClick={() =>
                                    articleContext.reOrder(
                                        index,
                                        index + 1 <
                                            articleContext.sections.length - 1
                                            ? index + 1
                                            : articleContext.sections.length - 1
                                    )
                                }
                            >
                                expand_more
                            </div>
                        </div>
                    </div>
                )
            })}
            <AddSection />
            <div className="">
                <Input.Dropdown
                    value={articleContext.status}
                    onChange={(value) => articleContext.setStatus(value)}
                    values={status}
                />
            </div>
            <div className="grid gap-3 grid-flow-col auto-cols-min w-fit mt-5 items-center">
                <ButtonPrimary
                    onClick={() => {
                        if (articleContext.id)
                            articleContext.editArticle(
                                status[articleContext.status].name
                            )
                        else articleContext.createArticle()
                    }}
                >
                    Sauvegarder
                </ButtonPrimary>
            </div>
        </>
    )
}

export default EditArticle
