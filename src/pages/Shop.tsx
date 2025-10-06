import { useState } from 'react'
import { Link } from 'react-router-dom'

const allProducts = [
  {
    id: 1,
    name: "Handwoven Basket",
    price: 48,
    category: "Home Decor",
    image: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=600&h=600&fit=crop",
    description: "Beautiful natural fiber basket"
  },
  {
    id: 2,
    name: "Ceramic Mug Set",
    price: 65,
    category: "Pottery & Ceramics",
    image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=600&h=600&fit=crop",
    description: "Hand-thrown pottery mugs"
  },
  {
    id: 3,
    name: "Macramé Wall Hanging",
    price: 89,
    category: "Textiles & Fiber",
    image: "https://images.unsplash.com/photo-1629198735820-0fddf6f41e29?w=600&h=600&fit=crop",
    description: "Intricate handmade wall art"
  },
  {
    id: 4,
    name: "Wooden Cutting Board",
    price: 56,
    category: "Woodwork",
    image: "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?w=600&h=600&fit=crop",
    description: "Solid oak craftsmanship"
  },
  {
    id: 5,
    name: "Hand-Knit Throw",
    price: 125,
    category: "Textiles & Fiber",
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&h=600&fit=crop",
    description: "Cozy wool blanket"
  },
  {
    id: 6,
    name: "Pottery Vase",
    price: 72,
    category: "Pottery & Ceramics",
    image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=600&h=600&fit=crop",
    description: "Unique glazed ceramics"
  },
  {
    id: 7,
    name: "Woven Placemats Set",
    price: 42,
    category: "Textiles & Fiber",
    image: "https://images.unsplash.com/photo-1615486511262-98146759f3b4?w=600&h=600&fit=crop",
    description: "Set of 4 handwoven placemats"
  },
  {
    id: 8,
    name: "Ceramic Bowl",
    price: 38,
    category: "Pottery & Ceramics",
    image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=600&h=600&fit=crop",
    description: "Artisan serving bowl"
  },
  {
    id: 9,
    name: "Wooden Spoon Set",
    price: 34,
    category: "Woodwork",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&h=600&fit=crop",
    description: "Hand-carved cooking utensils"
  },
  {
    id: 10,
    name: "Macramé Plant Hanger",
    price: 45,
    category: "Home Decor",
    image: "https://images.unsplash.com/photo-1545241047-6083a3684587?w=600&h=600&fit=crop",
    description: "Bohemian plant holder"
  },
  {
    id: 11,
    name: "Ceramic Plate Set",
    price: 95,
    category: "Pottery & Ceramics",
    image: "https://images.unsplash.com/photo-1584280979324-7ae2e08bfcda?w=600&h=600&fit=crop",
    description: "Set of 6 dinner plates"
  },
  {
    id: 12,
    name: "Wood Wall Art",
    price: 78,
    category: "Home Decor",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600&h=600&fit=crop",
    description: "Geometric wooden decoration"
  }
];

const categories = ["All", "Pottery & Ceramics", "Textiles & Fiber", "Woodwork", "Home Decor"];

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");

  const filteredProducts = allProducts.filter(product =>
    selectedCategory === "All" ? true : product.category === selectedCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "name") return a.name.localeCompare(b.name);
    return 0;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Shop All Products</h1>
          <p className="text-lg text-gray-600">Discover our complete collection of handmade treasures</p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            {/* Category Filter */}
            <div className="w-full lg:w-auto">
              <label className="block text-sm font-semibold text-gray-700 mb-3">Category</label>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-gray-900 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort By */}
            <div className="w-full lg:w-auto">
              <label className="block text-sm font-semibold text-gray-700 mb-3">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full lg:w-auto px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A to Z</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold">{sortedProducts.length}</span> products
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedProducts.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
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
              <div className="p-5">
                <p className="text-xs text-gray-500 mb-2">{product.category}</p>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-gray-900">
                    ${product.price}
                  </span>
                  <button className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors">
                    View
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
