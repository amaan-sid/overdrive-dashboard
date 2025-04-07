import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Body = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />

      <main className="flex-grow">
        <div className="p-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Overdrive 🚀</h1>
          <p className="text-lg max-w-3xl mx-auto text-gray-300">
            Overdrive is a powerful, all-in-one dashboard that integrates multiple APIs into one seamless experience.
            Explore live data from <span className="text-blue-400 font-semibold">Codeforces</span> to analyze programmers,
            get real-time <span className="text-yellow-400 font-semibold">Weather</span> updates, and search through
            <span className="text-green-400 font-semibold"> GitHub</span> users and repositories – all in one place.
          </p>

          <p className="mt-6 text-gray-400">
            Dive in using the navbar above and explore each feature. Built with ❤️ using React, TailwindCSS, and RESTful APIs.
          </p>
        </div>
      </main>

      {/* <Footer /> */}
    </div>
  );
};

export default Body;
