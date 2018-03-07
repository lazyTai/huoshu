var express = require('express');
var proxy = require('http-proxy-middleware');


var app = express();

app.use('/dev/huoshu/public/index/comment/read', function (req, res) {
    res.send(require('./mock_json/dev.huoshu.public.index.comment.read'))
})


app.use('/', proxy({
    target: 'http://localhost/', changeOrigin: true,
    pathRewrite: {
        // '^/huoshu/public/index/comment/read': "/"    // rewrite path 
    },
    router: {
        '/huoshu/public/index/comment/read': 'http://localhost:8080/dev/huoshu/public/index/comment/read'
    }
}))



app.listen(8080);