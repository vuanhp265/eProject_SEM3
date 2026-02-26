import { useState } from "react";
import { UserHeader } from "./components/UserHeader";
import { HomePageEnhanced } from "./components/HomePageEnhanced";
import { AboutPageEnhanced } from "./components/AboutPageEnhanced";
import { SearchPage } from "./components/SearchPage";
import { TouristSpotsPage } from "./components/TouristSpotsPage";
import { HotelsPage } from "./components/HotelsPage";
import { TravelInfoPage } from "./components/TravelInfoPage";
import { ContactPage } from "./components/ContactPage";
import { FeedbackPage } from "./components/FeedbackPage";
import { AdminDashboard } from "./components/AdminDashboard";
import { LoginPage } from "./components/LoginPage";
import { RegisterPage } from "./components/RegisterPage";
import { Footer } from "./components/Footer";

// Thêm hai trang mới
import { PaymentPage } from "./components/PaymentPage";          // Đặt tên file là PaymentPage.tsx
import { PaymentStatusPage } from "./components/PaymentStatusPage"; // PaymentStatusPage.tsx

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminUser, setAdminUser] = useState<string | null>(null);

  // Thêm state để truyền thông tin booking (từ HotelsPage → Payment)
  const [bookingData, setBookingData] = useState<any>(null);

  const handleNavigate = (page: string, data?: any) => {
    setCurrentPage(page);
    if (data) {
      setBookingData(data); // Lưu dữ liệu booking khi navigate sang payment
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLogin = (username: string, password: string) => {
    const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers") || "[]");
    const user = registeredUsers.find(
      (u: any) => u.username === username && u.password === password
    );

    if ((username === "admin" && password === "admin123") || user) {
      setIsAuthenticated(true);
      setAdminUser(username);
      setCurrentPage("admin");
    }
  };

  const handleRegister = (userData: {
    username: string;
    email: string;
    password: string;
    fullName: string;
    phone: string;
  }) => {
    console.log("New user registered:", userData);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setAdminUser(null);
    setCurrentPage("home");
  };

  // Register page
  if (currentPage === "register") {
    return <RegisterPage onRegister={handleRegister} onNavigate={handleNavigate} />;
  }

  // Login page
  if (currentPage === "login") {
    return <LoginPage onLogin={handleLogin} onNavigate={handleNavigate} />;
  }

  // Admin page
  if (currentPage === "admin") {
    if (!isAuthenticated) {
      setCurrentPage("login");
      return <LoginPage onLogin={handleLogin} onNavigate={handleNavigate} />;
    }
    return <AdminDashboard onNavigate={handleNavigate} onLogout={handleLogout} adminUser={adminUser} />;
  }

  // User pages
  return (
    <div className="min-h-screen flex flex-col">
      <UserHeader onNavigate={handleNavigate} currentPage={currentPage} />
      
      <main className="flex-1">
        {currentPage === "home" && <HomePageEnhanced onNavigate={handleNavigate} />}
        {currentPage === "about" && <AboutPageEnhanced />}
        {currentPage === "search" && <SearchPage onNavigate={handleNavigate} />}
        {currentPage === "tourist-spots" && <TouristSpotsPage onNavigate={handleNavigate} />}
        {currentPage === "hotels" && <HotelsPage onNavigate={handleNavigate} />}
        {currentPage === "travel-info" && <TravelInfoPage />}
        {currentPage === "contact" && <ContactPage onNavigate={handleNavigate} />}
        {currentPage === "feedback" && <FeedbackPage />}

        {/* Thêm hai trang thanh toán */}
        {currentPage === "payment" && (
          <PaymentPage 
            onNavigate={handleNavigate} 
            bookingInfo={bookingData} // Truyền dữ liệu booking nếu có
          />
        )}
        {currentPage === "payment-status" && <PaymentStatusPage onNavigate={handleNavigate} />}
      </main>

      <Footer />
    </div>
  );
}