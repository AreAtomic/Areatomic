import {
    ButtonPrimary,
    CardProduct,
} from '../../../components/atoms'

import { useAuth, useProduct } from '../../../contexts'
import { Lazy } from '../../../components/molecules'

const AllProducts = () => {
    const authContext = useAuth()
    const productContext = useProduct()

    return (
        <>
            {authContext.type === 'admin' && (
                <div className="mb-4">
                    <ButtonPrimary
                        onClick={() => {
                            productContext.setEdit(true)
                        }}
                    >
                        Nouveau produit
                    </ButtonPrimary>
                </div>
            )}
            <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-3 justify-center">
                {productContext.products?.length == 0 && (
                    <>
                        <Lazy.Card />
                        <Lazy.Card />
                        <Lazy.Card />
                    </>
                )}
                {productContext.products.map((product, index) => {
                    console.log(product)
                    return (
                        <CardProduct
                            heading={product.name}
                            text={product.description[0].children[0].text}
                            image={product.images[0]}
                            price={product.price}
                            edit={() =>
                                productContext.selectProduct(product, true)
                            }
                            show={() => {
                                productContext.selectProduct(product, false)
                            }}
                        />
                    )
                })}
            </div>
        </>
    )
}

export default AllProducts
