const path = require('path');
var React = require('react');
module.exports = {
    mode: 'production',
    entry: './js/dist/main.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'prod/js/')
    }
};