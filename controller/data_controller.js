const Info = require("../services/data_services");
// console.log("Service object:", service);

class InfoController {
 constructor(){
    this.service = new Info();
    this.addInfo = this.addInfo.bind(this);
    this.getInfo = this.getInfo.bind(this);
    this.getInfoById = this.getInfoById.bind(this);
    this.updateInfo = this.updateInfo.bind(this);
    this.deleteInfo = this.deleteInfo.bind(this);
    // console.log("Service object:", this.service);
 }
 async addInfo(req, res) {
    const { id, first_name, last_name, email } = req.body;
    const addedInfo = await this.service.addInfo(id, first_name, last_name, email);
    return res.json(addedInfo.rows);
  }

 async getInfo(req, res) {
   const get = await this.service.getInfo(); 
   return res.json(get.rows);   
  }

 async getInfoById(req, res) {
    const id = req.params.id;

   const result = await this.service.getInfoById(id)
   return res.json(result.rows);
       
  }

  async updateInfo(req, res) {
    const id = req.params.id;
    const { first_name, last_name, email } = req.body;
  
    const updatedData = await this.service.updateInfo(id, first_name, last_name, email);
    return res.json(updatedData.rows);
  }

  async deleteInfo(req, res) {
    const id = req.params.id;

    const data = await this.service.deleteInfo(id)
    return res.send("data deleted successfully..!!");
     
  }
}

module.exports = new InfoController();