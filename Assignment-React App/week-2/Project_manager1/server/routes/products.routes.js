const productController= require("../controllers/products.controller")

module.exports = (app)=>{
    app.get("/api/products", productController.findAllProducts)
    app.post("/api/products",productController.createProducts)
    app.post("/api/product/:id",productController.updateProduct)
    app.delete("/api/products/:id",productController.deleteProduct)
}

// Go to server.js ===>