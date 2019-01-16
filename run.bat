@echo off

rem HideWindow %o1%
rem Hideself
rem LaunchSilent %o1% %o2% %o3%

where node.exe >nul 2>&1 && npm start || echo install node exit


pause