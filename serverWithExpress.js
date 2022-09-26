const http = require('http');
const express = require('express');
const {sendProducts} = require('./sendProducts2');

// express로 앱 생성
const app = express();
// 자바스크립트 객체들을 모두 json으로 변환하라고 미리 알려준다. JSON.stringify()를 쓰지 않아도 되도록.
app.use(express.json());

// express로 만든 앱에 해당 url로 get요청이 들어왔을시 이렇게 동작하겠다
// app.http메서드(url, 콜백함수)
app.get('/ping', (req, res) => {
    res.json({message: '/ pong'});
});

app.post('/signup', (req, res) => {res.json({message: '회원가입 완료!'})});
app.post('/login', (req, res) => {res.json({message: '로그인 완료!'})});
app.get('/products', sendProducts);

// 원래는 http.createServer에 모든걸 다 넣어줬는데 위에서 분리를 다 시켜놓고 인자로 app만 준다.
const server = http.createServer(app);

server.listen(8000, () => {
    console.log('server is listening on PORT 8000');
})