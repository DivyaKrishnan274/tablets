
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Heart, Eye } from 'lucide-react';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Mystic Crystal Tarot Deck",
      price: "$49.99",
      originalPrice: "$69.99",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=300&fit=crop",
      rating: 4.9,
      reviews: 127,
      category: "Tarot Cards"
    },
    {
      id: 2,
      name: "Healing Chakra Crystal Set",
      price: "$89.99",
      originalPrice: "$119.99",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
      rating: 4.8,
      reviews: 89,
      category: "Crystals"
    },
    {
      id: 3,
      name: "Ancient Rune Stone Set",
      price: "$34.99",
      originalPrice: "$49.99",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop",
      rating: 4.7,
      reviews: 156,
      category: "Divination"
    },
    {
      id: 4,
      name: "Sage Cleansing Bundle",
      price: "$24.99",
      originalPrice: "$34.99",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=300&fit=crop",
      rating: 4.9,
      reviews: 203,
      category: "Cleansing"
    },
    {
      id: 5,
      name: "Crystal Ball with Stand",
      price: "$149.99",
      originalPrice: "$199.99",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
      rating: 4.6,
      reviews: 74,
      category: "Scrying"
    },
    {
      id: 6,
      name: "Meditation Singing Bowl",
      price: "$79.99",
      originalPrice: "$109.99",
      image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=400&h=300&fit=crop",
      rating: 4.8,
      reviews: 92,
      category: "Meditation"
    }
  ];

  return (
    <section id="products" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-mystical font-bold text-gradient mb-6">
            Sacred Collections
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Discover our curated selection of authentic spiritual tools and sacred artifacts
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="cosmic-card hover:glow-effect transition-all duration-300 group">
              <CardContent className="p-0">
                {/* Product Image */}
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-cosmic-gold text-cosmic-dark px-2 py-1 text-xs font-semibold rounded">
                      {product.category}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 flex gap-2">
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0 bg-white/10 hover:bg-white/20">
                      <Heart className="h-4 w-4 text-white" />
                    </Button>
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0 bg-white/10 hover:bg-white/20">
                      <Eye className="h-4 w-4 text-white" />
                    </Button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="font-semibold text-lg text-white mb-2 group-hover:text-cosmic-gold transition-colors">
                    {product.name}
                  </h3>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? 'text-cosmic-gold fill-cosmic-gold'
                              : 'text-gray-400'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-white/60">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl font-bold text-cosmic-gold">
                      {product.price}
                    </span>
                    <span className="text-sm text-white/50 line-through">
                      {product.originalPrice}
                    </span>
                  </div>

                  {/* Add to Cart Button */}
                  <Button className="w-full bg-gold-gradient text-cosmic-dark hover:shadow-lg hover:shadow-cosmic-gold/30 transition-all duration-300">
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-cosmic-gold text-cosmic-gold hover:bg-cosmic-gold hover:text-cosmic-dark transition-all duration-300"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
