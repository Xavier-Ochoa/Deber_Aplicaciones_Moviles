# 📱 Photo Gallery App - Demo Xavier Ochoa

[![Ionic](https://img.shields.io/badge/Ionic-7.x-3880FF?style=for-the-badge&logo=ionic&logoColor=white)](https://ionicframework.com/)
[![Angular](https://img.shields.io/badge/Angular-17.x-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.io/)
[![Capacitor](https://img.shields.io/badge/Capacitor-6.x-119EFF?style=for-the-badge&logo=capacitor&logoColor=white)](https://capacitorjs.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

> Una aplicación móvil de galería de fotos desarrollada con Ionic Framework y Capacitor. Permite capturar, visualizar y gestionar fotografías en dispositivos Android e iOS.

---

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Capturas de Pantalla](#-capturas-de-pantalla)
- [Tecnologías Utilizadas](#-tecnologías-utilizadas)
- [Requisitos Previos](#-requisitos-previos)
- [Instalación](#-instalación)
- [Configuración](#-configuración)
- [Uso](#-uso)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Compilación](#-compilación)
- [Funcionalidades Implementadas](#-funcionalidades-implementadas)
- [Contribuir](#-contribuir)
- [Autor](#-autor)
- [Licencia](#-licencia)

---

## ✨ Características

- 📸 **Captura de fotos** usando la cámara del dispositivo
- 🖼️ **Galería de imágenes** con diseño responsive
- 🗑️ **Eliminar fotos** con confirmación
- 🔍 **Vista fullscreen** para visualización ampliada
- 💾 **Almacenamiento persistente** local
- 📱 **Multiplataforma** (Android, iOS, Web)
- 🎨 **Interfaz moderna** con Ionic Components
- ⚡ **Feedback visual** con toasts y alertas
- 🌐 **Estado vacío** cuando no hay fotos

---

## 📸 Capturas de Pantalla

### Pantalla de Inicio
<img width="372" height="848" alt="image" src="https://github.com/user-attachments/assets/6599327a-20a3-4b28-9e26-cc6cf62df71d" />
<img width="372" height="848" alt="image" src="https://github.com/user-attachments/assets/97037130-9b5b-49d9-883e-c1172a768e6c" />
*Pantalla de bienvenida con mensaje personalizado y botón de alerta.*

---

### Cámara
<img width="372" height="848" alt="image" src="https://github.com/user-attachments/assets/397c3e58-9e27-4772-8be5-9c629bf141ee" />
*Interfaz para capturar nuevas fotografías con botón flotante.*

---

### Galería - Estado Vacío
<img width="372" height="848" alt="image" src="https://github.com/user-attachments/assets/8d370d85-4b31-4270-8ee3-9628e3364144" />
*Mensaje informativo cuando no hay fotos en la galería.*

---

### Galería - Con Fotos
<img width="372" height="848" alt="image" src="https://github.com/user-attachments/assets/7f7d1a7a-ed13-4968-a75c-321fe97543ab" />
*Grid de fotos con opción de eliminar cada imagen.*

---

### Vista Fullscreen
<img width="746" height="1600" alt="image" src="https://github.com/user-attachments/assets/9cd69546-dc51-4cf9-8607-5f35b98bdfcb" />
*Visualización ampliada de fotografías.*

---

### Confirmación de Eliminación
<img width="779" height="1600" alt="image" src="https://github.com/user-attachments/assets/35117144-a5f0-485f-a5bf-db60bda8ee2f" />
*Action Sheet para confirmar eliminación de fotos.*

---

### Notificaciones Toast
<img width="372" height="848" alt="image" src="https://github.com/user-attachments/assets/f7d382c5-f8b3-4312-9f10-ae165befb64d" />
*Feedback visual al capturar una foto.*

---

## 🛠️ Tecnologías Utilizadas

| Tecnología | Versión | Descripción |
|------------|---------|-------------|
| **Ionic Framework** | 7.x | Framework para desarrollo móvil híbrido |
| **Angular** | 17.x | Framework web para la lógica de la aplicación |
| **Capacitor** | 6.x | Runtime nativo para aplicaciones web |
| **TypeScript** | 5.x | Lenguaje de programación tipado |
| **Capacitor Camera** | Latest | API para acceso a la cámara |
| **Capacitor Filesystem** | Latest | API para gestión de archivos |
| **Capacitor Preferences** | Latest | API para almacenamiento local |

---

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (v18 o superior)
- **npm** (v9 o superior)
- **Ionic CLI** (v7 o superior)
- **Android Studio** (para desarrollo Android)
- **Xcode** (para desarrollo iOS - solo macOS)

### Instalación de Ionic CLI

```bash
npm install -g @ionic/cli
```

### Verificar instalación

```bash
ionic --version
node --version
npm --version
```

---

## 🚀 Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/photo-gallery-app.git
cd photo-gallery-app
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Agregar plataformas

```bash
# Android
ionic capacitor add android

# iOS (solo macOS)
ionic capacitor add ios
```

---

## ⚙️ Configuración

### Configurar permisos de cámara

#### Android (`android/app/src/main/AndroidManifest.xml`)

```xml
<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
```

#### iOS (`ios/App/App/Info.plist`)

```xml
<key>NSCameraUsageDescription</key>
<string>La aplicación necesita acceso a la cámara para tomar fotos.</string>
<key>NSPhotoLibraryUsageDescription</key>
<string>La aplicación necesita acceso a la galería para guardar fotos.</string>
```

---

## 💻 Uso

### Ejecutar en el navegador (modo desarrollo)

```bash
ionic serve
```

La aplicación se abrirá en `http://localhost:8100`

### Ejecutar en Android

```bash
# Compilar y sincronizar
ionic capacitor build android
npx cap sync android

# Abrir en Android Studio
npx cap open android
```

Desde Android Studio, presiona el botón ▶️ Run para ejecutar en un emulador o dispositivo.

### Ejecutar en iOS

```bash
# Compilar y sincronizar
ionic capacitor build ios
npx cap sync ios

# Abrir en Xcode
npx cap open ios
```

Desde Xcode, selecciona un simulador y presiona ▶️ Run.

---

## 📁 Estructura del Proyecto

```
photo-gallery-app/
├── src/
│   ├── app/
│   │   ├── services/
│   │   │   └── photo.ts              # Servicio de gestión de fotos
│   │   ├── tab1/                     # Pantalla de Inicio
│   │   │   ├── tab1.page.html
│   │   │   ├── tab1.page.ts
│   │   │   └── tab1.page.scss
│   │   ├── tab2/                     # Pantalla de Cámara
│   │   │   ├── tab2.page.html
│   │   │   ├── tab2.page.ts
│   │   │   └── tab2.page.scss
│   │   ├── tab3/                     # Pantalla de Galería
│   │   │   ├── tab3.page.html
│   │   │   ├── tab3.page.ts
│   │   │   └── tab3.page.scss
│   │   └── tabs/                     # Navegación por tabs
│   ├── assets/                       # Recursos estáticos
│   ├── theme/                        # Estilos globales
│   └── index.html
├── android/                          # Proyecto Android nativo
├── ios/                              # Proyecto iOS nativo
├── resources/                        # Íconos y splash screens
├── capacitor.config.ts               # Configuración de Capacitor
├── package.json
└── README.md
```

---

## 📦 Compilación

### Generar APK para Android (Debug)

```bash
# Compilar el proyecto
ionic build

# Sincronizar con Android
npx cap sync android

# Abrir en Android Studio
npx cap open android
```

Desde Android Studio:
1. **Build** → **Build Bundle(s) / APK(s)** → **Build APK(s)**
2. El APK se generará en: `android/app/build/outputs/apk/debug/app-debug.apk`

### Generar APK firmado (Release)

```bash
# En Android Studio
Build → Generate Signed Bundle / APK → APK
```

Sigue el asistente para firmar tu APK con un keystore.

### Generar IPA para iOS

```bash
# Desde Xcode
Product → Archive
```

---

## 🎯 Funcionalidades Implementadas

### ✅ Tab 1 - Inicio
- [x] Mensaje de bienvenida personalizado
- [x] Botón de alerta de demostración
- [x] Diseño centrado y responsive

### ✅ Tab 2 - Cámara
- [x] Botón flotante para capturar fotos
- [x] Integración con Capacitor Camera API
- [x] Toast de confirmación al capturar foto
- [x] Manejo de errores con feedback visual

### ✅ Tab 3 - Galería
- [x] Grid responsive de fotos (2 columnas)
- [x] Botón de eliminar en cada foto
- [x] Confirmación antes de eliminar (Action Sheet)
- [x] Vista fullscreen al hacer clic en foto
- [x] Estado vacío cuando no hay fotos
- [x] Toast de confirmación al eliminar
- [x] Almacenamiento persistente con Preferences API

### ✅ Servicio de Fotos
- [x] Método para capturar fotos
- [x] Método para guardar fotos
- [x] Método para eliminar fotos
- [x] Método para cargar fotos guardadas
- [x] Soporte para Web y plataformas móviles
- [x] Conversión de formatos de imagen

---

## 🎨 Personalización

### Cambiar ícono y splash screen

1. Coloca tus imágenes en `resources/`:
   - `icon.png` (1024x1024 px)
   - `splash.png` (2732x2732 px)

2. Genera los recursos:

```bash
npm install @capacitor/assets --save-dev
npx capacitor-assets generate --iconBackgroundColor '#ffffff' --splashBackgroundColor '#2563eb'
```

3. Sincroniza:

```bash
npx cap sync
```


## 👨‍💻 Autor

**Xavier Ochoa**

- GitHub: https://github.com/Xavier-Ochoa/Deber_Aplicaciones_Moviles.git
- Email: luiss.ochoa02@epn.edu.ec

---

## 🙏 Agradecimientos

- [Ionic Framework](https://ionicframework.com/) por el excelente framework
- [Capacitor](https://capacitorjs.com/) por facilitar el desarrollo nativo
- [Angular](https://angular.io/) por el robusto framework web

---


<div align="center">

**⭐ Si te gusta este proyecto, dale una estrella en GitHub ⭐**

Hecho con ❤️ por Xavier Ochoa

</div>
