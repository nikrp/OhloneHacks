const express = require('express');
const http = require('http');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const server = http.createServer(app);
server.listen(5000, "localhost", () => {
    console.log("Server runnning on port 5000!");
});