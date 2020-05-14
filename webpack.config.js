new function(HtmlWebpackPlugin, DIR_NAME, tsImportPlugin, path){
  module.exports = (env, argv) => {
    const isProd = argv.mode === 'production';
    const distDir = `${DIR_NAME}/dist`;

    this.devServer = {
      contentBase: `${DIR_NAME}/books`,
      port: 320,
      historyApiFallback: true
    };
  
    if (!isProd) {
      this.devtool = 'source-map';
    }
  
    this.entry = {
      'dist': path.resolve(DIR_NAME, './src/index.tsx')
    };
  
    this.module = {
      rules: [{
        test: /\.md$/,
        use: 'raw-loader'
      }, {
        test: /\.tsx?$/,
        oneOf: [{
          resourceQuery: /txt/,
          use: 'raw-loader'
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
              }
            },
            compilerOptions: {
              module: 'es2015'
            }
          }
        }],
        exclude: /node_modules/
      }, {
        test: /\.css$/,
        use: ["style-loader", "css-loader?url=false"]
      }]
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
      })
    ];
  
    this.output = {
      filename: 'dist/js/boundle.js',
      path: DIR_NAME,
      publicPath: '/'
    };
  
    this.resolve = {
      extensions: ['.ts', '.tsx', '.js', '.md'],
      alias: {
        '@': DIR_NAME,
      }
    };

    return this;
  };
}(
  require('html-webpack-plugin'),
  __dirname,
  require("ts-import-plugin"),
  require('path')
);