import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Search, MapPin, Calendar, Users, Star, ChevronRight } from "lucide-react";
import { useState } from "react";

interface SearchPageProps {
  onNavigate: (page: string) => void;
}

export function SearchPage({ onNavigate }: SearchPageProps) {
  const [searchResults] = useState([
    {
      id: 1,
      name: "Vinpearl Resort & Spa Nha Trang",
      type: "Resort",
      location: "Nha Trang, Khánh Hòa",
      price: "3.500.000",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1558117338-aa433feb1c62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwcmVzb3J0fGVufDF8fHx8MTc2Nzg0OTEyN3ww&ixlib=rb-4.1.0&q=80&w=1080",
      amenities: ["Bể bơi", "Spa", "Nhà hàng", "Bãi biển riêng"],
      available: 12,
    },
    {
      id: 2,
      name: "Intercon Hotel & Resort",
      type: "Khách sạn",
      location: "Đà Nẵng",
      price: "2.800.000",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGxvYmJ5fGVufDF8fHx8MTc2NzgzMzg0Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      amenities: ["Gym", "Bar", "Wifi miễn phí", "Phòng họp"],
      available: 8,
    },
    {
      id: 3,
      name: "Sapa Luxury Homestay",
      type: "Homestay",
      location: "Sapa, Lào Cai",
      price: "1.200.000",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1765775635143-6462630748ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3RlbCUyMHJvb218ZW58MXx8fHwxNzY3ODY5MTY4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      amenities: ["View núi", "Bữa sáng", "Tour guide", "Xe đưa đón"],
      available: 5,
    },
  ]);

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Search Form */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl mb-6 flex items-center gap-2">
              <Search className="w-6 h-6 text-blue-600" />
              Tìm kiếm chuyến đi của bạn
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              <div>
                <Label htmlFor="destination">Điểm đến</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <Input
                    id="destination"
                    placeholder="Nhập địa điểm..."
                    className="pl-10"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="checkin">Ngày nhận phòng</Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <Input
                    id="checkin"
                    type="date"
                    className="pl-10"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="checkout">Ngày trả phòng</Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <Input
                    id="checkout"
                    type="date"
                    className="pl-10"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="guests">Số khách</Label>
                <div className="relative">
                  <Users className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <Input
                    id="guests"
                    type="number"
                    placeholder="2"
                    className="pl-10"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="type">Loại hình</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn loại hình" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hotel">Khách sạn</SelectItem>
                    <SelectItem value="resort">Resort</SelectItem>
                    <SelectItem value="homestay">Homestay</SelectItem>
                    <SelectItem value="villa">Villa</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="price">Mức giá</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn mức giá" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Dưới 1 triệu</SelectItem>
                    <SelectItem value="2">1-3 triệu</SelectItem>
                    <SelectItem value="3">3-5 triệu</SelectItem>
                    <SelectItem value="4">Trên 5 triệu</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="rating">Đánh giá</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn đánh giá" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5">5 sao</SelectItem>
                    <SelectItem value="4">4 sao trở lên</SelectItem>
                    <SelectItem value="3">3 sao trở lên</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex gap-4 mt-6">
              <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                <Search className="w-4 h-4 mr-2" />
                Tìm kiếm
              </Button>
              <Button
                variant="outline"
                onClick={() => onNavigate("advanced-search")}
              >
                Tìm kiếm nâng cao
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Search Results */}
        <div className="mb-6">
          <h3 className="text-xl text-gray-800">
            Tìm thấy {searchResults.length} kết quả
          </h3>
        </div>

        <div className="space-y-4">
          {searchResults.map((result) => (
            <Card
              key={result.id}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3">
                  <img
                    src={result.image}
                    alt={result.name}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <CardContent className="md:w-2/3 p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl mb-2">{result.name}</h3>
                      <p className="text-gray-600 flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {result.location}
                      </p>
                    </div>
                    <div className="bg-blue-600 text-white px-3 py-2 rounded flex items-center gap-1">
                      <Star className="w-4 h-4 fill-current" />
                      <span>{result.rating}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {result.amenities.map((amenity, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 px-3 py-1 rounded text-sm"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-600">Giá mỗi đêm từ</p>
                      <p className="text-2xl text-blue-600">
                        {result.price}đ
                      </p>
                      <p className="text-sm text-green-600">
                        Còn {result.available} phòng trống
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline">Xem chi tiết</Button>
                      <Button className="bg-blue-600 hover:bg-blue-700">
                        Đặt ngay
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
