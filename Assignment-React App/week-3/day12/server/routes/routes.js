const noteController= require("../controllers/noteControllers")
module.exports = (app)=>
{
    app.get("/api/notes",noteController.findAll)
    app.post("/api/notes",noteController.create)
    app.get("/api/notes/:id",noteController.findOne)
    app.put("/api/notes/:id",noteController.update)
    app.delete("/api/notes/:id",noteController.delete)
}
