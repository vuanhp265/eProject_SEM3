import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Star, MapPin, Wifi, Coffee, Dumbbell, UtensilsCrossed } from "lucide-react";

interface HotelsPageProps {
  onNavigate: (page: string, data?: any) => void;  // cập nhật để nhận data optional
}

export function HotelsPage({ onNavigate }: HotelsPageProps) {
  const hotels = [
    {
      id: 1,
      name: "Vinpearl Resort & Spa Nha Trang",
      location: "Nha Trang, Khánh Hòa",
      type: "Resort 5 sao",
      price: "3.500.000",
      rating: 4.8,
      reviews: 1250,
      image: "https://images.unsplash.com/photo-1558117338-aa433feb1c62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwcmVzb3J0fGVufDF8fHx8MTc2Nzg0OTEyN3ww&ixlib=rb-4.1.0&q=80&w=1080",
      amenities: [
        { icon: <Wifi className="w-4 h-4" />, label: "Wifi miễn phí" },
        { icon: <Coffee className="w-4 h-4" />, label: "Bữa sáng" },
        { icon: <Dumbbell className="w-4 h-4" />, label: "Gym & Spa" },
        { icon: <UtensilsCrossed className="w-4 h-4" />, label: "Nhà hàng" },
      ],
      discount: "Giảm 20%",
    },
    {
      id: 2,
      name: "InterContinental Đà Nẵng",
      location: "Đà Nẵng",
      type: "Khách sạn 5 sao",
      price: "2.800.000",
      rating: 4.9,
      reviews: 980,
      image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGxvYmJ5fGVufDF8fHx8MTc2NzgzMzg0Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      amenities: [
        { icon: <Wifi className="w-4 h-4" />, label: "Wifi miễn phí" },
        { icon: <Coffee className="w-4 h-4" />, label: "Bữa sáng" },
        { icon: <Dumbbell className="w-4 h-4" />, label: "Gym" },
        { icon: <UtensilsCrossed className="w-4 h-4" />, label: "Nhà hàng" },
      ],
    },
    {
      id: 3,
      name: "Sapa Luxury Homestay",
      location: "Sapa, Lào Cai",
      type: "Homestay",
      price: "1.200.000",
      rating: 4.7,
      reviews: 456,
      image: "https://images.unsplash.com/photo-1765775635143-6462630748ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3RlbCUyMHJvb218ZW58MXx8fHwxNzY3ODY5MTY4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      amenities: [
        { icon: <Wifi className="w-4 h-4" />, label: "Wifi miễn phí" },
        { icon: <Coffee className="w-4 h-4" />, label: "Bữa sáng" },
      ],
      discount: "Mới khai trương",
    },
  ];

  const restaurants = [
    {
      id: 1,
      name: "Nhà hàng Hải sản Biển Xanh",
      location: "Nha Trang",
      cuisine: "Hải sản tươi sống",
      price: "500.000",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1667388968964-4aa652df0a9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZm9vZCUyMGRpbmluZ3xlbnwxfHx8fDE3Njc3OTAzOTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 2,
      name: "Cao Lầu Hội An",
      location: "Hội An",
      cuisine: "Đặc sản Hội An",
      price: "200.000",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1667388968964-4aa652df0a9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZm9vZCUyMGRpbmluZ3xlbnwxfHx8fDE3Njc3OTAzOTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 3,
      name: "BBQ Sapa",
      location: "Sapa",
      cuisine: "Nướng truyền thống",
      price: "350.000",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1667388968964-4aa652df0a9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZm9vZCUyMGRpbmluZ3xlbnwxfHx8fDE3Njc3OTAzOTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hotels Section */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl mb-2">Khách sạn & Resort</h1>
              <p className="text-gray-600">Lưu trú chất lượng cao với giá tốt nhất</p>
            </div>
            <Button onClick={() => onNavigate("search")}>Tìm kiếm nâng cao</Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {hotels.map((hotel) => (
              <Card
                key={hotel.id}
                className="overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-56">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover"
                  />
                  {hotel.discount && (
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
                      {hotel.discount}
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg">
                    <div className="text-sm text-gray-600">Từ</div>
                    <div className="text-lg text-blue-600">{hotel.price}đ/đêm</div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="mb-3">
                    <h3 className="text-xl mb-1">{hotel.name}</h3>
                    <p className="text-sm text-gray-600 flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {hotel.location}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-600">{hotel.type}</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm">{hotel.rating}</span>
                      <span className="text-xs text-gray-500">({hotel.reviews})</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {hotel.amenities.map((amenity, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-xs text-gray-600"
                      >
                        {amenity.icon}
                        <span>{amenity.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1">
                      Chi tiết
                    </Button>
                    <Button 
                      className="flex-1 bg-blue-600 hover:bg-blue-700"
                      onClick={() => onNavigate("booking-info", {
                        type: "hotel",
                        name: hotel.name,
                        location: hotel.location,
                        price: hotel.price,
                        image: hotel.image,
                      })}
                    >
                      Đặt ngay
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Restaurants Section */}
        <div>
          <div className="mb-8">
            <h2 className="text-3xl mb-2">Nhà hàng đề xuất</h2>
            <p className="text-gray-600">Thưởng thức ẩm thực địa phương</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {restaurants.map((restaurant) => (
              <Card
                key={restaurant.id}
                className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg">{restaurant.name}</h3>
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      {restaurant.rating}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-2 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {restaurant.location}
                  </p>
                  <p className="text-sm text-gray-600 mb-3">{restaurant.cuisine}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-600">~{restaurant.price}đ/người</span>
                    <Button 
                      size="sm"
                      onClick={() => onNavigate("booking-info", {
                        type: "restaurant",
                        name: restaurant.name,
                        location: restaurant.location,
                        price: restaurant.price,
                        image: restaurant.image,
                      })}
                    >
                      Đặt bàn
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Special Offers */}
        <Card className="mt-12 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl mb-3">Ưu đãi đặc biệt</h3>
            <p className="text-lg mb-4 text-orange-100">
              Đặt phòng ngay hôm nay để nhận ưu đãi lên đến 30%
            </p>
            <Button size="lg" variant="secondary" onClick={() => onNavigate("search")}>
              Khám phá ngay
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}