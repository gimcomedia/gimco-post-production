@echo off
chcp 65001 >nul
setlocal EnableDelayedExpansion
cd /d "%~dp0"
set PYTHONIOENCODING=utf-8
echo ================================================
echo   gimco-post-production: check + commit + pull + push
echo ================================================
echo.
if exist stash.txt del /q stash.txt

rem ---- 1) Python check: stop before commit if something is broken ----
set "PY="
python --version >nul 2>nul && set "PY=python"
if not defined PY py -3 --version >nul 2>nul && set "PY=py -3"
if not defined PY goto nocheck
echo [1/4] Checking the repo...
%PY% tools\check_system.py
if errorlevel 1 goto checkfail
goto commit
:nocheck
echo [1/4] Python not found: skipping the check.

rem ---- 2) Commit local changes, message from the top of CHANGELOG ----
:commit
echo.
echo [2/4] Saving local changes...
git add -A
git diff --cached --quiet
if not errorlevel 1 goto nochanges
set "VER="
for /f "tokens=2" %%a in ('findstr /b /c:"## " CHANGELOG.md') do if not defined VER set "VER=%%a"
if not defined VER set "VER=update"
git commit -m "v!VER!"
if errorlevel 1 goto commitfail
goto pull
:nochanges
echo No local changes.

rem ---- 3) Pull (rebase on top of GitHub) ----
:pull
echo.
echo [3/4] Pulling from GitHub...
git pull --rebase
if errorlevel 1 goto pullfail

rem ---- 4) Push ----
echo.
echo [4/4] Pushing to GitHub...
git push
if errorlevel 1 goto pushfail
echo.
echo DONE: everything is on GitHub.
goto end

:checkfail
echo.
echo CHECK FAILED: nothing was committed. Send this window to Claude.
goto end
:commitfail
echo.
echo COMMIT FAILED. Send this window to Claude.
goto end
:pullfail
echo.
echo PULL FAILED: your changes are committed locally but not pushed.
echo If it says CONFLICT, run: git rebase --abort  then send this window to Claude.
goto end
:pushfail
echo.
echo PUSH FAILED: check internet or GitHub login, then run sync.bat again.
goto end

:end
echo.
pause
