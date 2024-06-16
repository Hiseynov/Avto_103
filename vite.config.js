
import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Папка для сборки проекта на хостинге
    assetsDir: 'assets', // Папка с ресурсами (стили, изображения и т. д.)
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/Page/Home.jsx'), // Основной файл входа
        contact: resolve(__dirname, 'src/Page/Contact.jsx'), // Страница контактов
        terms: resolve(__dirname, 'src/Page/Sertler.jsx'), // Страница условий
        carDetails: resolve(__dirname, 'src/Page/CarId.jsx'), // Детальная страница машины
        notFound: resolve(__dirname, 'src/Page/Eror.jsx'), // Страница 404
      },
    },
  },
});