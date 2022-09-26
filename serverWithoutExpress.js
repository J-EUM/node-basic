// http통신을 하기위해 http모듈을 불러온다
const http = require('http');

// http의 createServer함수로 서버를 만들어서 server변수에 담아줌
const server = http.createServer((req, res) => {
    // 요청이 오면 동작.
    console.log('request received');

    // 응답의 형태가 json이라는 것을 알려줌
    res.setHeader('Content-Type', 'application/json');
    // 응답으로 보내주는 데이터
    res.end(JSON.stringify({ message: "Welcome to server! Http server without express" }));
})
// 서버를 켜는 명령어 listen 8000번 포트에서 켠다.
server.listen(8000, () => (
    // 서버가 켜지면 동작
    console.log("server is running on PORT 8000")
))