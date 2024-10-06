import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="bg-green-50 py-16">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-green-800 mb-8 text-center"
        >
          About Green Pastures Dairy
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1594761051556-71c4b5d6b7be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Green Pastures Dairy Farm"
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Founded in 1950, Green Pastures Dairy has been a family-owned and operated farm for three generations. Our journey began with a small herd of cows and a passion for producing the finest quality dairy products.
            </p>
            <p className="text-gray-700">
              Over the years, we've grown and evolved, but our commitment to sustainable farming practices and animal welfare has remained unwavering. Today, we're proud to be a leader in ethical dairy production, supplying our community with nutritious and delicious products.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-white rounded-lg shadow-lg p-8 mb-16"
        >
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Commitment to quality and taste</li>
            <li>Ethical treatment of animals</li>
            <li>Sustainable farming practices</li>
            <li>Support for local communities</li>
            <li>Transparency in our processes</li>
          </ul>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { name: "John Doe", role: "Founder", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
            { name: "Jane Smith", role: "Head of Production", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
            { name: "Mike Johnson", role: "Sustainability Officer", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" }
          ].map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img src={member.image} alt={member.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-green-700">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center"
        >
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Join Our Journey</h2>
          <p className="text-gray-700 mb-8">
            We're always looking for passionate individuals to join our team. If you share our values and want to be part of our mission, we'd love to hear from you.
          </p>
          <a href="#" className="btn btn-primary">View Career Opportunities</a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;