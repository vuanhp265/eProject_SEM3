@echo off
REM Script tự động setup Karnel Travel Guide với Create React App
REM Author: Karnel Travel Guide Team
REM Date: 2026-01-09

echo.
echo ========================================
echo   KARNEL TRAVEL GUIDE - SETUP CRA
echo ========================================
echo.

REM Bước 1: Tạo project
echo [1/4] Tao project Create React App...
echo.
call npx create-react-app karnel-travel-guide --template typescript

if errorlevel 1 (
    echo.
    echo [ERROR] Loi khi tao project!
    pause
    exit /b 1
)

echo.
echo [OK] Tao project thanh cong!
echo.

REM Di chuyển vào project
cd karnel-travel-guide

REM Bước 2: Cài Tailwind CSS
echo [2/4] Cai dat Tailwind CSS...
echo.
call npm install -D tailwindcss postcss autoprefixer

if errorlevel 1 (
    echo.
    echo [ERROR] Loi khi cai Tailwind CSS!
    pause
    exit /b 1
)

call npx tailwindcss init -p

echo.
echo [OK] Cai Tailwind CSS thanh cong!
echo.

REM Bước 3: Cài các thư viện khác
echo [3/4] Cai dat cac thu vien...
echo.
call npm install lucide-react motion recharts react-slick slick-carousel

if errorlevel 1 (
    echo.
    echo [ERROR] Loi khi cai thu vien!
    pause
    exit /b 1
)

call npm install --save-dev @types/react-slick

echo.
echo [OK] Cai thu vien thanh cong!
echo.

REM Bước 4: Thông báo copy files
echo [4/4] COPY FILES THU CONG
echo.
echo ========================================
echo   BAN CAN COPY CAC FILES SAU:
echo ========================================
echo.
echo 1. Config files:
echo    /CRA_FILES/tailwind.config.js  -^> tailwind.config.js
echo    /CRA_FILES/postcss.config.js   -^> postcss.config.js
echo    /CRA_FILES/tsconfig.json       -^> tsconfig.json
echo    /CRA_FILES/.gitignore          -^> .gitignore
echo.
echo 2. Public files:
echo    /CRA_FILES/public/index.html   -^> public/index.html
echo.
echo 3. Source files:
echo    /CRA_FILES/src/index.tsx       -^> src/index.tsx
echo    /CRA_FILES/src/index.css       -^> src/index.css
echo.
echo 4. Components ^& Styles:
echo    /src/app/components/           -^> src/components/
echo    /src/styles/                   -^> src/styles/
echo    /src/app/App.tsx               -^> src/App.tsx
echo.
echo ========================================
echo.
echo [OK] Setup co ban hoan tat!
echo.
echo SAU KHI COPY XONG, CHAY: npm start
echo.
echo Doc them tai lieu tai:
echo    - /CRA_FILES/README.md
echo    - /CRA_FILES/HUONG_DAN_CHI_TIET.md
echo    - /BAT_DAU_TAI_DAY.md
echo.
pause
