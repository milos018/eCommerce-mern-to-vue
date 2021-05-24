const { model, Schema } = require('mongoose');
const { compare } = require('bcryptjs');

const UserSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		isAdmin: {
			type: Boolean,
			required: true,
			default: false,
		},
	},
	{
		timestamps: true,
	},
);

UserSchema.methods.matchPassword = async function (enteredPassword) {
	return await compare(enteredPassword, this.password);
};

module.exports = model('User', UserSchema);
