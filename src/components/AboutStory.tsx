export default function AboutStory() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img
              src="https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&h=600&fit=crop"
              alt="Artisan crafting handmade products"
              className="rounded-2xl shadow-2xl w-full"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <div className="inline-block px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-semibold">
              Our Story
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              Crafted with Passion, Made to Last
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              At Artisan Haven, we believe in the beauty of handmade creations. Every product in our collection is crafted by skilled artisans who dedicate their time, talent, and heart to creating something truly special.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We partner with local and international craftspeople who share our commitment to quality, sustainability, and preserving traditional techniques while embracing modern design.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-6 bg-amber-50 rounded-xl">
                <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
                <div className="text-sm text-gray-600">Unique Products</div>
              </div>
              <div className="text-center p-6 bg-amber-50 rounded-xl">
                <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
                <div className="text-sm text-gray-600">Artisan Partners</div>
              </div>
            </div>
            <button className="px-8 py-4 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors">
              Meet Our Artisans
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
