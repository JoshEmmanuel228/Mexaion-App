@echo OFF
ECHO Iniciando servidores...

REM Iniciar el servidor de Next.js en una nueva ventana
ECHO Iniciando la aplicacion web de Next.js (mexaion-app)...
start "Mexaion-App" cmd /c "npm run dev"

REM Esperar un poco para que los puertos no se solapen si hay conflictos
timeout /t 5

REM Iniciar el servidor de Flask en otra nueva ventana
ECHO Iniciando el servidor de Vision por Computadora (Flask)...
start "Vision-Server" cmd /c "cd VISION-ARTIFICIAL/ServidorWebPython && python server.py"

ECHO Ambos servidores se han iniciado en ventanas separadas.
