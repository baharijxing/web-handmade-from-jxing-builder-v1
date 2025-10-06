export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-amber-50 to-orange-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Handcrafted with Love, Made for You
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              Discover unique, artisan-made crafts that tell a story. Each piece is carefully handcrafted by skilled artisans who pour their heart into every creation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-4 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors shadow-lg">
                Shop Collection
              </button>
              <button className="px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-colors">
                Learn Our Story
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=800&h=800&fit=crop"
                alt="Handmade crafts and artisan products"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-200 rounded-full opacity-50 blur-2xl"></div>
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-amber-200 rounded-full opacity-50 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
