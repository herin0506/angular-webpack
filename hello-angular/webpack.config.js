module.exports = (_env_, argv) => {
    argv.mode = argv.mode ? argv.mode : "development";
    return require(`./config/webpack.${argv.mode}.js`)();
}