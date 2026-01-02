export default function Footer() {
    return(
        <footer className="bg-gray-900 py-16">
  <div className="max-w-6xl mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-12 text-center md:text-left gap-8 items-start">
      
      {/* Logo */}
      <div className="md:col-span-3">
        <img
          src="images/logo.svg"
          alt="Shortly Logo"
          className="mx-auto md:mx-0 mb-6"
        />
      </div>

      {/* Links */}
      <div className="md:col-span-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Features */}
          <div>
            <p className="text-white font-bold text-lg mb-4">Features</p>
            <ul className="space-y-2">
              <li className="text-gray-300 hover:text-teal-400 cursor-pointer">
                Link Shortening
              </li>
              <li className="text-gray-300 hover:text-teal-400 cursor-pointer">
                Branded Links
              </li>
              <li className="text-gray-300 hover:text-teal-400 cursor-pointer">
                Analytics
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <p className="text-white font-bold text-lg mb-4">Resources</p>
            <ul className="space-y-2">
              <li className="text-gray-300 hover:text-teal-400 cursor-pointer">
                Blog
              </li>
              <li className="text-gray-300 hover:text-teal-400 cursor-pointer">
                Developers
              </li>
              <li className="text-gray-300 hover:text-teal-400 cursor-pointer">
                Support
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-white font-bold text-lg mb-4">Company</p>
            <ul className="space-y-2">
              <li className="text-gray-300 hover:text-teal-400 cursor-pointer">
                About
              </li>
              <li className="text-gray-300 hover:text-teal-400 cursor-pointer">
                Our Team
              </li>
              <li className="text-gray-300 hover:text-teal-400 cursor-pointer">
                Careers
              </li>
              <li className="text-gray-300 hover:text-teal-400 cursor-pointer">
                Contact
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="md:col-span-3 flex justify-center md:justify-end space-x-4">
        <img
          src="images/icon-facebook.svg"
          alt="Facebook"
          className="cursor-pointer hover:opacity-75"
        />
        <img
          src="images/icon-twitter.svg"
          alt="Twitter"
          className="cursor-pointer hover:opacity-75"
        />
        <img
          src="images/icon-pinterest.svg"
          alt="Pinterest"
          className="cursor-pointer hover:opacity-75"
        />
        <img
          src="images/icon-instagram.svg"
          alt="Instagram"
          className="cursor-pointer hover:opacity-75"
        />
      </div>
    </div>
  </div>
</footer>
    )
}