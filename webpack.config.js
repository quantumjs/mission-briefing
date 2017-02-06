var path = require("path");
var webpack = require("webpack");
var WebpackBuildNotifierPlugin = require("webpack-build-notifier");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const PATHS = {
  src: path.join(__dirname, './src'),
  build: path.join(__dirname, './build')
};

module.exports = {

  entry: {
    "mission-briefing": PATHS.src + '/MissionBriefing.ts'
  },
  output: {
    path: PATHS.build,
    filename: '[name].js',
    library: 'MissionBriefing',
    libraryTarget: 'umd'
  },
  devtool: "source-map",
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      },
      {
        test: /\.p?css$/,
        use: ExtractTextPlugin.extract({
          fallbackLoader: "style-loader",
          loader: "css-loader?importLoaders=1,url=false!postcss-loader"
        })
      }
    ]
  },
  resolve: {
    // you can now require('file') instead of require('file.js')
    extensions: ['.ts', '.js']
  },
  plugins: [
    new WebpackBuildNotifierPlugin({
      title: "My Project Webpack Build"
    }),
    new ExtractTextPlugin("mission-briefing.css"),

  ]
};
