const sendProducts = (res) => {
    res.end(JSON.stringify({
        products: [{
            id: 1,
            productName: "node",
            description: "node.js is awsome"
        },{
            id: 2,
            productName: "express",
            description: "express is a server-side framework for node.js"
        }]
    }))
}
module.exports = {sendProducts} // serverWithoutExpress,js에서 사용하기 위해 모듈로 내보내기