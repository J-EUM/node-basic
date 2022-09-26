const sendProducts = (req, res) => {
    res.json({ //express를 사용하면서 JSON.stringify를 사용하지 않고 res객체의 json메서드를 활용한다.
        products: [{
            id: 1,
            productName: "node",
            description: "node.js is awsome"
        },{
            id: 2,
            productName: "express",
            description: "express is a server-side framework for node.js"
        }]
    })
}
module.exports = {sendProducts}