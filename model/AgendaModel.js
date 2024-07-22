const db = require("../config/db")

class AgendaModel{
    static async getAgenda(){
        return new Promise((resolve)=>{
            const sql = "SELECT * FROM agenda_events"
            db.query(sql,(err,result)=>{
                if(!err){
                    resolve(result);
                }
            })
        })
    }
}

module.exports = AgendaModel