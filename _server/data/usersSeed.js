const { hashSync } = require('bcryptjs');

const users = [
	{
		name: 'Admin User',
		email: 'admin@thissite.com',
		password: hashSync('test123'), // default salt to 10
		isAdmin: true,
	},
	{
		name: 'Steve',
		email: 'steve@web.com',
		password: hashSync('test123'),
	},
	{
		name: 'Caron',
		email: 'caron@input.io',
		password: hashSync('test123'),
	},
];

module.exports = users;
