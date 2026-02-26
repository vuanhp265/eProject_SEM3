import { LayoutDashboard, Hotel, MapPin, Users, FileText, MessageSquare, Settings, LogOut, Menu, X, TrendingUp, DollarSign } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Badge } from "./ui/badge";
import { useState } from "react";

interface AdminDashboardProps {
  onNavigate: (page: string) => void;
  onLogout: () => void;
  adminUser: string | null;
}

export function AdminDashboard({ onNavigate, onLogout, adminUser }: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    { id: "dashboard", label: "Tổng quan", icon: <LayoutDashboard className="w-5 h-5" /> },
    { id: "bookings", label: "Đặt phòng", icon: <FileText className="w-5 h-5" /> },
    { id: "hotels", label: "Khách sạn", icon: <Hotel className="w-5 h-5" /> },
    { id: "tours", label: "Tours", icon: <MapPin className="w-5 h-5" /> },
    { id: "users", label: "Khách hàng", icon: <Users className="w-5 h-5" /> },
    { id: "reviews", label: "Đánh giá", icon: <MessageSquare className="w-5 h-5" /> },
    { id: "settings", label: "Cài đặt", icon: <Settings className="w-5 h-5" /> },
  ];

  const stats = [
    {
      title: "Tổng doanh thu",
      value: "458,5 triệu",
      change: "+12.5%",
      icon: <DollarSign className="w-8 h-8" />,
      color: "bg-green-500",
    },
    {
      title: "Đặt phòng mới",
      value: "234",
      change: "+8.2%",
      icon: <FileText className="w-8 h-8" />,
      color: "bg-blue-500",
    },
    {
      title: "Khách hàng",
      value: "1,847",
      change: "+15.3%",
      icon: <Users className="w-8 h-8" />,
      color: "bg-purple-500",
    },
    {
      title: "Tỷ lệ tăng trưởng",
      value: "23.5%",
      change: "+5.1%",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "bg-orange-500",
    },
  ];

  const recentBookings = [
    { id: "BK001", customer: "Nguyễn Văn A", hotel: "Vinpearl Resort Nha Trang", date: "08/01/2026", status: "confirmed", amount: "3.500.000đ" },
    { id: "BK002", customer: "Trần Thị B", hotel: "InterContinental Đà Nẵng", date: "07/01/2026", status: "pending", amount: "2.800.000đ" },
    { id: "BK003", customer: "Lê Văn C", hotel: "Sapa Luxury Homestay", date: "07/01/2026", status: "confirmed", amount: "1.200.000đ" },
    { id: "BK004", customer: "Phạm Thị D", hotel: "Halong Bay Cruise", date: "06/01/2026", status: "cancelled", amount: "4.500.000đ" },
    { id: "BK005", customer: "Hoàng Văn E", hotel: "Hội An Ancient Hotel", date: "06/01/2026", status: "confirmed", amount: "1.800.000đ" },
  ];

  const getStatusBadge = (status: string) => {
    const variants: Record<string, { variant: "default" | "destructive" | "outline" | "secondary", label: string }> = {
      confirmed: { variant: "default", label: "Đã xác nhận" },
      pending: { variant: "secondary", label: "Chờ xử lý" },
      cancelled: { variant: "destructive", label: "Đã hủy" },
    };
    const config = variants[status] || variants.pending;
    return <Badge variant={config.variant}>{config.label}</Badge>;
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-50 w-64 bg-gray-900 text-white transition-transform duration-300`}>
        <div className="p-6 border-b border-gray-800">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl">Admin Panel</h2>
              <p className="text-sm text-gray-400">Karnel Travel</p>
            </div>
            <button
              className="lg:hidden"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <nav className="p-4">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
                activeTab === item.id
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:bg-gray-800"
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="absolute bottom-0 w-64 p-4 border-t border-gray-800">
          <button
            onClick={() => onLogout()}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span>Đăng xuất</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white shadow-sm sticky top-0 z-40">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-4">
              <button
                className="lg:hidden"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu className="w-6 h-6" />
              </button>
              <h1 className="text-2xl">
                {menuItems.find((item) => item.id === activeTab)?.label}
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-600">Admin User</span>
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white">
                {adminUser ? adminUser.charAt(0).toUpperCase() : "AD"}
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        {activeTab === "dashboard" && (
          <div className="p-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              {stats.map((stat, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`${stat.color} text-white p-3 rounded-lg`}>
                        {stat.icon}
                      </div>
                      <span className="text-green-600 text-sm">{stat.change}</span>
                    </div>
                    <h3 className="text-gray-600 text-sm mb-1">{stat.title}</h3>
                    <p className="text-2xl">{stat.value}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Recent Bookings */}
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl">Đặt phòng gần đây</h2>
                  <Button variant="outline" size="sm">Xem tất cả</Button>
                </div>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Mã đặt phòng</TableHead>
                        <TableHead>Khách hàng</TableHead>
                        <TableHead>Khách sạn</TableHead>
                        <TableHead>Ngày đặt</TableHead>
                        <TableHead>Trạng thái</TableHead>
                        <TableHead>Số tiền</TableHead>
                        <TableHead>Thao tác</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {recentBookings.map((booking) => (
                        <TableRow key={booking.id}>
                          <TableCell>{booking.id}</TableCell>
                          <TableCell>{booking.customer}</TableCell>
                          <TableCell>{booking.hotel}</TableCell>
                          <TableCell>{booking.date}</TableCell>
                          <TableCell>{getStatusBadge(booking.status)}</TableCell>
                          <TableCell>{booking.amount}</TableCell>
                          <TableCell>
                            <Button variant="ghost" size="sm">Chi tiết</Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Hotel className="w-10 h-10 mb-3" />
                  <h3 className="text-xl mb-2">Thêm khách sạn</h3>
                  <p className="text-blue-100">Thêm khách sạn mới vào hệ thống</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <MapPin className="w-10 h-10 mb-3" />
                  <h3 className="text-xl mb-2">Tạo tour mới</h3>
                  <p className="text-green-100">Thêm tour du lịch mới</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Users className="w-10 h-10 mb-3" />
                  <h3 className="text-xl mb-2">Quản lý khách hàng</h3>
                  <p className="text-purple-100">Xem và quản lý khách hàng</p>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Other tabs placeholder */}
        {activeTab !== "dashboard" && (
          <div className="p-6">
            <Card>
              <CardContent className="p-12 text-center">
                <h2 className="text-2xl mb-4">
                  {menuItems.find((item) => item.id === activeTab)?.label}
                </h2>
                <p className="text-gray-600 mb-6">
                  Tính năng này đang được phát triển
                </p>
                <Button onClick={() => setActiveTab("dashboard")}>
                  Quay lại tổng quan
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}