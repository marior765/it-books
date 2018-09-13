module.exports = {
  entry: ['babel-polyfill'],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.css$/,
          use: [ "style-loader", "css-loader" ]
        },
        {
          test: /\.scss$/,
          use: [
            "style-loader",
            "css-loader",
            "sass-loader"
          ]
        },
        {
          test: /\.svg$/,
          loader: "svg-inline-loader"
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {}
            }
          ]
        }
      ]
    }
  };