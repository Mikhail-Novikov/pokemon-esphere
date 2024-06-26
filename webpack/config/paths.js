const path = require('path');

const appPaths = {
  // папка с исходниками приложения
  appDir: path.resolve(__dirname, '../../src'),
  // папка с общими элементами приложения (утилиты, компоненты и т.п.)
  appShared: path.resolve(__dirname, '../../src/shared'),
  // папка с бизнес сущностями
  appEntities: path.resolve(__dirname, '../../src/entities'),
  // папка с модулями приложения
  appFeatures: path.resolve(__dirname, '../../src/features'),
  // папка с виджетами приложения
  appWidgets: path.resolve(__dirname, '../../src/widgets'),
  // папка с процессами приложения
  appProcesses: path.resolve(__dirname, '../../src/processes'),
  // папка с контейнерами страниц приложения
  appPages: path.resolve(__dirname, '../../src/pages'),
  // папка с билдом приложения
  appDist: path.resolve(__dirname, '../../docs/'),
  // папка с ресурсами приложения (картинками шрифтами и пр.)
  appAssets: path.resolve(__dirname, '../../public'),
  // папка со стилями
  appStyles: path.resolve(__dirname, '../../src/shared/styles'),
  // точка входа в приложение
  appIndex: path.resolve(__dirname, '../../src/index.tsx'),
  // точка входа в приложение в режиме разработки
  appDevIndex: path.resolve(__dirname, '../../src/index.dev.ts'),
  // HTML шаблон приложения
  appHTMLTemplate: path.resolve(__dirname, '../../public/index.html'),
  // Favicon приложения
  appFavicon: path.resolve(__dirname, '../../docs/logo.png'),
  // путь к папке package.json
  appPackageJson: path.resolve(__dirname, '../../package.json'),
};

module.exports = appPaths;
