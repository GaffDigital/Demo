import React from 'react';
import VideoCard from '../components/VideoCard';

const Examples = () => {
  const examples = [
    {
      title: 'Modern Law Firm',
      description: 'Professional website design for legal practices',
      videoId: 'JUT-9t5GJ9I'
    },
    {
      title: 'Artisan Coffee Shop',
      description: 'Cozy and inviting design for coffee enthusiasts',
      videoId: 'U0k7ub1Sk8g'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold text-white mb-8">Example Sites</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {examples.map((example, index) => (
          <VideoCard
            key={index}
            title={example.title}
            description={example.description}
            videoId={example.videoId}
          />
        ))}
      </div>
    </div>
  );
};

export default Examples;