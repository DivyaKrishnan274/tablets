
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Moon, Sparkles, Heart, Eye, Clock } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Tarot Card Reading",
      description: "Gain insight into your past, present, and future through the ancient art of tarot.",
      price: "From $45",
      duration: "45 minutes",
      icon: Star,
      features: ["3-card spread", "Celtic cross", "Love reading", "Career guidance"],
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Crystal Healing Session",
      description: "Align your chakras and restore balance with personalized crystal therapy.",
      price: "From $85",
      duration: "60 minutes",
      icon: Sparkles,
      features: ["Chakra alignment", "Energy cleansing", "Crystal selection", "Aftercare guide"],
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Astrology Reading",
      description: "Discover your cosmic blueprint and understand your life's purpose.",
      price: "From $95",
      duration: "75 minutes",
      icon: Moon,
      features: ["Birth chart analysis", "Planetary influences", "Future predictions", "Compatibility"],
      image: "https://images.unsplash.com/photo-1439886183900-e79ec0057170?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      title: "Spiritual Counseling",
      description: "Find guidance and clarity through compassionate spiritual mentorship.",
      price: "From $120",
      duration: "90 minutes",
      icon: Heart,
      features: ["Life purpose clarity", "Spiritual blocks", "Personal growth", "Meditation guidance"],
      image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      title: "Psychic Reading",
      description: "Connect with your intuition and receive messages from the spiritual realm.",
      price: "From $65",
      duration: "50 minutes",
      icon: Eye,
      features: ["Clairvoyant insights", "Spirit communication", "Dream interpretation", "Psychic protection"],
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=300&fit=crop"
    },
    {
      id: 6,
      title: "Past Life Regression",
      description: "Explore your soul's journey through time and understand karmic patterns.",
      price: "From $150",
      duration: "2 hours",
      icon: Clock,
      features: ["Hypnotic regression", "Karmic healing", "Soul purpose", "Past life memories"],
      image: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-mystical font-bold text-gradient mb-6">
            Spiritual Services
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Professional guidance to help you navigate your spiritual journey with clarity and purpose
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="cosmic-card hover:glow-effect transition-all duration-300 group">
              <CardContent className="p-0">
                {/* Service Image */}
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cosmic-dark/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <service.icon className="h-8 w-8 text-cosmic-gold animate-glow" />
                  </div>
                </div>

                {/* Service Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-mystical font-semibold text-xl text-white group-hover:text-cosmic-gold transition-colors">
                      {service.title}
                    </h3>
                    <span className="text-cosmic-gold font-bold">
                      {service.price}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-white/60 mb-3">
                    <Clock className="h-4 w-4" />
                    <span>{service.duration}</span>
                  </div>

                  <p className="text-white/80 mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cosmic-gold mb-2">Includes:</h4>
                    <ul className="text-sm text-white/70 space-y-1">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <Star className="h-3 w-3 text-cosmic-gold fill-cosmic-gold" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Book Button */}
                  <Button className="w-full bg-gold-gradient text-cosmic-dark hover:shadow-lg hover:shadow-cosmic-gold/30 transition-all duration-300">
                    Book Session
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 p-8 cosmic-card">
          <h3 className="text-2xl font-mystical font-bold text-gradient mb-4">
            Not Sure Which Service is Right for You?
          </h3>
          <p className="text-white/80 mb-6">
            Book a free 15-minute consultation and let us guide you to the perfect spiritual experience
          </p>
          <Button 
            size="lg" 
            className="bg-gold-gradient text-cosmic-dark hover:shadow-xl hover:shadow-cosmic-gold/40 transition-all duration-300"
          >
            Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
