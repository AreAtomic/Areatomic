import { ButtonPrimary, HeadingOne, HeadingTwo } from '../../components/atoms'
import { Navbar } from '../../components/organisms'
import { CartComponents } from '../../components/molecules'

const Cart = () => {
    return (
        <div className="relative">
            <Navbar />
            <div className="relative pt-14 px-3 bg-gradient-to-b from-blue-areatomic-50 to-white-areatomic-500 min-h-screen">
                <div className="mt-3"></div>
                <HeadingOne>Votre panier</HeadingOne>
                <div className="mt-5"></div>

                {/* //TODO: Implémenter context */}
                <CartComponents.Item
                    title="Template React & Tailwind"
                    price="10.00"
                    quantity={1}
                />
                <div className="flex items-center max-w-sm text-lg justify-between my-10">
                    <HeadingTwo>
                        Total : <span className="ml-3">10,00€</span>
                    </HeadingTwo>
                    <p className="text-purple-areatomic-500">1 élément</p>
                </div>
                <ButtonPrimary
                    onClick={() => console.log('redirect to payment')}
                >
                    Payer
                </ButtonPrimary>
            </div>
        </div>
    )
}

export default Cart
