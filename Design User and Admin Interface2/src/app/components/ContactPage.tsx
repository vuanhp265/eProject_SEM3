import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { MapPin, Phone, Mail, Clock, Send, Star } from "lucide-react";

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl mb-4">Liên hệ với chúng tôi</h1>
          <p className="text-gray-600 text-lg">
            Chúng tôi luôn sẵn sàng hỗ trợ bạn 24/7
          </p>
          <div className="mt-4">
            <Button
              onClick={() => onNavigate("feedback")}
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600"
            >
              <Star className="w-4 h-4 mr-2" />
              Gửi đánh giá & Phản hồi
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="pt-8">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl mb-2">Địa chỉ</h3>
              <p className="text-gray-600">
                123 Nguyễn Huệ, Quận 1<br />
                TP. Hồ Chí Minh, Việt Nam
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="pt-8">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl mb-2">Điện thoại</h3>
              <p className="text-gray-600">
                Hotline: +84 123 456 789<br />
                Zalo: +84 987 654 321
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="pt-8">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl mb-2">Email</h3>
              <p className="text-gray-600">
                info@karneltravelguide.com<br />
                support@karneltravelguide.com
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl mb-6">Gửi tin nhắn cho chúng tôi</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Họ và tên *</Label>
                    <Input
                      id="name"
                      placeholder="Nguyễn Văn A"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Số điện thoại *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="0123456789"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="example@email.com"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="subject">Tiêu đề</Label>
                  <Input
                    id="subject"
                    placeholder="Đặt tour du lịch Nha Trang"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Nội dung *</Label>
                  <Textarea
                    id="message"
                    placeholder="Nhập nội dung yêu cầu của bạn..."
                    rows={6}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Gửi tin nhắn
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Map & Opening Hours */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-0">
                <div className="h-64 bg-gray-200 rounded-t-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4967814570404!2d106.69746931531467!3d10.776889192319934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4b3330bcc9%3A0xb7a8b86b39a7a8a!2zTmd1eeG7hW4gSHXhu4csIFF14bqtbiAxLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Karnel Travel Guide Location"
                  ></iframe>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl">Giờ làm việc</h3>
                </div>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Thứ 2 - Thứ 6:</span>
                    <span>8:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Thứ 7:</span>
                    <span>8:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Chủ nhật:</span>
                    <span>9:00 - 16:00</span>
                  </div>
                  <div className="mt-4 p-3 bg-blue-50 rounded text-blue-700">
                    Hotline 24/7: +84 123 456 789
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
              <CardContent className="p-6">
                <h3 className="text-xl mb-2">Đăng ký nhận tin</h3>
                <p className="mb-4 text-blue-100">
                  Nhận thông tin ưu đãi và tour mới nhất
                </p>
                <div className="flex gap-2">
                  <Input
                    placeholder="Email của bạn"
                    className="bg-white text-gray-800"
                  />
                  <Button variant="secondary">
                    Đăng ký
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}