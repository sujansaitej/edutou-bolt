import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Brain className="h-8 w-8 text-indigo-300 mr-2" />
              <span className="font-bold text-xl tracking-tight">EDUTOU</span>
            </div>
            <p className="text-indigo-200 mb-4">
              Redefining Education with AI-driven learning, real-world execution, and industry-aligned mentorship.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-indigo-200 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-indigo-200 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-indigo-200 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-indigo-200 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-indigo-200 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-indigo-200 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/courses" className="text-indigo-200 hover:text-white transition-colors">Courses</Link></li>
              <li><Link to="/contact" className="text-indigo-200 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Courses</h3>
            <ul className="space-y-2">
              <li><Link to="/courses/full-stack-foundation" className="text-indigo-200 hover:text-white transition-colors">Full Stack Foundation</Link></li>
              <li><Link to="/courses" className="text-indigo-200 hover:text-white transition-colors">AI Development</Link></li>
              <li><Link to="/courses" className="text-indigo-200 hover:text-white transition-colors">VR Learning Spaces</Link></li>
              <li><Link to="/courses" className="text-indigo-200 hover:text-white transition-colors">No-Code App Building</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-indigo-300" />
                <span className="text-indigo-200">info@edutou.com</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-indigo-300" />
                <span className="text-indigo-200">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-indigo-300 mt-1" />
                <span className="text-indigo-200">123 Innovation Drive, Tech City, TC 12345</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-indigo-800 mt-8 pt-8 text-center text-indigo-300">
          <p>&copy; {new Date().getFullYear()} EDUTOU Skill Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;