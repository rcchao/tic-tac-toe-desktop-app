# 🎮 Tic Tac Toe Desktop App

This is my first personal project outside of a hackathon! It's a simple Tic Tac Toe desktop application built using the **Electron.js** framework. It is designed to be cross-platform (Mac, Linux, and Windows), but I've only tested it on macOS. If you run into issues setting this up locally, let me know and I can alter the instructions.

##  Tech Stack
- **TypeScript**  
- **React**  
- **CSS**  

##  Figma wiremocks:
<img width="978" alt="Screenshot 2025-02-20 at 9 27 34 pm" src="https://github.com/user-attachments/assets/c78642ef-5ceb-4dbe-a02e-6eb7655e075c" />

##  Demo:


https://github.com/user-attachments/assets/06406a53-ff38-40d3-b5e9-69ea05a009ff


## To run on your machine:
1. Clone the repo and cd into your folder
2. Install dependencies
```sh
npm install
```
3. Build the project
```sh
npm run build
```
4. Run the following depending on your OS:
- mac:
  ```sh
  npm run dist:mac
  ```
  This will generate a .dmg file, open it and drag the application into your applications folder
- linux:
  ```sh
  npm run dist:linux
  ```
  This will generate an AppImage file. To run it:
  ```sh
  chmod +x your-app.AppImage
  ./your-app.AppImage
  ```
- windows:
  ```sh
  npm run dist:win
  ```
  You can choose between:
  - MSI Installer: Run the .msi file for a standard installation.
  - Portable Executable: Use the standalone .exe file if you prefer a no-install version.
