const products = [
  {
    id: 1,
    name: "Handwoven Basket",
    price: "$48",
    image: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=600&h=600&fit=crop",
    description: "Beautiful natural fiber basket"
  },
  {
    id: 2,
    name: "Ceramic Mug Set",
    price: "$65",
    image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=600&h=600&fit=crop",
    description: "Hand-thrown pottery mugs"
  },
  {
    id: 3,
    name: "Macramé Wall Hanging",
    price: "$89",
    image: "https://images.unsplash.com/photo-1629198735820-0fddf6f41e29?w=600&h=600&fit=crop",
    description: "Intricate handmade wall art"
  },
  {
    id: 4,
    name: "Wooden Cutting Board",
    price: "$56",
    image: "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?w=600&h=600&fit=crop",
    description: "Solid oak craftsmanship"
  },
  {
    id: 5,
    name: "Hand-Knit Throw",
    price: "$125",
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&h=600&fit=crop",
    description: "Cozy wool blanket"
  },
  {
    id: 6,
    name: "Pottery Vase",
    price: "$72",
    image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=600&h=600&fit=crop",
    description: "Unique glazed ceramics"
  }
];

export default function FeaturedProducts() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Featured Creations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Each piece is lovingly handcrafted with attention to detail and quality materials
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="aspect-square overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">
                    {product.price}
                  </span>
                  <button className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-colors">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}
