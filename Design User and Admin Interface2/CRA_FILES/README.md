# 🌏 Karnel Travel Guide - Create React App Version

Website du lịch Karnel Travel Guide được xây dựng với **Create React App** và **TypeScript**.

## 🚀 Hướng dẫn cài đặt

### Bước 1: Tạo project mới

```bash
npx create-react-app karnel-travel-guide --template typescript
cd karnel-travel-guide
```

### Bước 2: Copy files

**Copy các file từ thư mục `/CRA_FILES/` vào project:**

1. Copy `package.json` → ghi đè file gốc
2. Copy `tailwind.config.js` → vào root
3. Copy `tsconfig.json` → ghi đè file gốc
4. Copy `public/index.html` → ghi đè file gốc
5. Copy `src/index.tsx` → ghi đè file gốc
6. Copy `src/index.css` → ghi đè file gốc

**Copy các components từ project chính:**

```
/src/app/components/ → /src/components/
/src/styles/ → /src/styles/
/src/app/App.tsx → /src/App.tsx
```

### Bước 3: Cài đặt dependencies

```bash
npm install
```

### Bước 4: Cài đặt Tailwind CSS

```bash
npm install -D tailwindcss postcss autoprefixer
```

File `tailwind.config.js` đã được cung cấp sẵn!

### Bước 5: Cài đặt các thư viện cần thiết

```bash
npm install lucide-react motion recharts react-slick slick-carousel
npm install --save-dev @types/react-slick
```

### Bước 6: Chạy project

```bash
npm start
```

Browser sẽ tự động mở tại `http://localhost:3000` 🎉

---

## 📁 Cấu trúc thư mục

```
karnel-travel-guide/
├── public/
│   ├── index.html          # HTML template
│   ├── favicon.ico         # Icon website
│   └── manifest.json       # PWA manifest
├── src/
│   ├── components/         # React components
│   │   ├── ui/            # UI components (Button, Card, Input...)
│   │   ├── UserHeader.tsx
│   │   ├── Footer.tsx
│   │   ├── HomePageEnhanced.tsx
│   │   ├── AboutPageEnhanced.tsx
│   │   ├── SearchPage.tsx
│   │   ├── TouristSpotsPage.tsx
│   │   ├── HotelsPage.tsx
│   │   ├── TravelInfoPage.tsx
│   │   ├── ContactPage.tsx
│   │   ├── FeedbackPage.tsx
│   │   └── AdminDashboard.tsx
│   ├── styles/            # CSS files
│   │   ├── fonts.css
│   │   └── theme.css
│   ├── App.tsx            # Main App component
│   ├── index.tsx          # Entry point
│   └── index.css          # Global styles + Tailwind
├── package.json           # Dependencies
├── tailwind.config.js     # Tailwind configuration
└── tsconfig.json          # TypeScript configuration
```

---

## 🎨 Công nghệ sử dụng

- ⚛️ **React 18.2** - UI Library
- 📘 **TypeScript** - Type safety
- 🎨 **Tailwind CSS** - Utility-first CSS
- 🎭 **Motion (Framer Motion)** - Animations
- 📊 **Recharts** - Charts & graphs
- 🎯 **Lucide React** - Icons
- 🎪 **React Slick** - Carousels

---

## 🌟 Tính năng

### Trang User
1. **Home** - Trang chủ với hero slider, điểm đến nổi bật, ưu đãi
2. **About** - Giới thiệu công ty, timeline, đội ngũ
3. **Search** - Tìm kiếm tour, khách sạn với bộ lọc
4. **Tourist Spots** - Các điểm du lịch nổi tiếng
5. **Hotels** - Danh sách khách sạn, resort
6. **Travel Info** - Thông tin du lịch, visa, bảo hiểm
7. **Contact** - Liên hệ, bản đồ
8. **Feedback** - Đánh giá, phản hồi khách hàng

### Trang Admin
- Dashboard quản lý tour, booking, khách hàng
- Thống kê doanh thu, biểu đồ
- Quản lý nội dung website

---

## 📝 Scripts

```bash
npm start      # Chạy development server
npm build      # Build production
npm test       # Chạy tests
npm eject      # Eject CRA config (không khuyến nghị)
```

---

## 🔧 Tùy chỉnh

### Thay đổi màu sắc

Chỉnh sửa file `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {...},  // Màu chủ đạo
      secondary: {...} // Màu phụ
    }
  }
}
```

### Thay đổi fonts

Chỉnh sửa file `src/styles/fonts.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font');
```

---

## 🌐 Deploy

### Vercel (Khuyến nghị)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload folder 'build' lên Netlify
```

### GitHub Pages
```bash
npm install --save-dev gh-pages

# Thêm vào package.json:
"homepage": "https://yourusername.github.io/karnel-travel-guide"
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}

npm run deploy
```

---

## 📞 Hỗ trợ

- 🌐 Website: http://www.karneltravelguide.com
- 📧 Email: support@karneltravelguide.com
- ☎️ Hotline: 1900-xxxx

---

## 📄 License

Copyright © 2026 Karnel Travel Guide. All rights reserved.

---

## ⭐ Credits

Developed with ❤️ by Karnel Travel Guide Team
