const express = require('express');
const InfoController = require('../controller/data_controller');

class InfoRoutes {
  constructor() {
    this.router = express.Router();
    this.controller = new InfoController();
    this.initRoutes();
  }

  initRoutes() {
    this.router.post('/', this.controller.addInfo.bind(this.controller));
    this.router.get('/', this.controller.getInfo.bind(this.controller));
    this.router.get('/:id', this.controller.getInfoById.bind(this.controller));
    this.router.put('/:id', this.controller.updateInfo.bind(this.controller));
    this.router.delete('/:id', this.controller.deleteInfo.bind(this.controller));
  }

  getRouter() {
    return this.router;
  }
}

module.exports = new InfoRoutes();