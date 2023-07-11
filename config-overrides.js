var path = require('path');
const { override, fixBabelImports, addWebpackAlias } = require('customize-cra');

module.exports = function(config, env) {
  return Object.assign(
    config,
    override(
      fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
      }),
      // add an alias for "our" imports
      addWebpackAlias({
        '@tminds/assets': path.resolve(__dirname, 'src/assets'),
        '@tminds/components': path.resolve(__dirname, 'src/components'),
        '@tminds/config': path.resolve(__dirname, 'src/config'),
        '@tminds/containers': path.resolve(__dirname, 'src/containers'),
        '@tminds/redux': path.resolve(__dirname, 'src/redux'),
        '@tminds/lib': path.resolve(__dirname, 'src/library'),
        '@tminds/ui': path.resolve(__dirname, 'src/UI'),
        '@tminds/modules': path.resolve(__dirname, 'src/modules'),
      })
      
    )(config, env)
  );
};
