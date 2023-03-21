const jokeController= require("../controllers/jokeControllers")
module.exports = (app)=>
{
    app.get("/api/jokes",jokeController.findAll)
    app.post("/api/jokes",jokeController.create)
    app.get("/api/jokes/:id",jokeController.findOne)
    app.put("/api/jokes/:id",jokeController.update)
    app.delete("/api/jokes/:id",jokeController.delete)
}
