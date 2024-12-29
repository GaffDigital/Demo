import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center">
        <h1 className="text-4xl sm:text-6xl font-bold text-white mb-8">
          Designing modern yet affordable websites
        </h1>
        <p className="text-xl text-white mb-12 max-w-3xl mx-auto">
          Transform your online presence with our professional web design services. 
          We create beautiful, responsive websites that drive results.
        </p>
        <button
          onClick={() => navigate('/examples')}
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
        >
          Example Sites
          <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default Home;