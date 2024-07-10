const {Router} = require("express");
const route = Router();

const controller = require("../controller/data_controller");

route.get("/" , controller.getInfo);
route.get("/:id" , controller.getInfoById);
route.post("/" , controller.addInfo);
route.put("/:id" , controller.updateInfo);
route.delete("/:id" , controller.deleteInfo);

module.exports = route;