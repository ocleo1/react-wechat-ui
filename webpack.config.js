const path = require('path');

const env = process.env.NODE_ENV;
const argv = process.argv

let entry = './index';
if (argv[argv.length - 2] === '--entry') {
  entry = argv[argv.length - 1]
}

let config = {
  mode: env,
  entry: entry,
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: "babel-loader"
      }
    ]
  }
};

if (env === 'development') {
  config.devtool = "source-map";
}

module.exports = config;
