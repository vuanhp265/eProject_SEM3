import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { MapPin, Hotel, Plane, Star, TrendingDown, Search } from "lucide-react";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const featuredDestinations = [
    {
      id: 1,
      name: "Bãi biển Nha Trang",
      image: "https://images.unsplash.com/photo-1558117338-aa433feb1c62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwcmVzb3J0fGVufDF8fHx8MTc2Nzg0OTEyN3ww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Thiên đường biển xanh cát trắng",
      price: "2.500.000đ",
    },
    {
      id: 2,
      name: "Sapa - Núi rừng Tây Bắc",
      image: "https://images.unsplash.com/photo-1767697358940-bca3a4cb76bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBkZXN0aW5hdGlvbiUyMG1vdW50YWlufGVufDF8fHx8MTc2Nzg3MzczNnww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Ruộng bậc thang tuyệt đẹp",
      price: "3.200.000đ",
    },
    {
      id: 3,
      name: "Phố cổ Hội An",
      image: "https://images.unsplash.com/photo-1706186839147-0d708602587b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3VyaXN0JTIwbGFuZG1hcmslMjBjaXR5fGVufDF8fHx8MTc2Nzg3MzczN3ww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Di sản văn hóa thế giới",
      price: "2.800.000đ",
    },
    {
      id: 4,
      name: "Vịnh Hạ Long",
      image: "https://images.unsplash.com/photo-1619717823034-0f5878db088c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBhZHZlbnR1cmUlMjBuYXR1cmV8ZW58MXx8fHwxNzY3ODYzNjEwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Kỳ quan thiên nhiên thế giới",
      price: "3.500.000đ",
    },
  ];

  const services = [
    {
      icon: <Hotel className="w-12 h-12 text-blue-600" />,
      title: "Khách sạn & Resort",
      description: "Hơn 500+ khách sạn chất lượng cao",
    },
    {
      icon: <Plane className="w-12 h-12 text-blue-600" />,
      title: "Vé máy bay",
      description: "Giá tốt nhất từ các hãng hàng không",
    },
    {
      icon: <MapPin className="w-12 h-12 text-blue-600" />,
      title: "Tour du lịch",
      description: "100+ tour trong nước và quốc tế",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1542815871-b8e4b3253424?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5zZXQlMjBiZWFjaCUyMHZhY2F0aW9ufGVufDF8fHx8MTc2Nzg2NzM0N3ww&ixlib=rb-4.1.0&q=80&w=1080')`,
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-5xl md:text-6xl mb-4 text-center">
            Khám Phá Việt Nam Cùng Karnel
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-center">
            Trải nghiệm du lịch tuyệt vời với giá tốt nhất
          </p>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6"
            onClick={() => onNavigate("search")}
          >
            <Search className="w-5 h-5 mr-2" />
            Tìm kiếm chuyến đi
          </Button>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl text-center mb-12 text-gray-800">
          Dịch vụ của chúng tôi
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow cursor-pointer"
            >
              <CardContent className="pt-8">
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Featured Destinations */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl text-gray-800">Điểm đến nổi bật</h2>
            <Button
              variant="outline"
              onClick={() => onNavigate("tourist-spots")}
            >
              Xem tất cả
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDestinations.map((destination) => (
              <Card
                key={destination.id}
                className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
              >
                <div className="relative h-48">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-yellow-400 text-white px-2 py-1 rounded flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm">4.8</span>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg mb-2">{destination.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {destination.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-600">
                      Từ {destination.price}
                    </span>
                    <Button size="sm">Đặt ngay</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Special Offers */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-center gap-2 mb-12">
          <TrendingDown className="w-8 h-8 text-red-600" />
          <h2 className="text-3xl text-gray-800">Ưu đãi đặc biệt</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardContent className="p-6">
              <h3 className="text-2xl mb-2">Giảm 30%</h3>
              <p className="mb-4">Cho booking khách sạn đầu tiên</p>
              <Button variant="secondary">Nhận ưu đãi</Button>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
            <CardContent className="p-6">
              <h3 className="text-2xl mb-2">Tặng tour miễn phí</h3>
              <p className="mb-4">Khi đặt combo du lịch 5 ngày</p>
              <Button variant="secondary">Khám phá ngay</Button>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
            <CardContent className="p-6">
              <h3 className="text-2xl mb-2">Tích điểm thưởng</h3>
              <p className="mb-4">Đổi quà hấp dẫn mỗi chuyến đi</p>
              <Button variant="secondary">Tham gia ngay</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
