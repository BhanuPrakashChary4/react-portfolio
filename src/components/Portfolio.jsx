import { Cards } from "./Cards";

export function Portfolio() {
  return (
    <>
      <div className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white text-center">My Projects</h2>
          <Cards />
        </div>
      </div>
    </>
  );
}
