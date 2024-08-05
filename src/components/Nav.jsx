import { Link } from "react-scroll";


export function Nav() {
  return (
    <>
      <nav className="bg-black shadow-lg text-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="shrink-0 flex w-48 items-center py-5 text-white">
                <img
                  className="h-8 w-44 font-bold  "
                  src=''
                  alt="Bhanu Prakash Chary"
                />
              </div>

              <Link
                to="hero"
                smooth={true}
                duration={500}
                className="text-white px-3 py-5 rounded-md text-sm font-medium hover:text-yellow-300 cursor-pointer"
              >
                Home
              </Link>
              <Link
                to="cards"
                smooth={true}
                duration={500}
                className="text-white px-3 py-5 rounded-md text-sm font-medium hover:text-yellow-300 cursor-pointer"
              >
                Portfolio
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="text-white px-3 py-5 rounded-md text-sm font-medium hover:text-yellow-300 cursor-pointer"
              >
                Contact
              </Link>
            </div>
            {/* <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <button className="bg-blue-500 text-white px-3 py-2 rounded-md text-sm font-medium">Sign In</button>
            </div> */}
          </div>
        </div>
      </nav>
    </>
  );
}
