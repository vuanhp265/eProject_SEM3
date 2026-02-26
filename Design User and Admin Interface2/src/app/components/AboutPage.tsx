import { Card, CardContent } from "./ui/card";
import { Building2, Users, Award, Target } from "lucide-react";

export function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div
        className="relative h-96 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGxvYmJ5fGVufDF8fHx8MTc2NzgzMzg0Nnww&ixlib=rb-4.1.0&q=80&w=1080')`,
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="text-center">
            <h1 className="text-5xl mb-4">Về Karnel Travel Guide</h1>
            <p className="text-xl">Đối tác du lịch tin cậy của bạn từ năm 2015</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Company Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl mb-6">Câu chuyện của chúng tôi</h2>
            <p className="text-gray-600 mb-4">
              Karnel Travel Guide được thành lập với sứ mệnh mang đến những trải nghiệm du lịch tuyệt vời nhất 
              cho khách hàng. Với hơn 10 năm kinh nghiệm trong ngành du lịch, chúng tôi tự hào là đối tác 
              đáng tin cậy của hàng nghìn khách hàng.
            </p>
            <p className="text-gray-600 mb-4">
              Chúng tôi cam kết cung cấp dịch vụ chất lượng cao với giá cả hợp lý, đồng thời luôn đặt sự hài lòng 
              của khách hàng lên hàng đầu. Đội ngũ nhân viên chuyên nghiệp và tận tâm của chúng tôi luôn sẵn sàng 
              hỗ trợ bạn 24/7.
            </p>
            <p className="text-gray-600">
              Với mạng lưới đối tác rộng khắp cả nước và quốc tế, chúng tôi mang đến cho bạn vô vàn lựa chọn 
              về khách sạn, resort, tour du lịch và các dịch vụ liên quan khác.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-6 text-center">
                <Building2 className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                <h3 className="text-3xl mb-2">500+</h3>
                <p className="text-gray-600">Khách sạn đối tác</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-green-600 mx-auto mb-3" />
                <h3 className="text-3xl mb-2">50K+</h3>
                <p className="text-gray-600">Khách hàng hài lòng</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Award className="w-12 h-12 text-yellow-600 mx-auto mb-3" />
                <h3 className="text-3xl mb-2">15+</h3>
                <p className="text-gray-600">Giải thưởng</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Target className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                <h3 className="text-3xl mb-2">10+</h3>
                <p className="text-gray-600">Năm kinh nghiệm</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Services */}
        <div className="mb-16">
          <h2 className="text-3xl text-center mb-12">Dịch vụ của chúng tôi</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1558117338-aa433feb1c62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwcmVzb3J0fGVufDF8fHx8MTc2Nzg0OTEyN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Vận chuyển"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl mb-3">Vận chuyển</h3>
                <p className="text-gray-600">
                  Dịch vụ đưa đón sân bay, thuê xe du lịch, vé máy bay, tàu hỏa với giá ưu đãi.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1765775635143-6462630748ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3RlbCUyMHJvb218ZW58MXx8fHwxNzY3ODY5MTY4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Lưu trú"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl mb-3">Lưu trú</h3>
                <p className="text-gray-600">
                  Khách sạn, resort, homestay, villa cao cấp với đầy đủ tiện nghi và dịch vụ.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1619717823034-0f5878db088c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBhZHZlbnR1cmUlMjBuYXR1cmV8ZW58MXx8fHwxNzY3ODYzNjEwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Gói tour"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl mb-3">Gói tour</h3>
                <p className="text-gray-600">
                  Các gói tour du lịch trọn gói, tour tự túc, tour theo yêu cầu đa dạng.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl mb-4">Tầm nhìn</h3>
              <p>
                Trở thành công ty du lịch hàng đầu Việt Nam, mang đến những trải nghiệm du lịch 
                đẳng cấp quốc tế cho khách hàng, góp phần phát triển du lịch bền vững.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl mb-4">Sứ mệnh</h3>
              <p>
                Cung cấp dịch vụ du lịch chất lượng cao, tạo ra những kỷ niệm đáng nhớ cho khách hàng 
                thông qua sự chuyên nghiệp, tận tâm và không ngừng đổi mới.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
