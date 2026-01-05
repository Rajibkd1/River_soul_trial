import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { useState } from "react";
import { HomePage } from "../pages/Home";
import { AboutUsPage } from "../pages/AboutUs";
import { BlogsPage } from "../pages/Blogs";
import { ContactPage } from "../pages/Contact";
import { GalleryPage } from "../pages/Gallery";
import { RiverSoul } from "../pages/RiverSoul";
import NavigationManager from "../admin/Navigation/NavigationManager";
import logo from "../assets/Frame 1000007176.png";
import "../app.css";

function NavLink({ to, children, onClick }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      onClick={onClick}
      className={`text-white hover:text-gray-300 px-4 py-2 text-sm font-medium transition duration-200 relative block border-b-2 ${
        isActive ? "border-yellow-500" : "border-b-2 border-transparent"
      }`}
    >
      {children}
    </Link>
  );
}

function NavBarContent({ open, setOpen }) {
  return (
    <>
      {/* Navigation Bar */}
      <nav className="bg-[#0C343D] shadow-md fixed top-0 left-0 right-0 z-50">
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
                  alt="River Soul"
                  className="h-12 object-contain"
                />
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-6">
              <NavLink to="/">HOME</NavLink>
              <NavLink to="/about">ABOUT US</NavLink>
              <NavLink to="/river-soul">RIVER SOUL</NavLink>
              <NavLink to="/blogs">BLOGS</NavLink>
              <NavLink to="/gallery">GALLERY</NavLink>
              <NavLink to="/contact">CONTACT</NavLink>
            </div>

            {/* Desktop Schedule Meeting Button */}
            <div className="hidden lg:block">
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

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden text-white"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#0C343D] z-50 transform transition-transform duration-300 lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4">
          <button onClick={() => setOpen(false)} className="text-white mb-6">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="space-y-2">
            <NavLink to="/" onClick={() => setOpen(false)}>
              HOME
            </NavLink>
            <NavLink to="/about" onClick={() => setOpen(false)}>
              ABOUT US
            </NavLink>
            <NavLink to="/river-soul" onClick={() => setOpen(false)}>
              RIVER SOUL
            </NavLink>
            <NavLink to="/blogs" onClick={() => setOpen(false)}>
              BLOGS
            </NavLink>
            <NavLink to="/gallery" onClick={() => setOpen(false)}>
              GALLERY
            </NavLink>
            <NavLink to="/contact" onClick={() => setOpen(false)}>
              CONTACT
            </NavLink>

            {/* Mobile Schedule Meeting Button */}
            <button className="w-full bg-white text-[#0C343D] px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition duration-200 flex items-center justify-center space-x-2 mt-6">
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
    </>
  );
}

export function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        {/* Navigation Bar */}
        <NavBarContent open={open} setOpen={setOpen} />

        {/* Routes - flex-1 to take remaining space */}
        <div className="routes-wrapper pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/river-soul" element={<RiverSoul />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/admin/navigation" element={<NavigationManager />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
