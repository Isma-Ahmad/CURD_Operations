const pool = require("../context/db");

class Info {
  constructor() {
    this.pool = pool;
  }

  addInfo(id, first_name, last_name, email) {
    return this.pool.query(
      `INSERT INTO info (id, first_name, last_name, email) VALUES ('${id}', '${first_name}', '${last_name}', '${email}') RETURNING *`
    )
    
  }

  getInfo() {
    return this.pool.query("SELECT * FROM info ORDER BY id ASC")
    
  }

  getInfoById(id) {
    return this.pool.query(`SELECT * FROM info WHERE id = '${id}'`)
  
  }

  updateInfo(id, first_name, last_name, email) {
    return this.pool.query(
      `UPDATE info SET first_name = '${first_name}', last_name = '${last_name}', email = '${email}' WHERE id = '${id}' RETURNING *`
    )
    
  }

  deleteInfo(id) {
    return this.pool.query(`DELETE FROM info WHERE id = '${id}'`);
  }
}

module.exports = Info;