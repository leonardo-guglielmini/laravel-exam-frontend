import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";
import { Link } from "react-router-dom";


function Homepage() {

    const { products } = useContext(GlobalContext)

    return (
        <>
            <div>
                <ul>
                    {products && products.map((product) =>
                    (
                        <li key={product.id}>{product.name} <Link to={`/product/${product.id}`}>DETAIL</Link></li>
                    )
                    )}
                </ul>
            </div>
        </>
    )
}

export default Homepage