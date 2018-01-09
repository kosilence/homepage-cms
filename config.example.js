var path = require('path');

module.exports = {
	server_port: '3001',
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
	},
	blog: {
		host: 'blog.cosin.tk',
		path: '/index.html'
	}
}
