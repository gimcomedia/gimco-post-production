@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo Updating gimco-post-production...
git pull --ff-only
if errorlevel 1 (
  echo.
  echo Pull failed. Open GitHub Desktop or ask Claude.
) else (
  echo.
  echo Done.
)
pause
