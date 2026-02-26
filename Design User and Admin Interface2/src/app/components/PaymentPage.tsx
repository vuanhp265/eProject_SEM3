// PaymentPage.tsx
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";
import { CreditCard, Smartphone, Building2, CheckCircle2, XCircle, ArrowLeft } from "lucide-react";
import { useState } from "react";

interface PaymentPageProps {
  onNavigate: (page: string) => void;
  // Giả sử nhận booking info từ trang trước (có thể dùng context hoặc prop)
  bookingInfo?: {
    hotelName: string;
    checkIn: string;
    checkOut: string;
    nights: number;
    totalPrice: number;
    image: string;
  };
}

export function PaymentPage({ onNavigate, bookingInfo }: PaymentPageProps) {
  // Dữ liệu mẫu nếu không truyền prop
  const defaultBooking = bookingInfo || {
    hotelName: "Vinpearl Resort & Spa Nha Trang",
    checkIn: "15/03/2026",
    checkOut: "18/03/2026",
    nights: 3,
    totalPrice: 10500000,
    image: "https://images.unsplash.com/photo-1558117338-aa433feb1c62?...",
  };

  const [paymentMethod, setPaymentMethod] = useState<string>("momo");
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = () => {
    setIsProcessing(true);
    // Giả lập gọi API thanh toán
    setTimeout(() => {
      setIsProcessing(false);
      onNavigate("payment-status?status=success");
    }, 2500);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <Button
          variant="ghost"
          className="mb-6 text-gray-600"
          onClick={() => onNavigate("hotels")}
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Quay lại
        </Button>

        <h1 className="text-4xl font-bold mb-2">Thanh toán</h1>
        <p className="text-gray-600 mb-10">Hoàn tất đặt phòng với thông tin an toàn</p>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Left - Order Summary */}
          <div className="md:col-span-3">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Thông tin đặt phòng</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4 mb-6">
                  <img
                    src={defaultBooking.image}
                    alt={defaultBooking.hotelName}
                    className="w-32 h-24 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">{defaultBooking.hotelName}</h3>
                    <p className="text-gray-600 mt-1">
                      Check-in: {defaultBooking.checkIn} → Check-out: {defaultBooking.checkOut}
                    </p>
                    <p className="text-gray-600">{defaultBooking.nights} đêm</p>
                  </div>
                </div>

                <div className="space-y-3 border-t pt-4">
                  <div className="flex justify-between">
                    <span>Giá phòng ({defaultBooking.nights} đêm)</span>
                    <span>{(defaultBooking.totalPrice / defaultBooking.nights).toLocaleString()}đ</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Thuế & phí dịch vụ (10%)</span>
                    <span>{(defaultBooking.totalPrice * 0.1).toLocaleString()}đ</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg border-t pt-3">
                    <span>Tổng thanh toán</span>
                    <span className="text-blue-600">{defaultBooking.totalPrice.toLocaleString()}đ</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Thông tin liên hệ</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fullName">Họ và tên</Label>
                    <Input id="fullName" placeholder="Nguyễn Văn A" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Số điện thoại</Label>
                    <Input id="phone" placeholder="090xxxxxxx" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="example@email.com" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right - Payment Methods */}
          <div className="md:col-span-2">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle>Phương thức thanh toán</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { id: "momo", label: "Ví MoMo", icon: <Smartphone className="w-5 h-5" /> },
                  { id: "zalopay", label: "ZaloPay", icon: <Smartphone className="w-5 h-5" /> },
                  { id: "vnpay", label: "VNPAY QR", icon: <Smartphone className="w-5 h-5" /> },
                  { id: "card", label: "Thẻ tín dụng / ghi nợ (Visa, Mastercard)", icon: <CreditCard className="w-5 h-5" /> },
                  { id: "bank", label: "Chuyển khoản ngân hàng", icon: <Building2 className="w-5 h-5" /> },
                ].map((method) => (
                  <label
                    key={method.id}
                    className={`flex items-center gap-3 p-4 border rounded-lg cursor-pointer transition-all ${
                      paymentMethod === method.id
                        ? "border-blue-600 bg-blue-50"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value={method.id}
                      checked={paymentMethod === method.id}
                      onChange={() => setPaymentMethod(method.id)}
                      className="sr-only"
                    />
                    <div className="text-blue-600">{method.icon}</div>
                    <span className="font-medium">{method.label}</span>
                  </label>
                ))}

                <div className="pt-4 border-t">
                  <div className="flex items-center gap-2 mb-4">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms" className="text-sm">
                      Tôi đồng ý với <span className="text-blue-600">điều khoản & chính sách</span>
                    </Label>
                  </div>

                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6"
                    disabled={isProcessing}
                    onClick={handlePayment}
                  >
                    {isProcessing ? "Đang xử lý..." : `Thanh toán ${(defaultBooking.totalPrice).toLocaleString()}đ`}
                  </Button>

                  <p className="text-xs text-center text-gray-500 mt-4">
                    Thanh toán an toàn – được mã hóa SSL
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}