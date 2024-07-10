const service = require("../services/data_services");

class InfoController {
 
 async addInfo(req, res) {
    const { id, first_name, last_name, email } = req.body;
    const addedInfo = await service.addInfo(id, first_name, last_name, email)
    res.json(addedInfo.rows);
   
  }

 async getInfo(req, res) {
   const get = await service.getInfo()
      
    res.json(get.rows);
       
      
  }

 async getInfoById(req, res) {
    const id = req.params.id;

   const result = await service.getInfoById(id)
    res.json(result.rows);
       
  }

  async updateInfo(req, res) {
    const id = req.params.id;
    const { first_name, last_name, email } = req.body;
  
    const updatedData = await service.updateInfo(id, first_name, last_name, email);
    res.json(updatedData.rows);
  }

  async deleteInfo(req, res) {
    const id = req.params.id;

    const data = await service.deleteInfo(id)
    res.send("data deleted successfully..!!");
     
  }
}

module.exports = new InfoController();