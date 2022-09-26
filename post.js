const posts = [
    {
        id: 1,
        title: "간단한 HTTP API 개발 시작!",
        content: "Node.js에 내장되어 있는 http 모듈을 사용해서 HTTP server를 구현.",
        userId: 1,
    },
    {
        id: 2,
        title: "HTTP의 특성",
        content: "Request/Response와 Stateless!!",
        userId: 1,
    },
];

const createPost = (req, res) => {
    const {id, title, content, userId} = req.body.data;
    posts.push({id, title, content, userId});
    res.json({massage: 'postCreated'});
};

module.exports = {createPost};