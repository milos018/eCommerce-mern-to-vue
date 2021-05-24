const { Router } = require('express');
const router = Router();
const checkAuth = require('../middleware/checkAuth');

const {
	loginUser,
	getUserProfile,
	createUserProfile,
	deleteUserProfile,
} = require('../controllers/User.controller');

// public routes

router.post('/login', loginUser);

// protected routes
router.use(checkAuth);
router
	.route('/profile')
	.get(getUserProfile)
	.post(createUserProfile)
	.delete(deleteUserProfile);

module.exports = router;
