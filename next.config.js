module.exports = {
  target: 'serverless',
  webpack: function (config) {
    config.node.fs = 'empty';
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })
    return config
  },
}
