const express = require("express")
const app = express()

const port = 8080
//connect-history-api-fallback 该中间件的作用是当页面访问出现错误时重定向到 index.html 页面
let history = require('connect-history-api-fallback')

//重定向到index.html(解决直接输入链接或必须回到首页重新刷新才能正常访问之后页面访问不了的问题)
history({
  rewrites: [{
      from: /^\/libs\/.*$/,
      to: '/index.html'
    }]
});

app.use(history());

app.use(express.static('./dist'))

app.listen(port, () => {
  console.log('Listening at http://localhost:' + port)
})
