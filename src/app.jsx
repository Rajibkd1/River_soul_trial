import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { Home } from "./Home";
import { Contact } from "./Contact";
import { AboutUs } from "./AboutUs";
import { RiverSoul } from "./RiverSoul";
import { Blogs } from "./Blogs";
import { Gallery } from "./Gallery";
import logo from "./assets/Frame 1000007176.png";

function NavLink({ to, children }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`text-white hover:text-gray-300 px-4 py-2 text-sm font-medium transition duration-200 relative ${
        isActive
          ? 'after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-yellow-500'
          : ""
      }`}
    >
      {children}
    </Link>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        {/* Navigation Bar */}
        <nav className="bg-[#0C343D] shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex items-center">
                <Link
                  to="/"
                  className="flex items-center space-x-2 hover:opacity-80 transition duration-200"
                >
                  <img
                    src={logo}
                    alt="Farmland Properties Ltd"
                    className="h-12 object-contain"
                  />
                </Link>
              </div>

              {/* Navigation Links */}
              <div className="flex items-center space-x-6">
                <NavLink to="/">HOME</NavLink>
                <NavLink to="/about">ABOUT US</NavLink>
                <NavLink to="/river-soul">RIVER SOUL</NavLink>
                <NavLink to="/blogs">BLOGS</NavLink>
                <NavLink to="/gallery">GALLERY</NavLink>
                <NavLink to="/contact">CONTACT</NavLink>
              </div>

              {/* Schedule Meeting Button */}
              <div>
                <button className="bg-white text-[#0C343D] px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition duration-200 flex items-center space-x-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span>Schedule Meeting</span>
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/river-soul" element={<RiverSoul />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
