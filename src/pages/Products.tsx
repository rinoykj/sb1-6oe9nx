import React from 'react';
import { motion } from 'framer-motion';

const products = [
  { name: 'Fresh Milk', description: 'Creamy and nutritious, straight from our happy cows.', image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
  { name: 'Artisan Cheese', description: 'Hand-crafted cheeses with rich flavors.', image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
  { name: 'Creamy Yogurt', description: 'Probiotic-rich yogurt for a healthy gut.', image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
  { name: 'Organic Butter', description: 'Smooth, golden butter from grass-fed cows.', image: 'https://images.unsplash.com/photo-1589985270958-bf087181b3d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
  { name: 'Ice Cream', description: 'Indulgent ice cream made with the finest ingredients.', image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
  { name: 'Whey Protein', description: 'High-quality protein for fitness enthusiasts.', image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
];

const Products: React.FC = () => {
  return (
    <div className="bg-green-50 py-16">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-green-800 mb-8 text-center"
        >
          Our Products
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-gray-700 mb-12 max-w-2xl mx-auto"
        >
          Discover our range of high-quality dairy products, made with care from the milk of our grass-fed cows. Each product embodies our commitment to taste, nutrition, and sustainability.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-green-700 mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <button className="btn btn-primary w-full">Learn More</button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-gray-700 mb-8">
            We're always expanding our product line. If there's something you'd like to see, let us know!
          </p>
          <a href="#" className="btn btn-primary">Contact Us</a>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;