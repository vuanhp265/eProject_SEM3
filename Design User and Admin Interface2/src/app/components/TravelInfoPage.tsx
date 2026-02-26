import { Card, CardContent } from "./ui/card";
import { Plane, Train, Bus, Car, Ship } from "lucide-react";

export function TravelInfoPage() {
  const transports = [
    {
      icon: <Plane className="w-16 h-16 text-blue-600" />,
      name: "Máy bay",
      description: "Vé máy bay giá rẻ từ các hãng hàng không uy tín",
      features: [
        "Vietnam Airlines",
        "VietJet Air",
        "Bamboo Airways",
        "Pacific Airlines",
      ],
      priceRange: "500.000đ - 5.000.000đ",
    },
    {
      icon: <Train className="w-16 h-16 text-green-600" />,
      name: "Tàu hỏa",
      description: "Đặt vé tàu hỏa trực tuyến nhanh chóng, tiện lợi",
      features: [
        "Tàu SE (Thống Nhất)",
        "Tàu SNT (Sài Gòn - Nha Trang)",
        "Tàu SPT (Sài Gòn - Phan Thiết)",
        "Giường nằm, ngồi mềm",
      ],
      priceRange: "200.000đ - 1.500.000đ",
    },
    {
      icon: <Bus className="w-16 h-16 text-orange-600" />,
      name: "Xe khách",
      description: "Xe khách chất lượng cao, giường nằm sang trọng",
      features: [
        "Xe limousine cao cấp",
        "Xe giường nằm",
        "Xe ghế ngồi",
        "Wifi & giải trí",
      ],
      priceRange: "150.000đ - 800.000đ",
    },
    {
      icon: <Car className="w-16 h-16 text-purple-600" />,
      name: "Thuê xe tự lái",
      description: "Dịch vụ cho thuê xe tự lái đa dạng",
      features: [
        "Xe 4 chỗ",
        "Xe 7 chỗ",
        "Xe 16 chỗ",
        "Bảo hiểm đầy đủ",
      ],
      priceRange: "600.000đ - 2.000.000đ/ngày",
    },
    {
      icon: <Ship className="w-16 h-16 text-cyan-600" />,
      name: "Du thuyền",
      description: "Tour du thuyền sang trọng trên vịnh",
      features: [
        "Du thuyền Hạ Long",
        "Du thuyền Nha Trang",
        "Tàu cao tốc đảo",
        "All-inclusive",
      ],
      priceRange: "1.500.000đ - 10.000.000đ",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl mb-4">Thông tin di chuyển</h1>
          <p className="text-gray-600 text-lg">
            Đa dạng phương tiện vận chuyển phục vụ chuyến đi của bạn
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {transports.map((transport, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-shadow cursor-pointer"
            >
              <CardContent className="p-8">
                <div className="flex justify-center mb-4">{transport.icon}</div>
                <h3 className="text-2xl text-center mb-3">{transport.name}</h3>
                <p className="text-gray-600 text-center mb-6">
                  {transport.description}
                </p>
                <div className="space-y-2 mb-6">
                  {transport.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t pt-4">
                  <p className="text-sm text-gray-500 text-center">Giá từ</p>
                  <p className="text-lg text-blue-600 text-center">
                    {transport.priceRange}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Travel Tips */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <h2 className="text-2xl mb-6">Lưu ý khi đặt vé</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg mb-3 text-blue-600">Đặt vé sớm</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Giá vé thường rẻ hơn 20-30% khi đặt trước 30 ngày</li>
                  <li>• Có nhiều lựa chọn về giờ khởi hành</li>
                  <li>• Được ưu tiên chọn chỗ ngồi</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg mb-3 text-green-600">Chính sách hủy vé</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Kiểm tra điều kiện hủy/đổi vé trước khi đặt</li>
                  <li>• Mua thêm bảo hiểm chuyến đi nếu cần</li>
                  <li>• Lưu giữ biên lai và xác nhận đặt vé</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg mb-3 text-orange-600">Giảm giá & Khuyến mãi</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Theo dõi các chương trình khuyến mãi</li>
                  <li>• Đăng ký thành viên để nhận ưu đãi</li>
                  <li>• Đặt combo để tiết kiệm chi phí</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg mb-3 text-purple-600">An toàn & Bảo mật</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Chỉ đặt vé qua website chính thức</li>
                  <li>• Kiểm tra thông tin kỹ trước khi thanh toán</li>
                  <li>• Bảo mật thông tin cá nhân</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
            <CardContent className="p-8 text-center">
              <Plane className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl mb-3">Đặt vé máy bay ngay</h3>
              <p className="mb-4 text-blue-100">
                So sánh giá và đặt vé từ nhiều hãng hàng không
              </p>
              <button className="bg-white text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors">
                Tìm chuyến bay
              </button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-green-600 to-green-800 text-white">
            <CardContent className="p-8 text-center">
              <Car className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl mb-3">Thuê xe du lịch</h3>
              <p className="mb-4 text-green-100">
                Đa dạng loại xe, giá cả cạnh tranh
              </p>
              <button className="bg-white text-green-600 px-6 py-2 rounded-lg hover:bg-green-50 transition-colors">
                Xem xe có sẵn
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
