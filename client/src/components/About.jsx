import React from 'react';
import Navbar from "./Navbar";
import { Typewriter } from 'react-simple-typewriter';

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-section container mt-10 text-center px-4">
        <h1 className="text-4xl font-bold text-purple-700 mb-4">
          <Typewriter
            words={[
              'About This Blog 🧐',
              'A place to explore ideas 💡',
              'Your voice, your stories, your platform ✨'
            ]}
            loop={0} // 0 = infinite
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </h1>

        <p className="text-gray-700 text-lg mt-4 max-w-2xl mx-auto">
          This blog is a space where creativity meets community. Whether you're here to read, write, or get inspired — you're in the right place.
        </p>
      </div>
    </>
  );
};

export default About;
