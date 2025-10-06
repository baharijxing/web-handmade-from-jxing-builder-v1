import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'

const products = [
  {
    id: 1,
    name: "Handwoven Basket",
    price: 48,
    category: "Home Decor",
    image: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=800&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=800&h=800&fit=crop&sat=-100",
      "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=800&h=800&fit=crop&brightness=110"
    ],
    description: "Beautiful natural fiber basket handwoven by skilled artisans",
    longDescription: "This stunning handwoven basket is crafted from sustainably sourced natural fibers. Each basket is unique, featuring intricate weaving patterns that showcase the artisan's skill and dedication. Perfect for storage or as a decorative piece, this basket adds warmth and texture to any space.",
    features: [
      "100% natural materials",
      "Handwoven by local artisans",
      "Sustainable and eco-friendly",
      "Dimensions: 12\" x 10\" x 8\"",
      "Each piece is unique"
    ],
    inStock: true,
    artisan: "Maria Rodriguez",
    madeIn: "Guatemala"
  },
  {
    id: 2,
    name: "Ceramic Mug Set",
    price: 65,
    category: "Pottery & Ceramics",
    image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=800&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=800&h=800&fit=crop&sat=-50"
    ],
    description: "Hand-thrown pottery mugs, set of 2",
    longDescription: "These beautiful ceramic mugs are hand-thrown on a pottery wheel and carefully glazed to create a unique finish. The set includes two mugs, perfect for sharing your morning coffee with a loved one.",
    features: [
      "Set of 2 mugs",
      "Hand-thrown pottery",
      "Food-safe glaze",
      "Microwave and dishwasher safe",
      "Capacity: 12 oz each"
    ],
    inStock: true,
    artisan: "John Chen",
    madeIn: "USA"
  },
  {
    id: 3,
    name: "Macramé Wall Hanging",
    price: 89,
    category: "Textiles & Fiber",
    image: "https://images.unsplash.com/photo-1629198735820-0fddf6f41e29?w=800&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1629198735820-0fddf6f41e29?w=800&h=800&fit=crop"
    ],
    description: "Intricate handmade wall art",
    longDescription: "This intricate macramé wall hanging is created using traditional knotting techniques. Made from soft cotton cord, it adds a bohemian touch to any room.",
    features: [
      "100% cotton cord",
      "Handcrafted macramé",
      "Includes wooden dowel rod",
      "Dimensions: 24\" x 36\"",
      "Ready to hang"
    ],
    inStock: true,
    artisan: "Sarah Thompson",
    madeIn: "Canada"
  }
];

export default function ProductDetail() {
  const { id } = useParams()
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  const product = products.find(p => p.id === Number(id))

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-lg text-gray-600 mb-8">Sorry, we couldn't find the product you're looking for.</p>
          <Link to="/shop" className="px-8 py-4 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors inline-block">
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    alert(`Added ${quantity} x ${product.name} to cart!`)
  }

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-gray-900">Home</Link>
            <span>/</span>
            <Link to="/shop" className="hover:text-gray-900">Shop</Link>
            <span>/</span>
            <span className="text-gray-900">{product.name}</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100 mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 ${
                      selectedImage === index ? 'border-gray-900' : 'border-transparent'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-500 mb-2">{product.category}</p>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
              <div className="flex items-baseline gap-4">
                <span className="text-3xl font-bold text-gray-900">${product.price}</span>
                {product.inStock ? (
                  <span className="text-sm text-green-600 font-medium">In Stock</span>
                ) : (
                  <span className="text-sm text-red-600 font-medium">Out of Stock</span>
                )}
              </div>
            </div>

            <div className="border-t border-b border-gray-200 py-6">
              <p className="text-lg text-gray-700 leading-relaxed">{product.longDescription}</p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Artisan Info */}
            <div className="bg-amber-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Artisan Information</h3>
              <p className="text-gray-700">
                <span className="font-medium">Made by:</span> {product.artisan}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Origin:</span> {product.madeIn}
              </p>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Quantity</label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                  >
                    -
                  </button>
                  <span className="text-lg font-semibold w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="w-full px-8 py-4 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </button>

              <Link
                to="/shop"
                className="block w-full px-8 py-4 border-2 border-gray-900 text-gray-900 text-center rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
