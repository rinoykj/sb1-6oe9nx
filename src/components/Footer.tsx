import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Green Pastures Dairy</h3>
            <p className="mb-4">Bringing you the finest dairy products since 1950.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-green-300 transition-colors duration-300">
                <Facebook />
              </a>
              <a href="#" className="hover:text-green-300 transition-colors duration-300">
                <Instagram />
              </a>
              <a href="#" className="hover:text-green-300 transition-colors duration-300">
                <Twitter />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-green-300 transition-colors duration-300">Home</Link></li>
              <li><Link to="/about" className="hover:text-green-300 transition-colors duration-300">About Us</Link></li>
              <li><Link to="/products" className="hover:text-green-300 transition-colors duration-300">Products</Link></li>
              <li><Link to="/farm-tours" className="hover:text-green-300 transition-colors duration-300">Farm Tours</Link></li>
              <li><Link to="/sustainability" className="hover:text-green-300 transition-colors duration-300">Sustainability</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p>123 Dairy Lane, Green Valley, CA 12345</p>
            <p>Phone: (555) 123-4567</p>
            <p>Email: info@greenpasturesdairy.com</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-green-700 text-center">
          <p>&copy; 2024 Green Pastures Dairy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;