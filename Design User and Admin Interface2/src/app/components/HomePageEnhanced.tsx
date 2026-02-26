import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { MapPin, Hotel, Plane, Star, TrendingDown, Search, Users, Award, Calendar, ArrowRight, Shield, HeadphonesIcon, CheckCircle } from "lucide-react";
import { motion } from "motion/react";
import { useState, useEffect } from "react";

interface HomePageEnhancedProps {
  onNavigate: (page: string) => void;
}

export function HomePageEnhanced({ onNavigate }: HomePageEnhancedProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1542815871-b8e4b3253424?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5zZXQlMjBiZWFjaCUyMHZhY2F0aW9ufGVufDF8fHx8MTc2Nzg2NzM0N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Discover Vietnam",
      subtitle: "Amazing travel experiences at the best prices",
    },
    {
      image: "https://images.unsplash.com/photo-1619717823034-0f5878db088c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBhZHZlbnR1cmUlMjBuYXR1cmV8ZW58MXx8fHwxNzY3ODYzNjEwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "New Adventures",
      subtitle: "Explore extraordinary destinations you've never seen before",
    },
    {
      image: "https://images.unsplash.com/photo-1558117338-aa433feb1c62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwcmVzb3J0fGVufDF8fHx8MTc2Nzg0OTEyN3ww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Luxury Getaways",
      subtitle: "World-class 5-star resorts & hotels",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const featuredDestinations = [
    {
      id: 1,
      name: "Nha Trang Beach",
      image: "https://images.unsplash.com/photo-1558117338-aa433feb1c62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwcmVzb3J0fGVufDF8fHx8MTc2Nzg0OTEyN3ww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Paradise of blue sea and white sand",
      price: "$299",
      rating: 4.8,
      reviews: 1234,
    },
    {
      id: 2,
      name: "Sapa - Northwest Mountains",
      image: "https://images.unsplash.com/photo-1767697358940-bca3a4cb76bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBkZXN0aW5hdGlvbiUyMG1vdW50YWlufGVufDF8fHx8MTc2Nzg3MzczNnww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Beautiful terraced rice fields",
      price: "$389",
      rating: 4.9,
      reviews: 987,
    },
    {
      id: 3,
      name: "Hoi An Ancient Town",
      image: "https://images.unsplash.com/photo-1706186839147-0d708602587b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3VyaXN0JTIwbGFuZG1hcmslMjBjaXR5fGVufDF8fHx8MTc2Nzg3MzczN3ww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "UNESCO World Heritage Site",
      price: "$349",
      rating: 4.8,
      reviews: 856,
    },
    {
      id: 4,
      name: "Ha Long Bay",
      image: "https://images.unsplash.com/photo-1619717823034-0f5878db088c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBhZHZlbnR1cmUlMjBuYXR1cmV8ZW58MXx8fHwxNzY3ODYzNjEwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Natural wonder of the world",
      price: "$429",
      rating: 4.9,
      reviews: 1567,
    },
  ];

  const testimonials = [
    {
      name: "John Smith",
      avatar: "https://ui-avatars.com/api/?name=John+Smith&background=3b82f6&color=fff",
      rating: 5,
      comment: "Excellent service! The Nha Trang trip was unforgettable. Enthusiastic staff, reasonable prices.",
      location: "Ho Chi Minh City",
    },
    {
      name: "Emily Johnson",
      avatar: "https://ui-avatars.com/api/?name=Emily+Johnson&background=ec4899&color=fff",
      rating: 5,
      comment: "Perfect Sapa tour from A-Z. Beautiful homestay views, delicious food. Will come back!",
      location: "Hanoi",
    },
    {
      name: "Michael Brown",
      avatar: "https://ui-avatars.com/api/?name=Michael+Brown&background=10b981&color=fff",
      rating: 4,
      comment: "Quick booking, great prices. Hotel exactly as described. Very satisfied!",
      location: "Da Nang",
    },
  ];

  const whyChooseUs = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Guaranteed Reliability",
      description: "10+ years of experience, trusted by thousands of customers",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "Best Prices",
      description: "Committed to the most competitive prices, money-back guarantee if you find a better deal",
      color: "from-green-500 to-green-600",
    },
    {
      icon: <HeadphonesIcon className="w-12 h-12" />,
      title: "24/7 Support",
      description: "Professional consulting team, ready to serve you anytime, anywhere",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: <CheckCircle className="w-12 h-12" />,
      title: "Easy Booking",
      description: "Simple and fast booking process, completed in just 3 minutes",
      color: "from-orange-500 to-orange-600",
    },
  ];

  const stats = [
    { value: "50,000+", label: "Satisfied Customers", icon: <Users /> },
    { value: "500+", label: "Partner Hotels", icon: <Hotel /> },
    { value: "100+", label: "Travel Tours", icon: <MapPin /> },
    { value: "15+", label: "Awards", icon: <Award /> },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Slider */}
      <div className="relative h-[700px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: currentSlide === index ? 1 : 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
            style={{ pointerEvents: currentSlide === index ? "auto" : "none" }}
          >
            <div
              className="h-full bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('${slide.image}')`,
              }}
            >
              <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center text-white">
                <motion.h1
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-6xl md:text-7xl mb-6 text-center"
                >
                  {slide.title}
                </motion.h1>
                <motion.p
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-2xl md:text-3xl mb-8 text-center"
                >
                  {slide.subtitle}
                </motion.p>
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="flex flex-wrap gap-4 justify-center"
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-6 shadow-2xl"
                    onClick={() => onNavigate("search")}
                  >
                    <Search className="w-5 h-5 mr-2" />
                    Search Trips
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white/20 backdrop-blur-sm text-white border-white hover:bg-white hover:text-gray-900 text-lg px-8 py-6"
                    onClick={() => onNavigate("tourist-spots")}
                  >
                    <MapPin className="w-5 h-5 mr-2" />
                    Explore Destinations
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Slider Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index ? "bg-white w-8" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Quick Search Bar */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="container mx-auto px-4 -mt-20 relative z-20 mb-20"
      >
        <Card className="shadow-2xl">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="text-sm text-gray-600 mb-2 block">Destination</label>
                <select className="w-full p-3 border rounded-lg">
                  <option>Select location</option>
                  <option>Nha Trang</option>
                  <option>Da Nang</option>
                  <option>Sapa</option>
                  <option>Phu Quoc</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-gray-600 mb-2 block">Departure Date</label>
                <input type="date" className="w-full p-3 border rounded-lg" />
              </div>
              <div>
                <label className="text-sm text-gray-600 mb-2 block">Guests</label>
                <select className="w-full p-3 border rounded-lg">
                  <option>2 guests</option>
                  <option>3 guests</option>
                  <option>4 guests</option>
                  <option>5+ guests</option>
                </select>
              </div>
              <div className="flex items-end">
                <Button
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 p-6"
                  onClick={() => onNavigate("search")}
                >
                  <Search className="w-5 h-5 mr-2" />
                  Search
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Why Choose Us */}
      <div className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl mb-4">Why Choose Karnel Travel?</h2>
            <p className="text-gray-600 text-xl">Reasons why you should trust us</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <CardContent className="p-8 text-center">
                    <div className={`bg-gradient-to-br ${item.color} text-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transform hover:rotate-12 transition-transform`}>
                      {item.icon}
                    </div>
                    <h3 className="text-2xl mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Counter */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center text-white"
              >
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-4xl md:text-5xl mb-2">{stat.value}</div>
                <p className="text-white/90">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Destinations */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-between items-center mb-12"
          >
            <div>
              <h2 className="text-5xl mb-2">Featured Destinations</h2>
              <p className="text-gray-600 text-lg">Most popular destinations</p>
            </div>
            <Button
              variant="outline"
              size="lg"
              onClick={() => onNavigate("tourist-spots")}
              className="hidden md:flex"
            >
              View All
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredDestinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-full flex items-center gap-1 shadow-lg">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm">{destination.rating}</span>
                      <span className="text-xs text-gray-500">({destination.reviews})</span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl mb-2">{destination.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{destination.description}</p>
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-gray-500 text-sm">From</span>
                        <p className="text-blue-600 text-lg">{destination.price}</p>
                      </div>
                      <Button className="bg-gradient-to-r from-blue-600 to-purple-600">
                        Book Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Special Offers */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <TrendingDown className="w-10 h-10 text-red-600" />
              <h2 className="text-5xl">Special Offers</h2>
            </div>
            <p className="text-gray-600 text-xl">Don't miss out on these amazing deals</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-blue-500 to-blue-700 text-white overflow-hidden relative group hover:shadow-2xl transition-all">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
                <CardContent className="p-8 relative z-10">
                  <div className="text-yellow-300 text-6xl mb-4">30%</div>
                  <h3 className="text-3xl mb-3">Big Discount</h3>
                  <p className="mb-6 text-blue-100">For your first hotel booking</p>
                  <Button variant="secondary" size="lg" className="w-full">
                    Get Offer
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="bg-gradient-to-br from-green-500 to-emerald-700 text-white overflow-hidden relative group hover:shadow-2xl transition-all">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
                <CardContent className="p-8 relative z-10">
                  <Calendar className="w-16 h-16 mb-4" />
                  <h3 className="text-3xl mb-3">Free Tour</h3>
                  <p className="mb-6 text-green-100">When booking 5-day travel package</p>
                  <Button variant="secondary" size="lg" className="w-full">
                    Discover Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="bg-gradient-to-br from-orange-500 to-red-600 text-white overflow-hidden relative group hover:shadow-2xl transition-all">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
                <CardContent className="p-8 relative z-10">
                  <Award className="w-16 h-16 mb-4" />
                  <h3 className="text-3xl mb-3">Reward Points</h3>
                  <p className="mb-6 text-orange-100">Redeem exciting gifts on every trip</p>
                  <Button variant="secondary" size="lg" className="w-full">
                    Join Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 text-xl">Real experiences from our customers</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <CardContent className="p-8">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < testimonial.rating ? "text-yellow-500 fill-current" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 italic">"{testimonial.comment}"</p>
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full"
                      />
                      <div>
                        <h4 className="text-lg">{testimonial.name}</h4>
                        <p className="text-gray-500 text-sm">{testimonial.location}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button
              size="lg"
              variant="outline"
              onClick={() => onNavigate("feedback")}
            >
              View More Reviews
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-5xl mb-4">Subscribe to Newsletter</h2>
            <p className="text-xl mb-8 text-white/90">
              Get information about new tours, special offers and travel tips
            </p>
            <div className="max-w-2xl mx-auto flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email..."
                className="flex-1 px-6 py-4 rounded-full text-gray-800 text-lg"
              />
              <Button size="lg" variant="secondary" className="px-8 py-4 rounded-full text-lg">
                Subscribe Now
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}