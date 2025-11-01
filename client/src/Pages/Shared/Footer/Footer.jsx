// src/components/Footer.jsx
import { Link } from "react-router"; // ✅ Fix: use react-router-dom instead of 'react-router'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";
import {
  SiVisa,
  SiMastercard,
  SiAmericanexpress,
  SiPaypal,
  SiApplepay,
} from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-12 px-6 md:px-20 relative overflow-hidden">
      {/* ✨ Subtle gradient hover effect background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-gray-100/40 to-white/0 opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none "></div>

      <div className="relative grid grid-cols-1 md:grid-cols-4 gap-10 z-10 max-w-7xl mx-auto">
        {/* 🏢 Company Info */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Company</h3>
          <p className="mb-2">
            Find a location near you. <br />
            <Link
              to="/stores"
              className="text-blue-600 underline hover:text-blue-800 transition-colors duration-300"
            >
              See Our Stores
            </Link>
          </p>
          <p className="mb-1">📞 +91 (0)265 2564 6528</p>
          <p>📧 hello@domain.com</p>
        </div>

        {/* 🔗 Useful Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Useful Links</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/new-products"
                className="hover:text-black transition-colors duration-300"
              >
                New Products
              </Link>
            </li>
            <li>
              <Link
                to="/best-sellers"
                className="hover:text-black transition-colors duration-300"
              >
                Best Sellers
              </Link>
            </li>
            <li>
              <Link
                to="/bundle-save"
                className="hover:text-black transition-colors duration-300"
              >
                Bundle & Save
              </Link>
            </li>
            <li>
              <Link
                to="/gift-card"
                className="hover:text-black transition-colors duration-300"
              >
                Online Gift Card
              </Link>
            </li>
          </ul>
        </div>

        {/* 📋 Information */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Information</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/returns"
                className="hover:text-black transition-colors duration-300"
              >
                Start A Return
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-black transition-colors duration-300"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/shipping-faq"
                className="hover:text-black transition-colors duration-300"
              >
                Shipping FAQ
              </Link>
            </li>
            <li>
              <Link
                to="/terms"
                className="hover:text-black transition-colors duration-300"
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                to="/privacy"
                className="hover:text-black transition-colors duration-300"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* 📨 Newsletter */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Good emails.</h3>
          <p className="mb-4">
            Enter your email below to be the first to know about new collections
            and product launches.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email address"
              className="px-4 py-2 border border-gray-300 rounded w-full focus:ring-2 focus:ring-black outline-none transition-all duration-300"
            />
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* 🧭 Bottom Footer */}
      <div className="relative mt-12 border-t pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 z-10">
        <p className="hover:text-black transition-colors duration-300 ">
          © Glowing 2025 | Powered by <a href=""> Abdur Rahim</a>
        </p>

        {/* 🌐 Social Media Icons */}
        <div className="flex gap-4 mt-4 md:mt-0 text-lg">
          {[FaFacebookF, FaTwitter, FaInstagram, FaPinterest].map(
            (Icon, index) => (
              <Icon
                key={index}
                className="cursor-pointer hover:text-black hover:scale-110 transition-all duration-300"
              />
            )
          )}
        </div>

        {/* 💳 Payment Icons */}
        <div className="flex gap-4 mt-4 md:mt-0 text-xl">
          {[SiVisa, SiMastercard, SiAmericanexpress, SiPaypal, SiApplepay].map(
            (Icon, index) => (
              <Icon
                key={index}
                className="opacity-80 hover:opacity-100 hover:scale-120 transition-all duration-300"
              />
            )
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
