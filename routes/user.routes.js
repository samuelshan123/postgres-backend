module.exports = app => {
    const users = require("../controllers/user.controller.js");
  
    var router = require("express").Router();
  
    router.post("/create", users.create);
  
    router.get("/findall", users.findAll);
  
    router.get("/findone/:id", users.findOne);
  
    router.put("/:id", users.update);
  
    router.delete("/:id", users.delete);
  
    router.delete("/", users.deleteAll);

    router.get("/one2one", users.one2one);
  
    app.use("/api", router);
  };
  