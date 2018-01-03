import path from 'path';

const port = '3000';

module.exports = {
    port: port,
    // MongoDB 配置
    db: 'mongodb://mongodb:27017/homepage',
    // Auth jwt 验证密码
    jwt_secret: 'some_secret',
    admin: {
        username: 'admin',
        password: 'password'
    },
    bcrypt: {
      saltRounds: 10
    }
}
