'use strict';

const path = require('path');
const dir = './lib';

const {env} = process;
const isDev = env.NODE_ENV === 'development';

const dist = path.resolve(__dirname, 'dist');
const devtool = 'source-map';

const notEmpty = (a) => a;
const clean = (array) => array.filter(notEmpty);

const rules = [{
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
}];

const filename = `[name]${!isDev ? '.min' : ''}.js`;

module.exports = {
    devtool,
    entry: {
        fullstore: `${dir}/fullstore.js`,
    },
    output: {
        library: 'fullstore',
        filename,
        path: dist,
        pathinfo: true,
        libraryTarget: 'var',
        devtoolModuleFilenameTemplate,
    },
    module: {
        rules,
    },
};

function devtoolModuleFilenameTemplate(info) {
    const resource = info.absoluteResourcePath.replace(__dirname + path.sep, '');
    return `file://fullstore/${resource}`;
}

