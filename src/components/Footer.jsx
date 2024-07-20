import { Link } from "react-scroll";
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-bold">Navigation</h3>
            <ul className="mt-2">
              <li><Link
                to="hero"
                smooth={true}
                duration={500}
                className="text-gray-400 px-3 py-5 rounded-md text-sm font-medium hover:text-yellow-300 cursor-pointer"
              >
                Home
              </Link></li>
              <li><Link
                to="cards"
                smooth={true}
                duration={500}
                className="text-gray-400 px-3 py-5 rounded-md text-sm font-medium hover:text-yellow-300 cursor-pointer"
              >
                Portfolio
              </Link></li>
              <li><Link
                to="contact"
                smooth={true}
                duration={500}
                className="text-gray-400 px-3 py-5 rounded-md text-sm font-medium hover:text-yellow-300 cursor-pointer"
              >
                Contact Me
              </Link></li>
              
            </ul>
          </div>
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-bold">Follow Us</h3>
            <div className="mt-2 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><FaLinkedin className="w-6 h-6" /></a>
              <a href="#" className="text-gray-400 hover:text-white"><FaGithub className="w-6 h-6" /></a>
              <a href="#" className="text-gray-400 hover:text-white"><FaTwitter className="w-6 h-6" /></a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold">Contact</h3>
            <ul className="mt-2">
              <li><span className="text-gray-400">Email: </span>bhanuprakashchary4@gmail.com</li>
              {/* <li><span className="text-gray-400">Phone: </span>+123 456 7890</li> */}
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          &copy; 2024 Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};



export default Footer;
