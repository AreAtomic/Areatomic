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
import { useProduct } from '../../../contexts'

const EditProduct = () => {
    const productContext = useProduct()

    return (
        <>
            <div className="flex my-4 w-fit">
                <div
                    className="flex mr-auto cursor-pointer"
                    onClick={() => productContext.setEdit(false)}
                >
                    <div className="material-icons mr-2">arrow_back</div>
                    Retour
                </div>
            </div>
            <Input.Title
                placeholder="Nom du produit"
                value={productContext.title}
                onChange={(e) => {
                    productContext.setTitle(e.target.value)
                }}
            />

            <div className="grid grid-cols-4">
                <div className="relative col-span-3 grid justify-center overflow-clip">
                    {productContext.images[0] ? (
                        <>
                            <Image.Image
                                id={
                                    typeof productContext.images[0] === 'object'
                                        ? productContext.images[0].url
                                        : productContext.images[0]
                                }
                                url={
                                    typeof productContext.images[0] === 'object'
                                }
                            />
                            <div className="flex flex-row w-full overflow-auto scrollbar">
                                {productContext.images.map((image, index) => {
                                    if (index === 0) {
                                        return (
                                            <div className="w-1-3 mr-5 mt-5">
                                                <Image.ImageUpload
                                                    setValue={(value) =>
                                                        productContext.setImages(
                                                            [
                                                                ...productContext.images,
                                                                value,
                                                            ]
                                                        )
                                                    }
                                                />
                                            </div>
                                        )
                                    }
                                    return (
                                        <div className="mr-5 w-1/3">
                                            <Image.Image
                                                id={
                                                    typeof image === 'object'
                                                        ? image.url
                                                        : image
                                                }
                                                url={typeof image === 'object'}
                                            />
                                        </div>
                                    )
                                })}
                            </div>
                        </>
                    ) : (
                        <>
                            <Image.ImageUpload
                                setValue={(value) =>
                                    productContext.setImages([
                                        ...productContext.images,
                                        value,
                                    ])
                                }
                            />
                        </>
                    )}
                </div>
                <div className="ml-5">
                    <Input.Money
                        value={productContext.price}
                        onChange={(value) => productContext.setPrice(value)}
                    />
                    <Editor
                        value={productContext.description}
                        setValue={(value) => {
                            productContext.setDescription(value)
                        }}
                    />
                </div>
            </div>
            <div className="grid gap-3 grid-flow-col auto-cols-min w-fit mt-5 items-center">
                <ButtonPrimary
                    onClick={() => {
                        if (productContext.id) productContext.editProduct()
                        else productContext.createProduct()
                    }}
                >
                    Sauvegarder
                </ButtonPrimary>
            </div>
        </>
    )
}

export default EditProduct
