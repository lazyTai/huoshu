var path = require('path')

module.exports = {
    entry: {
        index: path.resolve(__dirname,
            '../application/index/view/index/index.js'),
        my_self: path.resolve(__dirname,
            '../application/index/view/my_self/index.js'),
        login: path.resolve(__dirname,
            '../application/index/view/login/index.js'),
        test: path.resolve(__dirname,
            '../application/index/view/test/index.js'),
        article_detail: path.resolve(__dirname,
            '../application/index/view/article/detail.js'),
        article_edit: path.resolve(__dirname,
            '../application/index/view/article/edit.js'),
    },
    output: {
        path: path.resolve(__dirname, '../public/static/js/'),
        filename: '[name]/[name].js',
        publicPath: 'public/static/js/',
    }
}