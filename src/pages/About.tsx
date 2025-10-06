export default function About() {
  const values = [
    {
      title: "Sustainability",
      description: "We prioritize eco-friendly materials and sustainable practices in every creation.",
      icon: "🌱"
    },
    {
      title: "Quality",
      description: "Each product is crafted with meticulous attention to detail and quality materials.",
      icon: "⭐"
    },
    {
      title: "Community",
      description: "We support local and global artisan communities through fair trade partnerships.",
      icon: "🤝"
    },
    {
      title: "Authenticity",
      description: "Every piece is genuinely handmade, preserving traditional craftsmanship.",
      icon: "✨"
    }
  ];

  const team = [
    {
      name: "Maria Rodriguez",
      role: "Basket Weaver",
      location: "Guatemala",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      bio: "15 years of experience in traditional weaving techniques"
    },
    {
      name: "John Chen",
      role: "Ceramic Artist",
      location: "USA",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=400&fit=crop",
      bio: "Master potter specializing in functional ceramics"
    },
    {
      name: "Sarah Thompson",
      role: "Fiber Artist",
      location: "Canada",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      bio: "Expert in macramé and textile arts"
    },
    {
      name: "Ahmed Hassan",
      role: "Woodworker",
      location: "Morocco",
      image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=400&h=400&fit=crop",
      bio: "Third-generation carpenter and wood artisan"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Story</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Artisan Haven was born from a passion for handmade craftsmanship and a desire to connect talented artisans with people who appreciate the beauty of handcrafted goods.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=800&h=600&fit=crop"
                alt="Artisan at work"
                className="rounded-2xl shadow-2xl w-full"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We believe in the power of handmade products to tell stories, preserve traditions, and create meaningful connections. Our mission is to provide a platform where skilled artisans can showcase their crafts and reach a global audience.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Every purchase supports the livelihood of artisans and their communities, helping to preserve traditional techniques for future generations while providing economic opportunities in their local areas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow text-center">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Artisans Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Meet Our Artisans</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The talented craftspeople behind our beautiful products
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group">
                <div className="aspect-square rounded-xl overflow-hidden mb-4 shadow-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-sm text-amber-600 font-semibold mb-1">{member.role}</p>
                <p className="text-sm text-gray-500 mb-3">{member.location}</p>
                <p className="text-sm text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-gray-300">Unique Products</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-gray-300">Artisan Partners</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">25</div>
              <div className="text-gray-300">Countries</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">10K+</div>
              <div className="text-gray-300">Happy Customers</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Join Our Community
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Subscribe to our newsletter for artisan stories, new collections, and exclusive offers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            />
            <button className="px-8 py-4 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
