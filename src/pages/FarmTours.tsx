import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

const FarmTours: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    // Here you would typically send the data to your backend
    alert('Tour booked successfully!');
  };

  return (
    <div className="bg-green-50 py-16">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-green-800 mb-8 text-center"
        >
          Farm Tours
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Green Pastures Dairy Farm Tour"
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Experience Our Farm</h2>
            <p className="text-gray-700 mb-4">
              Join us for a guided tour of Green Pastures Dairy Farm. You'll get to see our happy cows grazing in lush pastures, learn about our sustainable farming practices, and even try your hand at milking!
            </p>
            <p className="text-gray-700 mb-4">
              Our tours are educational, fun, and perfect for all ages. You'll leave with a deeper appreciation for where your food comes from and the hard work that goes into producing high-quality dairy products.
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>See our state-of-the-art milking facility</li>
              <li>Learn about sustainable farming practices</li>
              <li>Meet our friendly cows</li>
              <li>Taste fresh dairy products</li>
              <li>Enjoy the beautiful countryside</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-white rounded-lg shadow-lg p-8 mb-16"
        >
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Book Your Tour</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                id="name"
                {...register("name", { required: "Name is required" })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message as string}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                id="email"
                {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message as string}</p>}
            </div>
            <div>