/* eslint-disable @typescript-eslint/no-var-requires, import/no-extraneous-dependencies */
const path = require('path');
/* eslint-enable @typescript-eslint/no-var-requires, import/no-extraneous-dependencies */

const rootPath = path.resolve(__dirname);
const toolsPath = path.join(rootPath, 'tools');
const webpackPath = path.join(toolsPath, 'webpack');
const srcPath = path.join(rootPath, 'src');
const outPath = path.join(rootPath, 'out');
const assetsPath = path.join(srcPath, 'assets');
const staticFilesPath = path.join(rootPath, 'static-files');
const fontsPath = path.join(staticFilesPath, 'fonts');
const imgPath = path.join(staticFilesPath, 'img');

module.exports = {
    output: {
        path: outPath,
        js: {
            dev: {
                fileName: 'js/bundle.js',
                chunkFilename: 'js/chunks/[name].[chunkhash:4].chunk.js',
            },
        },
        css: {
            dev: {
                fileName: 'css/[name].css',
                chunkFilename: '[id].css',
            },
            prod: {
                fileName: 'css/[name].[contenthash:4].css',
                chunkFilename: '[id].[contenthash:4].css',
            },
        },
        htmlFilePath: path.resolve(outPath, 'index.html'),
    },
    tools: {
        path: toolsPath,
        webpack: {
            path: webpackPath,
            templateFilePath: path.resolve(webpackPath, 'template.html'),
        },
    },
    source: {
        path: srcPath,
        filePath: path.resolve(srcPath, 'index.tsx'),
    },
    root: {
        path: rootPath,
    },
    fonts: {
        path: fontsPath,
    },
    image: {
        path: imgPath,
    },
    staticFiles: {
        path: staticFilesPath,
    },
    assets: {
        path: assetsPath,
    }
};