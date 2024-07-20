
import { FaEnvelope, FaLinkedin, FaGithub} from 'react-icons/fa';

const contacts = [
  {
    type: 'Email',
    value: 'bhanuprakashchary4@gmail.com',
    icon: <FaEnvelope className="text-gray-900 w-8 h-8" />
  },
  // {
  //   type: 'Phone',
  //   value: '+123 456 7890',
  //   icon: <FaPhone className="text-gray-900 w-8 h-8" />
  // },
  {
    type: 'LinkedIn',
    value: 'linkedin.com/in//BhanuPrakashChary4',
    icon: <FaLinkedin className="text-blue-600 w-8 h-8" />
  },
  {
    type: 'GitHub',
    value: 'https://github.com/BhanuPrakashChary4',
    icon: <FaGithub className="text-gray-900 w-8 h-8" />
  },
  // {
  //   type: 'Twitter',
  //   value: 'twitter.com/yourprofile',
  //   icon: <FaTwitter className="text-blue-500 w-8 h-8" />
  // }
];

const Contact = () => {
  return (
    <div id="contact" className="bg-gray-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white text-center">Contact Me</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {contacts.map((contact, index) => (
            <div key={index} className="bg-gray-900 shadow-md rounded-lg p-6 flex items-center">
              {contact.icon}
              <div className="ml-4">
                <h3 className="text-lg font-bold text-white">{contact.type}</h3>
                <p className="mt-1 text-gray-100">{contact.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};



export default Contact;
