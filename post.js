const {users} = require('./user')
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
    res.status(201).json({massage: 'postCreated'});
};

const getPosts = (req, res) => {
    const data = posts.map((post) => {
        const user = users.find((user) => post.userId == user.id);
        return {
            userId: post.userId,
            userName: user.name,
            postingId: post.id,
            postingTitle: post.title,
            postingContent: post.content
        }
    } );
    res.json({data: data});
}

module.exports = {createPost, getPosts};