// 아직 데이터베이스는 활용하지 않고 배열 활용. 새 유저가 가입하면 이 배열에 저장시킬거.
const users = [
    {
        id: 1,
        name: "김길동",
        email: "gildong@gmail.com",
        password: "pw123"
    },
    {
        id: 2,
        name: "홍코드",
        email: "hong@gmail.com",
        password: "hong123"
    }
];

const createUser = (req, res) => {
    // 요청 body: req.body 안의 data객체를 가져오는법(data라는 이름은 프론트가 주는 이름대로).이 데이터(객체)를 user에 저장
    const user = req.body.data; 
    console.log(user); // 받은 데이터 콘솔로 찍어서 확인

    users.push({
        id : user.id,
        name : user.name,
        email : user.email,
        password : user.password
    });
    console.log(users); // 잘 들어갔는지 확인

    res.json({massage: 'USER_CREATED'});
    // express를 이용하기때문에 JSON.stringify필요없이 응답객체의 json메소드 활용
}

module.exports = {createUser};