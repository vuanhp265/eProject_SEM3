#!/bin/bash

# Script tự động setup Karnel Travel Guide với Create React App
# Author: Karnel Travel Guide Team
# Date: 2026-01-09

echo "🚀 Bắt đầu setup Karnel Travel Guide với Create React App..."
echo ""

# Màu sắc cho terminal
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Bước 1: Tạo project
echo "${BLUE}📦 Bước 1: Tạo project Create React App...${NC}"
npx create-react-app karnel-travel-guide --template typescript

if [ $? -ne 0 ]; then
    echo "${RED}❌ Lỗi khi tạo project!${NC}"
    exit 1
fi

echo "${GREEN}✅ Tạo project thành công!${NC}"
echo ""

# Di chuyển vào project
cd karnel-travel-guide || exit

# Bước 2: Cài Tailwind CSS
echo "${BLUE}🎨 Bước 2: Cài đặt Tailwind CSS...${NC}"
npm install -D tailwindcss postcss autoprefixer

if [ $? -ne 0 ]; then
    echo "${RED}❌ Lỗi khi cài Tailwind CSS!${NC}"
    exit 1
fi

npx tailwindcss init -p
echo "${GREEN}✅ Cài Tailwind CSS thành công!${NC}"
echo ""

# Bước 3: Cài các thư viện khác
echo "${BLUE}📚 Bước 3: Cài đặt các thư viện...${NC}"
npm install lucide-react motion recharts react-slick slick-carousel

if [ $? -ne 0 ]; then
    echo "${RED}❌ Lỗi khi cài thư viện!${NC}"
    exit 1
fi

npm install --save-dev @types/react-slick
echo "${GREEN}✅ Cài thư viện thành công!${NC}"
echo ""

# Bước 4: Thông báo copy files
echo "${YELLOW}⚠️  Bước 4: BẠN CẦN COPY FILES THỦ CÔNG${NC}"
echo ""
echo "Hãy copy các files sau từ project Figma Make:"
echo ""
echo "1. Config files:"
echo "   /CRA_FILES/tailwind.config.js    → tailwind.config.js"
echo "   /CRA_FILES/postcss.config.js     → postcss.config.js"
echo "   /CRA_FILES/tsconfig.json         → tsconfig.json"
echo "   /CRA_FILES/.gitignore            → .gitignore"
echo ""
echo "2. Public files:"
echo "   /CRA_FILES/public/index.html     → public/index.html"
echo ""
echo "3. Source files:"
echo "   /CRA_FILES/src/index.tsx         → src/index.tsx"
echo "   /CRA_FILES/src/index.css         → src/index.css"
echo ""
echo "4. Components & Styles:"
echo "   /src/app/components/             → src/components/"
echo "   /src/styles/                     → src/styles/"
echo "   /src/app/App.tsx                 → src/App.tsx"
echo ""
echo "${YELLOW}Sau khi copy xong, chạy: npm start${NC}"
echo ""
echo "${GREEN}🎉 Setup cơ bản hoàn tất!${NC}"
echo ""
echo "📖 Đọc thêm tài liệu tại:"
echo "   - /CRA_FILES/README.md"
echo "   - /CRA_FILES/HUONG_DAN_CHI_TIET.md"
echo "   - /BAT_DAU_TAI_DAY.md"
