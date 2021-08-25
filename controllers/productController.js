const db = require("../models");

module.exports = {
    createProducts: async (req, res) => {
        try {
          const newProduct = await db.Product.create(req.body);
    
          console.log(newProduct);
    
          res.json({
            newProduct: newProduct
          });
    
        } catch (err) {
          console.log("err", err);
        }
    },
    getProducts: async (req, res) => {
      try{
          const products = await db.Product.find({});
          console.log(products);
          res.status(200).json({
            products
          });
      }
      catch (error){
          return res.status(500).send(error.message);
      }
    },


}