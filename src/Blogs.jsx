export function Blogs() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center">
        Blogs
      </h1>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-400"></div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Blog Post 1
            </h3>
            <p className="text-gray-600 mb-4">
              Discover the latest trends in riverside living and sustainable
              development.
            </p>
            <button className="text-blue-600 hover:text-blue-800 font-medium">
              Read More →
            </button>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="h-48 bg-gradient-to-r from-green-400 to-blue-400"></div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Blog Post 2
            </h3>
            <p className="text-gray-600 mb-4">
              Tips for choosing the perfect property for your family.
            </p>
            <button className="text-blue-600 hover:text-blue-800 font-medium">
              Read More →
            </button>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="h-48 bg-gradient-to-r from-purple-400 to-pink-400"></div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Blog Post 3
            </h3>
            <p className="text-gray-600 mb-4">
              The benefits of living close to nature and water.
            </p>
            <button className="text-blue-600 hover:text-blue-800 font-medium">
              Read More →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
