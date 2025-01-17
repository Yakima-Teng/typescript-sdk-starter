const WebpackBar = require('webpackbar');
const { toCamelCase } = require('./utils');
const { resolve, PROJECT_PATH, pkg } = require('./constants');

const pkgName = pkg.name;

module.exports = {
  // 定义了入口文件路径
  entry: {
    index: resolve(PROJECT_PATH, './src/index.ts'),
  },
  // 定义了编译打包之后的文件名以及所在路径。还有打包的模块类型
  output: {
    clean: true,
    // 打包后的产物名
    filename: `${pkgName}.js`,
    // 在全局变量中增加一个全局变量用于访问SDK，如 window.TypescriptSdkStarter
    library: toCamelCase(pkgName),
    // 打包成umd模块
    libraryTarget: 'umd',
    // libraryExport这个属性需要设置，否则导出后，外层会包有一层default
    libraryExport: 'default',
    // 路径
    path: resolve(PROJECT_PATH, './dist'),
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, '../src'),
      '@docs': resolve(__dirname, '../docs'),
      '@public': resolve(__dirname, '../public'),
      '@test': resolve(__dirname, '../test'),
    },
    extensions: ['.ts', '.tsx', '.js'],
  },
  plugins: [
    new WebpackBar({
      name: '正在卖力打包中~',
      color: '#fa8c16',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(ts)$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
