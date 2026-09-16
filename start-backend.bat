@echo off
echo ========================================================
echo Starting Anushka Sharma Portfolio Backend API (.NET 8 Clean Architecture)
echo ========================================================
cd /d "%~dp0Portfolio_Backend\src\Portfolio.Web"
"C:\Program Files\dotnet\dotnet.exe" run --urls="http://localhost:5000"
pause
