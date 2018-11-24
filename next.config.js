const withTypescript = require('@zeit/next-typescript');

const withSourceMaps = require('@zeit/next-source-maps');

const withCSS = require('@zeit/next-css')

module.exports = withSourceMaps(withTypescript(withCSS()));
