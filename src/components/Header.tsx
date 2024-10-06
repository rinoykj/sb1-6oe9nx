import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Milk, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-green-50 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Milk className="h-8 w-8 text-green-600" />
          <span className="text-xl font-bold text-green-800">Green Pastures Dairy</span>
        </Link>
        <nav className="hidden md:flex space-x-6">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/farm-tours">Farm Tours</NavLink>
          <NavLink to="/sustainability">Sustainability</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/blog">Blog</NavLink>
        </nav>
        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-green-50 py-4"
        >
          <nav className="flex flex-col space-y-4 items-center">
            <NavLink to="/" onClick={toggleMenu}>Home</NavLink>
            <NavLink to="/about" onClick={toggleMenu}>About</NavLink>
            <NavLink to="/products" onClick={toggleMenu}>Products</NavLink>
            <NavLink to="/farm-tours" onClick={toggleMenu}>Farm Tours</NavLink>
            <NavLink to="/sustainability" onClick={toggleMenu}>Sustainability</NavLink>
            <NavLink to="/contact" onClick={toggleMenu}>Contact</NavLink>
            <NavLink to="/blog" onClick={toggleMenu}>Blog</NavLink>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

const NavLink: React.FC<{ to: string; children: React.ReactNode; onClick?: () => void }> = ({ to, children, onClick }) => (
  <Link
    to={to}
    className="text-green-800 hover:text-green-600 transition-colors duration-300"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Header;