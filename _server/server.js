const { createServer } = require('http')
require('dotenv').config()

const app = require('./app')
const server = createServer(app)

const PORT = process.env.PORT;
server.listen(PORT, () => console.log("Listing on Port", PORT))