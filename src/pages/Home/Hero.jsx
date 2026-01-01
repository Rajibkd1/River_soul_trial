import homeHeroImage from "../../assets/home_hero.jpg";

export default function HomeHero() {
  return (
    <div
      className="relative min-h-screen w-full overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(${homeHeroImage})`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 lg:px-24 py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto">
          {/* Top Section */}
          <div className="flex flex-col gap-6 md:gap-8 max-w-3xl mb-12 md:mb-16 lg:mb-20">
            {/* Subtitle */}
            <p className="text-white text-sm md:text-base font-medium tracking-wide">
              Welcome to River Soul
            </p>

            {/* Main Heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Investing in <span className="text-teal-400">Nature,</span>
              <br />
              Simplifying Tomorrow.
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg text-white font-semibold leading-relaxed">
              We are redefining the future of agriculture through technology,
              data, and sustainable innovation.
            </p>

            {/* Read More Button */}
            <button className="w-fit px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
              Read more
            </button>
          </div>

          {/* Bottom Section - Cards and Stats */}
          <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-start">
            {/* Left Card - Info */}
            <div className="bg-black/60 border border-gray-600/50 rounded-2xl p-6 md:p-8 backdrop-blur-sm w-full lg:w-auto lg:max-w-lg">
              <p className="text-gray-100 text-sm md:text-base leading-relaxed mb-6">
                We are an agri-tech platform transforming Bangladesh's
                agriculture by empowering 10 million farmers by 2035 through
                innovation, finance, technology, and data. Our goal is to
                make...
              </p>
              <button className="px-8 py-3 bg-yellow-500 text-gray-900 rounded-full font-semibold hover:bg-yellow-400 transition-all duration-300">
                Invest Now
              </button>
            </div>

            {/* Right Section - Video and Stats */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start flex-1">
              {/* Video iframe */}
              <div className="relative w-full md:w-80 lg:w-96">
                <div className="relative rounded-2xl overflow-hidden border-4 border-white/70 aspect-video bg-gray-900">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/hL_xLco0Mik"
                    title="River Soul Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              {/* Stats Section */}
              <div className="flex flex-col gap-6 md:gap-8">
                {/* Stat 1: Farmers */}
                <div className="text-right">
                  <p className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
                    7500+
                  </p>
                  <p className="text-gray-100 text-base md:text-lg mt-2">
                    Farmer Financed
                  </p>
                </div>

                {/* Stat 2: Partners with Avatars */}
                <div className="text-right">
                  <div className="flex items-center justify-end gap-4">
                    <div>
                      <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                        16K+
                      </p>
                      <p className="text-gray-100 text-base md:text-lg mt-2">
                        Satisfied Partners
                      </p>
                    </div>
                    {/* Avatar Group */}
                    <div className="flex -space-x-3">
                      {[
                        "https://i.pravatar.cc/150?img=33",
                        "https://i.pravatar.cc/150?img=12",
                        "https://i.pravatar.cc/150?img=45",
                        "https://i.pravatar.cc/150?img=68",
                      ].map((avatar, i) => (
                        <div
                          key={i}
                          className="w-12 h-12 md:w-14 md:h-14 rounded-full border-4 border-white overflow-hidden"
                        >
                          <img
                            src={avatar}
                            alt={`Partner ${i + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
