import { useParams } from "react-router-dom"
import GlobalContext from "../contexts/GlobalContext"
import { useContext } from "react"

function DetailPage() {
    const { id } = useParams()
    const { products } = useContext(GlobalContext)
    const product = products.find((element) => element.id === parseInt(id));
    return (
        <>
            {product && product.name}
        </>
    )
}

export default DetailPage