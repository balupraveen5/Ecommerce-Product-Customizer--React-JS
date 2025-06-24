import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-green-400 w-full shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <h1 className="text-2xl font-bold text-white">Customize It</h1>

                <div className="flex items-center space-x-6">
                    <Link
                        to="/"
                        className="text-white hover:bg-white hover:text-green-500 px-4 py-2 rounded transition duration-300"
                    >
                        Home
                    </Link>
                    <Link
                        to="/cart"
                        className="text-white hover:bg-white hover:text-green-500 px-4 py-2 rounded transition duration-300"
                    >
                        Cart
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
