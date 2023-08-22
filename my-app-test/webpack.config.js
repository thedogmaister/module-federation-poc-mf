// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

// module.exports = {
//     mode: 'development',
//     devServer: {
//       port: 8080,
//     },
//     module: {
//       rules: [
//         {
//           /* The following line to ask babel 
//                to compile any file with extension
//                .js */
//           test: /\.js?$/,
//           /* exclude node_modules directory from babel. 
//               Babel will not compile any files in this directory*/
//           exclude: /node_modules/,
//           // To Use babel Loader
//           loader:
//             'babel-loader',
//           options: {
//             presets: [
//               '@babel/preset-env' /* to transfer any advansed ES to ES5 */,
//               '@babel/preset-react',
//             ], // to compile react to ES5
//           },
//         },
//       ],
//     },
//     plugins: [
//       new ModuleFederationPlugin(
//         {
//           name: 'my-app-test',
//           filename: 'remoteEntry.js',
//           exposes: {
//             './Button': './src/components/button.tsx',
//           },
//         }
//       ),
//       new HtmlWebpackPlugin({
//         template:
//           './public/index.html',
//       }),
//     ],
//   };


const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;
module.exports = {
  output: {
    publicPath: "http://localhost:8080/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 8080,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "my_app_test",
      filename: "remoteEntry.js",
      remotes: {
      },
      exposes: {
        './Button': './src/components/button.tsx',
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./public/index.html",
    }),
  ],
};