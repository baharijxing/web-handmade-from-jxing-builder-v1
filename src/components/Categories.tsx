const categories = [
  {
    id: 1,
    name: "Pottery & Ceramics",
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400&h=400&fit=crop",
    itemCount: "45+ items"
  },
  {
    id: 2,
    name: "Textiles & Fiber",
    image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=400&fit=crop",
    itemCount: "60+ items"
  },
  {
    id: 3,
    name: "Woodwork",
    image: "https://images.unsplash.com/photo-1602572899853-f4b4e7c4ec67?w=400&h=400&fit=crop",
    itemCount: "32+ items"
  },
  {
    id: 4,
    name: "Home Decor",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop",
    itemCount: "78+ items"
  }
];

export default function Categories() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our curated collections of handmade treasures
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group cursor-pointer relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-1">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-200">{category.itemCount}</p>
              </div>
              <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/30 rounded-xl transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
