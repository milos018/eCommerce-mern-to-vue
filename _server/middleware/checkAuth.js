const { verify } = require('jsonwebtoken');

module.exports = (req, res, next) => {
	let token;
	if (req.headers.authorization) {
		token = req.headers.authorization.split(' ')[1];
	}

	if (!token) {
		return next(new Error('No auth headers'));
	}

	try {
		const decodedToken = verify(token, process.env.JWT_SECRET);
		req.userId = decodedToken.id;
		next();
	} catch (error) {
		return next(new Error('Error decoding token'));
	}
};
