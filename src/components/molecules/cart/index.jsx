import { ButtonSecondary, HeadingFour } from '../../atoms'

const Item = ({ title, price, quantity, setQuantity, onDelete }) => {
    return (
        <div className="max-w-3xl w-full sm:grid md:flex flex-row bg-purple-areatomic-500 p-3 rounded my-2 justify-between">
            <HeadingFour color="text-blue-areatomic-500">{title}</HeadingFour>
            <HeadingFour color="text-blue-areatomic-500">{price}€</HeadingFour>
            <div className="grid grid-cols-2">
                <div className="flex flex-row border border-blue-areatomic-500 rounded-sm text-blue-areatomic-500 w-1/3 px-1 items-center">
                    {quantity}
                    <div className="material-icons text-blue-areatomic-500 ml-auto">
                        expand_more
                    </div>
                </div>
                <ButtonSecondary onClick={() => onDelete(title)}>
                    Supprimer
                </ButtonSecondary>
            </div>
        </div>
    )
}

export { Item }
