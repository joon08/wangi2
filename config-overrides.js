const {
  override,
  fixBabelImports,
  addPostcssPlugins,
  addLessLoader,
  addWebpackAlias
} = require('customize-cra')
const { resolve } = require('path')

module.exports = override(
  //按需加载
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  }),
  addLessLoader({}),
  addPostcssPlugins([
    require('postcss-pxtorem')({
      rootValue: 37.5,
      propList: ['*']
    })
  ]),
  //路径别名
  addWebpackAlias({
    $api: resolve(__dirname, './src/api'),
    $comp: resolve(__dirname, './src/components'),
    $conf: resolve(__dirname, './src/config'),
    $cont: resolve(__dirname, './src/containers'),
    $redux: resolve(__dirname, './src/redux'),
    $utils: resolve(__dirname, './src/utils'),
    $assets: resolve(__dirname, './src/assets')
  })
)
