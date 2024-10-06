import React from 'react';

const Blog: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-green-800 mb-4">Our Blog</h1>
      <p className="text-gray-700">
        Stay updated with the latest news and insights from Green Pastures Dairy.
      </p>
      {/* Add blog posts or list here */}
    </div>
  );
};

export default Blog;