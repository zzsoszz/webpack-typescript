module.exports = {
  entry: './main.ts',
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  module: {
    loaders: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader` "bundle-loader",
      { test: /\.ts$/, loaders: ["bundle-loader","ts-loader"]}
    ]
  }
}