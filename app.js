const http = require('http');
const express = require('express');
const {createUser} = require('./user');
const {createPost} = require('./post');

const app = express();
app.use(express.json());

app.post('/signup', createUser);
app.post('/post', createPost);

const server = http.createServer(app);
server.listen(8000, () => {});