import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="bg-green-50">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Green pasture with cows"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="container mx-auto px-4 z-10 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            Welcome to Green Pastures Dairy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl mb-8"
          >
            Experience the taste of nature in every drop
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link to="/products" className="btn btn-primary mr-4">Shop Now</Link>
            <Link to="/farm-tours" className="btn bg-white text-green-800 hover:bg-green-100">Book a Tour</Link>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">Our Mission</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg mb-8">
              At Green Pastures Dairy, we're committed to producing the highest quality dairy products while maintaining sustainable and ethical farming practices. Our mission is to nourish our community with wholesome dairy products while preserving the environment for future generations.
            </p>
            <Link to="/about" className="btn btn-primary">Learn More About Us</Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Fresh Milk', 'Artisan Cheese', 'Creamy Yogurt'].map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-green-50 rounded-lg overflow-hidden shadow-md"
              >
                <img
                  src={`https://source.unsplash.com/featured/?${product.toLowerCase().replace(' ', '')}`}
                  alt={product}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{product}</h3>
                  <p className="text-gray-600 mb-4">Experience the rich flavor of our {product.toLowerCase()}.</p>
                  <Link to="/products" className="text-green-600 hover:text-green-700 font-semibold">Learn More</Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-green-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center text-white">Sustainability Commitment</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg mb-8">
              We believe in responsible farming that respects the environment and our animals. Our sustainable practices ensure that we produce high-quality dairy products while minimizing our ecological footprint.
            </p>
            <Link to="/sustainability" className="btn bg-white text-green-800 hover:bg-green-100">Discover Our Practices</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;