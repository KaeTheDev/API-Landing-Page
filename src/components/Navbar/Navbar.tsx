import { useState } from "react";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="bg-primary w-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        
        {/* Left side: Logo + nav links */}
        <div className="flex items-center space-x-8">
          <a href="#" className="flex items-center">
            <img src="images/logo.svg" className="h-7" alt="Shortly Logo" />
          </a>
          <ul className="hidden md:flex space-x-6">
            <li><a href="#" className="text-gray-500 hover:text-black">Features</a></li>
            <li><a href="#" className="text-gray-500 hover:text-black">Prices</a></li>
            <li><a href="#" className="text-gray-500 hover:text-black">Resources</a></li>
          </ul>
        </div>

        {/* Right side: Login + Sign Up */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="text-gray-500 hover:text-black">Login</a>
          <button className="bg-teal-400 hover:bg-teal-500 text-white px-3 py-2 rounded">Sign Up</button>
        </div>

        {/* Hamburger menu (mobile) */}
        <button
          className="md:hidden ml-4 flex flex-col justify-between h-5"
          onClick={() => setShowMenu(!showMenu)}
        >
          <span className="block w-6 h-0.5 bg-black"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
        </button>
      </div>

      {/* Mobile menu */}
      {showMenu && (
        <div className="md:hidden bg-primary px-4 pb-4 flex flex-col items-center space-y-4">
          <ul className="flex flex-col items-center space-y-2">
            <li><a href="#" className="text-gray-500 hover:text-black">Features</a></li>
            <li><a href="#" className="text-gray-500 hover:text-black">Prices</a></li>
            <li><a href="#" className="text-gray-500 hover:text-black">Resources</a></li>
          </ul>
          <a href="#" className="text-gray-500 hover:text-black text-center">Login</a>
          <button className="bg-teal-400 hover:bg-teal-500 text-white px-6 py-2 rounded w-full">Sign Up</button>
        </div>
      )}
    </nav>
  );
}