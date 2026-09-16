@echo off
echo ========================================================
echo Launching Anushka Sharma Portfolio Ecosystem
echo 1. Backend: http://localhost:5000/swagger
echo 2. Frontend: http://localhost:5173
echo ========================================================

start "Portfolio Backend API (.NET 8 Clean Architecture)" cmd /k "cd /d %~dp0Portfolio_Backend\src\Portfolio.Web && "C:\Program Files\dotnet\dotnet.exe" run --urls="http://localhost:5000""

timeout /t 2 /nobreak >nul

start "Portfolio UI (React 19 + Vite)" cmd /k "cd /d %~dp0Portfolio_UI && set PATH=C:\Users\anush\AppData\Local\nvm\v22.12.0;%%PATH%% && npm run dev"

echo Both services initiated. Opening browser...
timeout /t 3 /nobreak >nul
start http://localhost:5173
