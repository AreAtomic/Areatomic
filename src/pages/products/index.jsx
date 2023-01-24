import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Navbar } from '../../components/organisms'
import { useProduct } from '../../contexts'
import { AllProducts, EditProduct } from './components'

const Products = () => {
    const productContext = useProduct()
    const params = useParams()

    useEffect(() => {
        productContext.getProducts()
    }, [])

    return (
        <div className="relative">
            <Navbar />
            <div className="relative pt-14 px-3 bg-gradient-to-b from-blue-areatomic-50 to-white-areatomic-500 min-h-screen">
                {!productContext.edit && !productContext.show ? (
                    <AllProducts />
                ) : productContext.show ? (
                    <EditProduct />
                ) : (
                    <EditProduct />
                )}
            </div>
        </div>
    )
}

export default Products
