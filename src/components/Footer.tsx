import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">About AgroSmart</h3>
            <p className="text-green-200">
              Empowering farmers with smart technology and reliable information for better agriculture.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-green-200 hover:text-white">About Us</a></li>
              <li><a href="/features" className="text-green-200 hover:text-white">Features</a></li>
              <li><a href="/contact" className="text-green-200 hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Resources</h3>
            <ul className="space-y-2">
              <li><a href="/blog" className="text-green-200 hover:text-white">Blog</a></li>
              <li><a href="/videos" className="text-green-200 hover:text-white">Videos</a></li>
              <li><a href="/faq" className="text-green-200 hover:text-white">FAQ</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-green-200 hover:text-white">Twitter</a></li>
              <li><a href="#" className="text-green-200 hover:text-white">Facebook</a></li>
              <li><a href="#" className="text-green-200 hover:text-white">Instagram</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-green-700 text-center">
          <p className="flex items-center justify-center text-green-200">
            Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> for farmers worldwide
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;