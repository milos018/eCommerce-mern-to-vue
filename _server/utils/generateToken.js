const { sign } = require('jsonwebtoken');

module.exports = function generateToken(id) {
	return sign({ id }, process.env.JWT_SECRET, {
		expiresIn: '1h',
	});
};
