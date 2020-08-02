const HtmlWebpackPlugin = require('html-webpack-plugin');
const tsImportPlugin = require("ts-import-plugin");
const path = require('path');

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production';
  const distFolder = 'docs';
  const distDir = `${__dirname}/${distFolder}`;
  

  this.devServer = {
    contentBase: `${__dirname}/books`,
    port: 320,
    historyApiFallback: true,
  };

  if (!isProd) {
    this.devtool = 'source-map';
  }

  this.entry = {
    'dist': path.resolve(__dirname, './src/index.tsx'),
  };

  this.module = {
    rules: [{
      test: /\.md$/,
      loader: 'raw-loader'
    }, {
      test: /\.(?:t|j)sx?$/,
      oneOf: [{
        resourceQuery: /^\?txt$/,
        loader: 'raw-loader',
      }, {
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
          getCustomTransformers: () => {
            return {
              before: [
                tsImportPlugin({
                  libraryName: "antd",
                  libraryDirectory: "es",
                  style: "css"
                })
              ]
            };
          },
          compilerOptions: {
            module: 'ES2015',
            target: 'ES5'
          },
        }
      }],
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      use: ["style-loader", "css-loader?url=false"]
    },]
  };

  this.plugins = [
    new HtmlWebpackPlugin({
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        minifyCSS: true
      },
      filename: `${isProd ? `${distDir}/` : ''}index.html`,
      template: 'src/index.html'
    }),
  ];

  this.output = {
    filename: `js/boundle.js`,
    path: `${__dirname}/${distFolder}`,
    publicPath: './',
  };

  this.resolve = {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.md'],
    alias: {
      '@': __dirname,
    },
  };

  return this;
};