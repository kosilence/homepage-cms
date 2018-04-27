var path = require('path');

module.exports = {
	server_port: '3001',
	// MongoDB 配置
	db: 'mongodb://mongo:27017/homepage',
	// Auth jwt 验证密码
	jwt_secret: 'secret',
	admin: {
		username: 'admin',
		password: 'password'
	},
	blog: {
		host: 'blog.cosin.tk',
		path: '/index.html'
	}
}
