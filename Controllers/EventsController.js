const EventM = require("../model/EventModel");

class EventsController{
    static async getAllEvents(req,res){
        const result = await EventM.getEvents();
        res.render("Dashboard",{data:result});
    }
    static async InsertStade(req,res){
        // res.json(req.body);
        const {stade,description,file,created_At} = req.body;
        const result = await EventM.AddEvents(stade,description,file,created_At);
        res.json(result);
        if(result){
            res.render("Dashboard",{data:result});
        }
    }
}

module.exports = EventsController