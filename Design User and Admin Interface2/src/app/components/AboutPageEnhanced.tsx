import { Card, CardContent } from "./ui/card";
import { Building2, Users, Award, Target, Rocket, Heart, Globe, TrendingUp } from "lucide-react";
import { motion } from "motion/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export function AboutPageEnhanced() {
  const achievements = [
    {
      icon: <Building2 className="w-12 h-12" />,
      value: "500+",
      label: "Partner Hotels",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Users className="w-12 h-12" />,
      value: "50K+",
      label: "Satisfied Customers",
      color: "from-green-500 to-green-600",
    },
    {
      icon: <Award className="w-12 h-12" />,
      value: "15+",
      label: "Awards",
      color: "from-yellow-500 to-yellow-600",
    },
    {
      icon: <Target className="w-12 h-12" />,
      value: "10+",
      label: "Years of Experience",
      color: "from-purple-500 to-purple-600",
    },
  ];

  const coreValues = [
    {
      icon: <Heart className="w-16 h-16" />,
      title: "Dedication",
      description: "Putting customer satisfaction first, serving with all our passion",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: <Award className="w-16 h-16" />,
      title: "Quality",
      description: "Committed to providing the highest quality services and products",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Rocket className="w-16 h-16" />,
      title: "Innovation",
      description: "Constantly creating and improving to bring the best experience",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: <Globe className="w-16 h-16" />,
      title: "Responsibility",
      description: "Developing sustainable tourism, protecting the environment and local culture",
      color: "from-green-500 to-emerald-500",
    },
  ];

  const timeline = [
    {
      year: "2015",
      title: "Company Founded",
      description: "Karnel Travel Guide was established with 5 founding members",
    },
    {
      year: "2017",
      title: "Network Expansion",
      description: "Partnered with over 100 hotels and resorts nationwide",
    },
    {
      year: "2019",
      title: "First Award",
      description: "Received 'Most Reputable Travel Company of the Year' award from the Tourism Association",
    },
    {
      year: "2021",
      title: "Digital Transformation",
      description: "Launched online booking platform and mobile application",
    },
    {
      year: "2024",
      title: "International Expansion",
      description: "Developed international tours and partnerships with global partners",
    },
    {
      year: "2026",
      title: "Present",
      description: "Serving over 50,000 customers annually with 500+ destinations",
    },
  ];

  const team = [
    {
      name: "John Anderson",
      position: "CEO & Founder",
      image: "https://ui-avatars.com/api/?name=John+Anderson&size=200&background=3b82f6&color=fff",
      description: "15 years of experience in the tourism industry",
    },
    {
      name: "Sarah Miller",
      position: "Chief Operating Officer",
      image: "https://ui-avatars.com/api/?name=Sarah+Miller&size=200&background=ec4899&color=fff",
      description: "Expert in tour management and logistics",
    },
    {
      name: "David Wilson",
      position: "Marketing Director",
      image: "https://ui-avatars.com/api/?name=David+Wilson&size=200&background=10b981&color=fff",
      description: "10 years of digital marketing experience",
    },
    {
      name: "Emily Davis",
      position: "Customer Experience Director",
      image: "https://ui-avatars.com/api/?name=Emily+Davis&size=200&background=f59e0b&color=fff",
      description: "Customer experience specialist",
    },
  ];

  const services = [
    {
      title: "Transportation",
      image: "https://images.unsplash.com/photo-1558117338-aa433feb1c62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwcmVzb3J0fGVufDF8fHx8MTc2Nzg0OTEyN3ww&ixlib=rb-4.1.0&q=80&w=600",
      description: "Airport transfer services, car rentals, and flight tickets at great prices",
      features: ["New vehicles", "Professional drivers", "Competitive prices", "24/7 online booking"],
    },
    {
      title: "Accommodation",
      image: "https://images.unsplash.com/photo-1765775635143-6462630748ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3RlbCUyMHJvb218ZW58MXx8fHwxNzY3ODY5MTY4fDA&ixlib=rb-4.1.0&q=80&w=600",
      description: "Premium hotels, resorts, and homestays with full amenities",
      features: ["500+ hotels", "Best prices", "Real reviews", "24/7 support"],
    },
    {
      title: "Tour Packages",
      image: "https://images.unsplash.com/photo-1619717823034-0f5878db088c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBhZHZlbnR1cmUlMjBuYXR1cmV8ZW58MXx8fHwxNzY3ODYzNjEwfDA&ixlib=rb-4.1.0&q=80&w=600",
      description: "All-inclusive tours, independent tours, custom tours",
      features: ["100+ tours", "Professional guides", "Flexible itinerary", "Travel insurance"],
    },
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section with Animation */}
      <div className="relative h-[500px] overflow-hidden">
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGxvYmJ5fGVufDF8fHx8MTc2NzgzMzg0Nnww&ixlib=rb-4.1.0&q=80&w=1080')`,
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center text-white">
            <div className="text-center">
              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-6xl mb-4"
              >
                About Karnel Travel Guide
              </motion.h1>
              <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-2xl"
              >
                Your trusted travel partner since 2015
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Achievements */}
      <div className="container mx-auto px-4 -mt-20 relative z-10 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className={`bg-gradient-to-br ${item.color} text-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    {item.icon}
                  </div>
                  <div className="text-4xl mb-2">{item.value}</div>
                  <p className="text-gray-600">{item.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Story Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Story
            </h2>
            <p className="text-gray-700 text-lg mb-4 leading-relaxed">
              Karnel Travel Guide was founded in 2015 with the mission of providing the best travel 
              experiences for customers. From a small company with 5 employees, we have grown to become 
              one of the most reputable travel companies in Vietnam.
            </p>
            <p className="text-gray-700 text-lg mb-4 leading-relaxed">
              With over 10 years of experience, we are proud to have served tens of thousands of customers, 
              creating memorable moments and delivering absolute satisfaction. Our team consists of experienced 
              professionals who are passionate and always ready to support you 24/7.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              We continue to innovate and improve our services to meet the increasingly high demands of 
              customers, while committing to sustainable tourism development, protecting the environment 
              and local culture.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1558117338-aa433feb1c62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwcmVzb3J0fGVufDF8fHx8MTc2Nzg0OTEyN3ww&ixlib=rb-4.1.0&q=80&w=400"
                alt="Travel 1"
                className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
              />
              <img
                src="https://images.unsplash.com/photo-1767697358940-bca3a4cb76bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBkZXN0aW5hdGlvbiUyMG1vdW50YWlufGVufDF8fHx8MTc2Nzg3MzczNnww&ixlib=rb-4.1.0&q=80&w=400"
                alt="Travel 2"
                className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="space-y-4 mt-8">
              <img
                src="https://images.unsplash.com/photo-1706186839147-0d708602587b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3VyaXN0JTIwbGFuZG1hcmslMjBjaXR5fGVufDF8fHx8MTc2Nzg3MzczN3ww&ixlib=rb-4.1.0&q=80&w=400"
                alt="Travel 3"
                className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
              />
              <img
                src="https://images.unsplash.com/photo-1619717823034-0f5878db088c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBhZHZlbnR1cmUlMjBuYXR1cmV8ZW58MXx8fHwxNzY3ODYzNjEwfDA&ixlib=rb-4.1.0&q=80&w=400"
                alt="Travel 4"
                className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl mb-4">Core Values</h2>
            <p className="text-gray-600 text-xl">Values that guide our operations</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <CardContent className="p-8 text-center">
                    <div className={`bg-gradient-to-br ${value.color} text-white w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-6 transform hover:rotate-12 transition-transform`}>
                      {value.icon}
                    </div>
                    <h3 className="text-2xl mb-4">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Services with Tabs */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl mb-4">Our Services</h2>
          <p className="text-gray-600 text-xl">Diverse services for all your travel needs</p>
        </motion.div>

        <Tabs defaultValue="transport" className="w-full">
          <TabsList className="grid w-full md:w-2/3 mx-auto grid-cols-3 mb-12">
            <TabsTrigger value="transport" className="text-lg">Transportation</TabsTrigger>
            <TabsTrigger value="accommodation" className="text-lg">Accommodation</TabsTrigger>
            <TabsTrigger value="tours" className="text-lg">Tour Packages</TabsTrigger>
          </TabsList>

          {services.map((service, index) => (
            <TabsContent key={index} value={index === 0 ? "transport" : index === 1 ? "accommodation" : "tours"}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-3xl shadow-2xl w-full"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-4xl mb-6">{service.title}</h3>
                  <p className="text-gray-700 text-lg mb-6 leading-relaxed">{service.description}</p>
                  <div className="grid grid-cols-2 gap-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* Timeline */}
      <div className="bg-gradient-to-b from-white to-gray-50 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl mb-4">Our Journey</h2>
            <p className="text-gray-600 text-xl">Important milestones in Karnel's history</p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500 hidden lg:block"></div>
            
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center mb-12 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
              >
                <div className="w-full lg:w-5/12">
                  <Card className="hover:shadow-2xl transition-shadow">
                    <CardContent className="p-6">
                      <div className="text-3xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-2xl mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="hidden lg:flex w-2/12 justify-center">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg"></div>
                </div>
                <div className="hidden lg:block w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-4">Leadership Team</h2>
          <p className="text-gray-600 text-xl">The people behind Karnel's success</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden group">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl mb-1">{member.name}</h3>
                  <p className="text-blue-600 mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-white/10 backdrop-blur-lg border-white/20 text-white">
                <CardContent className="p-10">
                  <TrendingUp className="w-16 h-16 mb-6" />
                  <h3 className="text-3xl mb-4">Vision</h3>
                  <p className="text-lg leading-relaxed text-white/90">
                    To become Vietnam's leading travel company, providing international-class travel 
                    experiences for customers, contributing to sustainable tourism development and enhancing 
                    Vietnam's tourism position on the world map.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-white/10 backdrop-blur-lg border-white/20 text-white">
                <CardContent className="p-10">
                  <Target className="w-16 h-16 mb-6" />
                  <h3 className="text-3xl mb-4">Mission</h3>
                  <p className="text-lg leading-relaxed text-white/90">
                    Provide high-quality travel services, create memorable moments for customers through 
                    professionalism, dedication and continuous innovation. We are committed to delivering 
                    the best value and exceptional experiences in every journey.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
