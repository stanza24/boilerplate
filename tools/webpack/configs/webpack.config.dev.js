/* eslint-disable @typescript-eslint/no-var-requires */
const appConfig = require('../../../config');
const webPackConfigs = require('../configs');
const plugins = require('../plugins');
/* eslint-enable @typescript-eslint/no-var-requires */

module.exports = {
    context: __dirname,
    entry: {
        app: appConfig.source.filePath,
    },
    devtool: 'source-map',
    optimization: {
        namedModules: true,
        noEmitOnErrors: true,
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all',
                },
            },
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                ...webPackConfigs.loaderConfig.javascript,
            },
            {
                test: /\.(ts|tsx)?$/,
                ...webPackConfigs.loaderConfig.typeScript,
            },
            {
                test: /\.(svg|jpg|jpeg|png)$/,
                ...webPackConfigs.loaderConfig.image,
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                ...webPackConfigs.loaderConfig.fonts,
            },
            {
                test: /\.css$/,
                ...webPackConfigs.loaderConfig.css,
            },
            {
                test: /\.less$/,
                ...webPackConfigs.loaderConfig.less,
            },
        ],
    },
    output: {
        path: appConfig.output.path,
        filename: appConfig.output.js.dev.fileName,
        chunkFilename: appConfig.output.js.dev.chunkFilename,
    },
    plugins: [...plugins],
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
};