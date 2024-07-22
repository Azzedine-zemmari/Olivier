const Agenda = require("../model/AgendaModel");

class AgendaController{
    static async getAllAgenda(req,res){
        const result = await Agenda.getAgenda();
        res.render("Agenda",{data:result});
    }
}

module.exports = AgendaController