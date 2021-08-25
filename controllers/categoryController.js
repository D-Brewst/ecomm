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

}