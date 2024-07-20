import Illustration from '../assets/heroside.svg';
import resume from '../assets/Resume.pdf'

export function Hero() {
  return (
    <>
      <div id="hero" className="bg-white dark:bg-gray-950 text-gray-900 dark:text-white min-h-screen flex items-center justify-center py-12">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-8xl">Hi, I am Bhanu Prakash</h1>
            <p className="mt-4 text-lg sm:text-xl lg:text-2xl">I am a passionate Software Developer.</p>
            <div className="mt-8">
              <a
                href={resume}
                download="Bhanu_Prkash_Chary_Resume.pdf"
                className="inline-block bg-gray-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-yellow-500 transition duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
            <img src={Illustration} alt="Illustration" className="max-w-full h-auto" />
          </div>
        </div>
      </div>
    </>
  );
}
