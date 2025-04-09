function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                <p className="text-sm text-center md:text-left">
                    &copy; {new Date().getFullYear()} All rights reserved.
                </p>
                <div className="mt-4 md:mt-0 flex space-x-4">
                    <a href="#" className="text-sm hover:underline hover:text-blue-400">
                        Privacy Policy
                    </a>
                    <a href="#" className="text-sm hover:underline hover:text-blue-400">
                        Terms of Service
                    </a>
                    <a href="#" className="text-sm hover:underline hover:text-blue-400">
                        Contact
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
