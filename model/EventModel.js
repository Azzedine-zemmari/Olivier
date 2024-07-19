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
    static async AddEvents(name,img,description,time){
        const sql = `INSERT INTO phenological_stages(name,description,image_url,ceated_at) VALUES ('${name}','${img}','${description}','${time}')`;
        return new Promise((resolve)=>{
            db.query(sql,(err,result)=>{
                if(!err){
                    resolve(result);
                }
            })
        })
    }
}

module.exports = EventModel;