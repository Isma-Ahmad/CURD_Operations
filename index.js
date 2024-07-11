const express = require("express");
const infoRoutes = require("./routes/data_routes")
const app = express();
const port = 9000;
app.use(express.json());

// const infoRoutes = new InfoRoutes();
app.use('/', infoRoutes.getRouter());

app.listen(port , ()=> console.log(`sever is start ${port}`));