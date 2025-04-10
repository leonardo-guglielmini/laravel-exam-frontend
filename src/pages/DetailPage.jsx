import { useParams, Link } from "react-router-dom";
import GlobalContext from "../contexts/GlobalContext";
import { useContext } from "react";

function DetailPage() {
    const { id } = useParams();
    const { products } = useContext(GlobalContext);
    const product = products.find((element) => element.id === parseInt(id));

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <p className="text-xl text-gray-700">Product not found</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8 flex flex-col items-start">
                <div className="flex">
                    <img
                        src={product.image_url
                            ? `${import.meta.env.VITE_BACKEND_URI}/storage/${product.image_url}`
                            : `${import.meta.env.VITE_BACKEND_URI}/storage/placeholder.png`}
                        alt={product.name}
                        className="w-100 h-100 object-cover rounded-lg mb-6"
                    />
                    <div className="flex flex-col items-end mt-6">
                        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                        <h2 className="text-lg text-gray-700  font-semibold mb-3">{product.company.name}</h2>
                        <p className="text-gray-700 mb-6">{product.description}</p>
                        <div className="flex gap-1">
                            <p className="text-lg border p-1 rounded-md bg-yellow-500 line-through text-white font-bold">&euro;{product.price}</p>
                            <p className="text-lg border p-1 rounded-md bg-green-700 text-white font-bold">&euro;{((product.price / 100) * (100 - product.tag.price_reduction_percentage)).toFixed(2)}</p>
                        </div>
                    </div>
                </div>
                <Link
                    to="/"
                    className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
                >
                    ← Go Back
                </Link>
            </div>
        </div>
    );
}

export default DetailPage;
