const Authentication = require("../controllers/userController");
const passportService = require("../authentication/passport");
const Products = require("../controllers/productController");
const Category = require("../controllers/categoryController");
const passport = require("passport");
const stripeAPI = require("../controllers/checkoutController");
const Payment = require("../controllers/paymentIntentController");

const requireLogin = passport.authenticate("local", {session: false});
const requireAuth = passport.authenticate("jwt", {session: false});

module.exports = function(app) {
    app.post("/login", requireLogin, Authentication.login);
    app.post("/signup", Authentication.createNew);
    app.post("/addproduct", Products.createProducts);
    app.get("/products", Products.getProducts);
    app.post("/addcategory", Category.addCategory);
    app.get("/categories", Category.getCategories);
    app.post("/checkout", stripeAPI.checkoutSession);
    app.post("/payment", Payment.paymentIntent);
}