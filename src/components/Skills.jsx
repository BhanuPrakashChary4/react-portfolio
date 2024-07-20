
import { FaJsSquare, FaReact, FaNodeJs, FaPython, FaDocker, FaLinux,FaNode,FaAndroid } from 'react-icons/fa';
import { DiPostgresql, DiGithubFull, DiDart, DiMongodb,DiMysql,DiDjango } from 'react-icons/di';
const skills = [
  // { name: 'HTML5', icon: <FaHtml5 className="text-orange-600 w-12 h-12" /> },
  // { name: 'CSS3', icon: <FaCss3Alt className="text-blue-600 w-12 h-12" /> },
  { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-500 w-12 h-12" /> },
  { name: 'React', icon: <FaReact className="text-blue-500 w-12 h-12" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500 w-12 h-12" /> },
  { name: 'Python', icon: <FaPython className="text-blue-400 w-12 h-12" /> },
  { name: 'Docker', icon: <FaDocker className="text-blue-400 w-12 h-12" /> },
  { name: 'Linux', icon: <FaLinux className="text-gray-200 w-12 h-12" /> },
  { name: 'Node', icon: <FaNode className="text-green-400 w-12 h-12" /> },
  { name: 'Android', icon: <FaAndroid className="text-green-300 w-12 h-12" /> },


  { name: 'Postgres', icon: <DiPostgresql className="text-blue-500 w-12 h-12" /> },
  { name: 'Github', icon: <DiGithubFull className="text-orange-400 w-12 h-12" /> },
  { name: 'Dart', icon: <DiDart className="text-blue-500 w-12 h-12" /> },
  { name: 'MangoDB', icon: <DiMongodb className="text-green-400 w-12 h-12" /> },
  { name: 'MySQL', icon: <DiMysql className="text-blue-500 w-12 h-12" /> },
  { name: 'Django', icon: <DiDjango className="text-orange-800 w-12 h-12" /> },

];

export default function Skills() {
  return (
    <div className="bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white text-center">My Skills</h2>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              {skill.icon}
              <h3 className="mt-2 text-lg font-bold text-white">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


