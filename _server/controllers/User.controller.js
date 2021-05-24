const UserModel = require('../models/User.model');
const generateToken = require('../utils/generateToken');
const { hash } = require('bcryptjs');

// @desc Login User & Send Token
// @route GET /api/v1/user/login
// @access Private

exports.loginUser = async (req, res, next) => {
	const { email, password } = req.body;

	try {
		const foundUser = await UserModel.findOne({ email: email });
		if (foundUser && (await foundUser.matchPassword(password))) {
			res.status(200).json({
				userId: foundUser._id,
				userEmail: foundUser.email,
				userIsAdmin: foundUser.isAdmin,
				token: generateToken(foundUser._id),
			});
		} else {
			res.status(401);
			return next(new Error('User Not Authorized'));
		}
	} catch (error) {
		return next(error);
	}
};

// @desc Create new User & Send token
// @route POST /api/v1/user/profile
// @access Private

exports.createUserProfile = async (req, res, next) => {
	const { name, email, password } = req.body;

	let foundUser;
	try {
		foundUser = await UserModel.findOne({ email: email });
	} catch (error) {
		return next(new Error('Could not fetch user data'));
	}

	if (foundUser) {
		console.log(foundUser);
		return next(new Error('Could not proceed'));
	}

	let hashedPassword;
	try {
		hashedPassword = await hash(password, 10);
	} catch (error) {
		return next(new Error('Could not has password'));
	}

	const newUser = new UserModel({
		name,
		email,
		password: hashedPassword,
	});

	let savedProfile;

	try {
		savedProfile = await newUser.save();
	} catch (error) {
		return next(new Error('Could not save new user'));
	}

	res.status(201).json({
		_id: savedProfile._id,
		name: savedProfile.name,
		email: savedProfile.email,
		isAdmin: savedProfile.isAdmin,
		token: generateToken(savedProfile._id),
	});
};

// @desc Get user profile details
// @route GET /api/v1/user/profile
// @access Private

exports.getUserProfile = async (req, res, next) => {
	let profile;
	try {
		profile = await UserModel.findById(req.userId).select('-password');
	} catch (error) {
		return next(new Error('Could not fetch user'));
	}

	if (!profile) return next(new Error('No profile with this ID'));

	res.json(profile);
};

exports.deleteUserProfile = async (req, res, next) => {
	let foundProfile;
	try {
		foundProfile = await UserModel.findByIdAndDelete(req.userId);
	} catch (error) {
		return next(new Error('Could not get user data'));
	}

	if (!foundProfile) return next(new Error('Not user with this data'));
	res.json({});
};
