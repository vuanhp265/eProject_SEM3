
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { CheckCircle2, XCircle, ArrowLeft, HelpCircle } from "lucide-react";

interface PaymentStatusPageProps {
  onNavigate: (page: string) => void;
}

export function PaymentStatusPage({ onNavigate }: PaymentStatusPageProps) {
  // Giả lập lấy từ URL query: success | failed
  const status = new URLSearchParams(window.location.search).get("status") || "success";
  const isSuccess = status === "success";

  return (
    <div className="bg-gray-50 min-h-screen py-12 flex items-center">
      <div className="container mx-auto px-4 max-w-2xl">
        <Card className="text-center p-10 shadow-xl">
          <div className="mb-6">
            {isSuccess ? (
              <CheckCircle2 className="w-24 h-24 text-green-500 mx-auto" />
            ) : (
              <XCircle className="w-24 h-24 text-red-500 mx-auto" />
            )}
          </div>

          <h1 className="text-3xl font-bold mb-4">
            {isSuccess ? "Thanh toán thành công!" : "Thanh toán thất bại"}
          </h1>

          <p className="text-gray-600 text-lg mb-8">
            {isSuccess
              ? "Cảm ơn bạn! Đặt phòng của bạn đã được xác nhận. Chúng tôi đã gửi email xác nhận và voucher đến địa chỉ của bạn."
              : "Rất tiếc, giao dịch không thành công. Vui lòng thử lại hoặc liên hệ hỗ trợ."}
          </p>

          {isSuccess && (
            <div className="bg-green-50 p-6 rounded-lg mb-8">
              <h3 className="font-semibold mb-2">Thông tin đặt phòng</h3>
              <p>Mã đặt phòng: VP123456789</p>
              <p>Khách sạn: Vinpearl Resort & Spa Nha Trang</p>
              <p>Thời gian: 15/03 - 18/03/2026</p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              className="flex items-center gap-2"
              onClick={() => onNavigate("hotels")}
            >
              <ArrowLeft className="w-4 h-4" />
              Về trang chủ
            </Button>

            <Button
              className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2"
              onClick={() => onNavigate("hotels")}
            >
              Đặt phòng mới
            </Button>

            <Button variant="ghost" className="flex items-center gap-2 text-gray-600">
              <HelpCircle className="w-4 h-4" />
              Liên hệ hỗ trợ
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}