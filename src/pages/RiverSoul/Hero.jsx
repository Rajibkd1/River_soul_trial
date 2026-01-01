import bgImage from "../../assets/a97d0f71466c94ed0ceeaade1eb79d4dff1be494.jpg";

export function Hero() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      />

      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content wrapper */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Main hero section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mb-20">
          {/* Left content */}
          <div className="flex flex-col justify-start lg:col-span-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              The Soul of Nature & Harmony
            </h1>

            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-white/90 mb-8 font-medium leading-relaxed">
              The River Soul — Where Nature, Culture & Sustainability Unite
            </h2>

            <p className="text-base lg:text-lg text-white/80 mb-10 leading-relaxed max-w-lg">
              Experience a one-of-a-kind agro-tourism and eco-resort destination
              that blends sustainable farming, natural living, and authentic
              cultural experiences. Located beside Barishal University,
              surrounded by rivers and greenery, The River Soul is your gateway
              to a peaceful and purposeful escape.
            </p>

            <button className="flex items-center gap-2 bg-white text-teal-700 px-8 py-3 rounded-full font-semibold hover:bg-white/90 transition-colors w-fit">
              Invest Now
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>

          {/* Right content */}
          <div className="flex flex-col items-center lg:items-end gap-4 lg:col-span-1">
            {/* Video thumbnail */}
            <div className="relative w-full lg:w-80 h-48 rounded-2xl border-4 border-teal-400 overflow-hidden shadow-2xl">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/erFiMZ_vLyQ"
                title="River Soul Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Stats */}
            <div className="space-y-4 w-full lg:w-80">
              <div className="text-center lg:text-right">
                <div className="text-6xl font-bold text-white mb-2">100%</div>
                <div className="text-xl text-white/90 font-light border-b border-white/30 pb-3">
                  Eco-Friendly Design
                </div>
              </div>

              <div className="text-center lg:text-right">
                <div className="text-6xl font-bold text-white mb-2">25+</div>
                <div className="text-xl text-white/90 font-light">
                  Acres of Farmland
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature cards section */}
        <div className="bg-[#025446] p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 rounded-xl">
          {/* Card 1 */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-4 border-[#0C343D] relative overflow-hidden">
            <h3 className="text-xl font-bold text-[#0C343D] mb-3">
              Total Land Size
            </h3>
            <p className="text-[#0C343D] text-sm leading-relaxed">
              325,302.16 sq ft (7.4679 acres / 746.791 decimals)
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-4 border-[#0C343D] relative overflow-hidden">
            <h3 className="text-xl font-bold text-[#0C343D] mb-3">Features</h3>
            <p className="text-[#0C343D] text-sm leading-relaxed">
              Pond, trees, semi-pucca houses, mosque, tube wells, road access
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-4 border-[#0C343D] relative overflow-hidden">
            <h3 className="text-xl font-bold text-[#0C343D] mb-3">
              Market Value
            </h3>
            <p className="text-[#0C343D] text-3xl font-bold">৳50 crore</p>
          </div>

          {/* Card 4 */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-4 border-[#0C343D] relative overflow-hidden">
            <h3 className="text-xl font-bold text-[#0C343D] mb-3">Location</h3>
            <p className="text-[#0C343D] text-sm leading-relaxed">
              Near Barishal University – tranquil yet easily accessible
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
