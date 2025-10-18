import { Link } from "react-router-dom";

// The key change: accept activeTab as a prop instead of managing it internally
const Navbar = () => {
  return (
    <>
      {/* Navigation */}

      <nav className="flex justify-center mb-12 mt-6">
        <div className="bg-black rounded-full px-4 py-2 flex items-center justify-between w-full max-w-xl">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full border-2 border-dashed border-orange-500 flex items-center justify-center">
                <span className="text-orange-500 font-bold">PB</span>
              </div>
              <span className="ml-2 text-white font-bold">PaperBrain</span>
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <Link
              to="#"
              className="hidden md:flex text-white text-sm hover:text-gray-300"
            >
              Features
            </Link>
            <Link
              to="#"
              className="hidden md:flex text-white text-sm hover:text-gray-300"
            >
              How it works
            </Link>
            <Link
              to="#"
              className="hidden md:flex text-white text-sm hover:text-gray-300"
            >
              Pricing
            </Link>
            <Link
              to="#"
              className="hidden md:flex text-white text-sm hover:text-gray-300"
            >
              About
            </Link>
            <Link
              to="login"
              className="bg-white font-semibold text-black hover:bg-gray-100 rounded-full text-md px-4 py-1"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
