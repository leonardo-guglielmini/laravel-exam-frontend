import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";
import { Link } from "react-router-dom";

function Homepage() {
    const { products } = useContext(GlobalContext);

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-3xl font-bold mb-6 text-center">Product List</h1>
            <div className="grid grid-cols-2 gap-5 max-w-5xl mx-auto">
                {products && products.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white shadow-md rounded-xl py-4 px-10 flex justify-between hover:shadow-lg"
                    >
                        <img
                            src={product.image_url
                                ? `${import.meta.env.VITE_BACKEND_URI}/storage/${product.image_url}`
                                : `${import.meta.env.VITE_BACKEND_URI}/storage/placeholder.png`}
                            alt="product image"
                            className="w-50 h-full object-cover rounded-lg mb-4" />
                        <div className="flex flex-col justify-between items-end">
                            <div className="flex flex-col items-end">
                                <h2 className="text-xl font-bold mb-1">{product.name}</h2>
                                <h3 className="text-lg text-gray-700  font-semibold mb-3">{product.company.name}</h3>
                                <p className="text-lg border p-1 rounded-md bg-green-700 text-white font-bold">{product.price} &euro;</p>
                            </div>
                            <Link
                                to={`/product/${product.id}`}
                                className="mt-4 inline-block text-blue-600 hover:text-blue-900 font-semibold"
                            >
                                View Details
                            </Link>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}

export default Homepage;
