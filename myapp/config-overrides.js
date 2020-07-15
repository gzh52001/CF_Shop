const { injectBabelPlugin } = require('react-app-rewired');
module.exports = function override(config, env) {
    // 修改配置
    config.resolve.alias['@'] = path.join(__dirname, './src/')

    config = injectBabelPlugin([
        "@babel/plugin-proposal-decorators", { "legacy": true }
    ], config);

    return config;
}