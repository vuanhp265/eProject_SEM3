import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { MapPin, Star, Camera, Clock } from "lucide-react";

interface TouristSpotsPageProps {
  onNavigate: (page: string) => void;
}

export function TouristSpotsPage({ onNavigate }: TouristSpotsPageProps) {
  const spots = [
    {
      id: 1,
      name: "Vịnh Hạ Long",
      location: "Quảng Ninh",
      description: "Di sản thiên nhiên thế giới với hơn 1600 hòn đảo lớn nhỏ",
      image: "https://images.unsplash.com/photo-1619717823034-0f5878db088c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBhZHZlbnR1cmUlMjBuYXR1cmV8ZW58MXx8fHwxNzY3ODYzNjEwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.9,
      duration: "2-3 ngày",
      highlights: ["Du thuyền sang trọng", "Hang động tuyệt đẹp", "Làng chài truyền thống"],
    },
    {
      id: 2,
      name: "Phố cổ Hội An",
      location: "Quảng Nam",
      description: "Thành phố cổ với kiến trúc độc đáo, được UNESCO công nhận",
      image: "https://images.unsplash.com/photo-1706186839147-0d708602587b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3VyaXN0JTIwbGFuZG1hcmslMjBjaXR5fGVufDF8fHx8MTc2Nzg3MzczN3ww&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.8,
      duration: "1-2 ngày",
      highlights: ["Phố cổ lãng mạn", "Đèn lồng rực rỡ", "Ẩm thực đặc sắc"],
    },
    {
      id: 3,
      name: "Bãi biển Nha Trang",
      location: "Khánh Hòa",
      description: "Bãi biển đẹp nhất Việt Nam với nước biển trong xanh",
      image: "https://images.unsplash.com/photo-1558117338-aa433feb1c62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwcmVzb3J0fGVufDF8fHx8MTc2Nzg0OTEyN3ww&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.7,
      duration: "3-4 ngày",
      highlights: ["Bãi biển tuyệt đẹp", "Lặn ngắm san hô", "Khu vui chơi giải trí"],
    },
    {
      id: 4,
      name: "Sapa - Lào Cai",
      location: "Lào Cai",
      description: "Thị trấn miền núi với ruộng bậc thang tuyệt đẹp",
      image: "https://images.unsplash.com/photo-1767697358940-bca3a4cb76bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBkZXN0aW5hdGlvbiUyMG1vdW50YWlufGVufDF8fHx8MTc2Nzg3MzczNnww&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.8,
      duration: "2-3 ngày",
      highlights: ["Ruộng bậc thang", "Núi Fansipan", "Văn hóa dân tộc"],
    },
    {
      id: 5,
      name: "Phú Quốc",
      location: "Kiên Giang",
      description: "Đảo ngọc với bãi biển hoang sơ và rừng nguyên sinh",
      image: "https://images.unsplash.com/photo-1542815871-b8e4b3253424?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5zZXQlMjBiZWFjaCUyMHZhY2F0aW9ufGVufDF8fHx8MTc2Nzg2NzM0N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.9,
      duration: "3-5 ngày",
      highlights: ["Bãi biển đẹp nhất", "Lặn biển", "Safari Phú Quốc"],
    },
    {
      id: 6,
      name: "Đà Lạt",
      location: "Lâm Đồng",
      description: "Thành phố ngàn hoa với khí hậu mát mẻ quanh năm",
      image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGxvYmJ5fGVufDF8fHx8MTc2NzgzMzg0Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.7,
      duration: "2-3 ngày",
      highlights: ["Thác Datanla", "Làng hoa Vạn Thành", "Hồ Xuân Hương"],
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl mb-4">Địa điểm du lịch nổi bật</h1>
          <p className="text-gray-600 text-lg">
            Khám phá những điểm đến tuyệt vời nhất Việt Nam
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {spots.map((spot) => (
            <Card
              key={spot.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden group">
                <img
                  src={spot.image}
                  alt={spot.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm">{spot.rating}</span>
                </div>
                <div className="absolute bottom-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {spot.duration}
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl">{spot.name}</h3>
                  <Camera className="w-5 h-5 text-gray-400" />
                </div>
                <div className="flex items-center gap-2 text-gray-600 mb-3">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{spot.location}</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  {spot.description}
                </p>
                <div className="mb-4">
                  <h4 className="text-sm mb-2 text-gray-700">Điểm nổi bật:</h4>
                  <div className="flex flex-wrap gap-2">
                    {spot.highlights.map((highlight, index) => (
                      <span
                        key={index}
                        className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => onNavigate("search")}
                  >
                    Tìm khách sạn
                  </Button>
                  <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                    Đặt tour
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <Card className="mt-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl mb-4">Không tìm thấy địa điểm bạn muốn?</h2>
            <p className="text-xl mb-6 text-blue-100">
              Liên hệ với chúng tôi để được tư vấn tour du lịch phù hợp
            </p>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => onNavigate("contact")}
            >
              Liên hệ ngay
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
