require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");
const product_controller = require("./products_controller");

const app = express();

app.use(json());

massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    //   console.log(dbInstance);
    app.set("db", dbInstance);
  })
  .catch(err => console.log(err));

app.post("/api/product", product_controller.create);
app.get("/api/products", product_controller.getAll);
app.get("/api/product/:id", product_controller.getOne);
app.put("/api/product/:id", product_controller.update);
app.delete("/api/product/:id", product_controller.delete);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`I am listennning at port ${port}!!!`));
