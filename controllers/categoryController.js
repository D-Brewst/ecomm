const db = require("../models");

module.exports = {
    addCategory: async (req, res) => {
        try {
          const newCategory = await db.Category.create(req.body);
    
          console.log(newCategory);
    
          res.json({
            newCategory: newCategory
          });
    
        } catch (err) {
          console.log("err", err);
        }
    },

    getCategories: async (req, res) => {
        try{
            const categories = await db.Category.find({});
            console.log(categories);
            res.status(200).json({
              categories
            });
        }
        catch (error){
            return res.status(500).send(error.message);
        }
      },

}