import React from "react";
import { Twitter, Github, Linkedin } from "lucide-react"; 
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        
        <div>
          <h2 className="text-2xl font-bold">MyWebsite</h2>
          <p className="mt-2 text-gray-400">Building the web, one line at a time.</p>
        </div>

        
        <div>
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li><Link to="#" className="hover:text-gray-400">Home</Link></li>
            <li><Link to="#" className="hover:text-gray-400">About</Link></li>
            <li><Link to="#" className="hover:text-gray-400">Services</Link></li>
            <li><Link to="#" className="hover:text-gray-400">Contact</Link></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-xl font-semibold">Follow Us</h3>
          <div className="mt-2 flex justify-center md:justify-start space-x-4">
            <Link to="#" className="hover:text-gray-400"><Twitter size={24} /></Link>
            <Link to="https://github.com/amaan-sid" className="hover:text-gray-400"><Github size={24} /></Link>
            <Link to="#" className="hover:text-gray-400"><Linkedin size={24} /></Link>
          </div>
        </div>
      </div>

      
      <div className="text-center mt-8 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} MyWebsite. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
