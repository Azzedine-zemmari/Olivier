const EventM = require("../model/EventModel");

class EventsController{
    static async getAllEvents(req,res){
        const result = await EventM.getEvents();
        res.render("Dashboard",{data:result});
    }
}

module.exports = EventsController