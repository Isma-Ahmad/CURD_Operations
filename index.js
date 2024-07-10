const express = require("express");
const info = require("./routes/data_routes")
const app = express();
const port = 9000;
app.use(express.json());

app.use("/" , info);

app.listen(port , ()=> console.log(`sever is start ${port}`));