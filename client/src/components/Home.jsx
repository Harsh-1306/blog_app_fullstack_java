import React from 'react';
import Navbar from './Navbar';
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="container blog-home mx-auto py-12 text-center">
        <h1 className="text-4xl font-bold mb-4 text-blue-700">
          <Typewriter
            words={['Welcome to MyBlog 📝', 'Read. Write. Share.', 'Your thoughts matter here!']}
            loop={0} // 0 for infinite
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </h1>

        <p className="text-lg text-gray-600 mt-4">
          Discover ideas, express yourself, and connect through stories.
        </p>
      </div>
    </>
  );
};

export default Home;
