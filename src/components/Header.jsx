import { Link } from "react-router-dom";
import logo from "../assets/logo.png"
function Header() {
    return (
        <header className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <img
                        src={logo}
                        alt="Logo"
                        className="w-15s h-15 object-contain"
                    />
                </div>

                {/* Navigation */}
                <nav className="space-x-6">
                    <Link
                        to="/"
                        className="text-gray-700 hover:text-blue-600 font-medium transition"
                    >
                        Home
                    </Link>
                    <Link
                        to="/products"
                        className="text-gray-700 hover:text-blue-600 font-medium transition"
                    >
                        Products
                    </Link>
                    <Link
                        to="/contact"
                        className="text-gray-700 hover:text-blue-600 font-medium transition"
                    >
                        Contact
                    </Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;
