export function Gallery() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center">
        Gallery
      </h1>
      <div className="grid md:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="aspect-square bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 rounded-lg shadow-lg hover:shadow-xl transition duration-300 flex items-center justify-center"
          >
            <span className="text-white text-2xl font-semibold">
              Image {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
