// http통신을 하기위해 http모듈을 불러온다
const http = require('http');
// sendProducts를 가져와서 쓰기위한 코드. require('sendProducts가있는 파일경로')
const {sendProducts} = require('./sendProducts');

// http의 createServer함수로 서버를 만들어서 server변수에 담아줌
const server = http.createServer((req, res) => {
    // url = req.url, method = req.method(구조분해할당)
    const {url, method} = req;
    // 응답의 형태가 json이라는 것을 알려줌
    res.setHeader('Content-Type', 'application/json');

    if (url === '/ping'){
        return res.end(JSON.stringify({message: "/ pong"}))
    }
    if (url === '/signup' && method === 'POST') return res.end(JSON.stringify({message: '회원가입 완료!'}))
    if (url === '/login' && method === 'POST') return res.end(JSON.stringify({message: '로그인 완료!'}))
    if (url === '/products' && method === 'GET')return sendProducts(res)

    // 응답으로 보내주는 데이터
    res.end(JSON.stringify({ message: 'this response answers to every request' }));
})
// 서버를 켜는 명령어 listen 8000번 포트에서 켠다.
server.listen(8000, () => (
    // 서버가 켜지면 동작
    console.log("server is running on PORT 8000")
))