const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const usersSeed = require('./data/usersSeed');
const productsSeed = require('./data/productsSeed');

require('./data/db.js')();

// models
const UserModel = require('./models/model.User');
const ProductModel = require('./models/model.Product');
const OrderModel = require('./models/model.Order');

const importData = async () => {
	try {
		await UserModel.deleteMany();
		await ProductModel.deleteMany();
		await OrderModel.deleteMany();

		await UserModel.insertMany(usersSeed);
		const adminUser = await UserModel.findOne({ isAdmin: true });
		const sampleProducts = productsSeed.map((product) => {
			return { ...product, user: adminUser };
		});
		await ProductModel.insertMany(sampleProducts);
		process.exit();
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

const destroyData = async () => {
	try {
		await UserModel.deleteMany();
		await ProductModel.deleteMany();
		await OrderModel.deleteMany();

		process.exit();
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

if (process.argv[2] === '-d') {
	destroyData();
} else {
	importData();
}
