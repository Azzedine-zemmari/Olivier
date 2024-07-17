const db = require("../config/db")

class EventModel{
    static async getEvents(){
        return new Promise((resolve)=>{
            const sql = "SELECT * FROM phenological_stages"
            db.query(sql,(err,result)=>{
                if(!err){
                    resolve(result);
                }
            })
        })
    }
}

module.exports = EventModel;