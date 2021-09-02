const stripe = require('../stripe.js');

const calculateAmount = (cart) => {
    return cart.reduce((total, product) => {
        return total + product.price * product.quantity;
    }, 0) * 100;
}

module.exports = {
    paymentIntent: async (req, res) => {
        const {cart, description, email, shipping} = req.body;
        let paymentIntent;

        try {
            paymentIntent = await stripe.paymentIntents.create({
                amount: calculateAmount(cart),
                currency: 'usd',
                description,
                payment_method_types: ['card'],
                email,
                shipping
            })
            res.status(200).json({clientSecret: paymentIntent.client_secret})
        }
        catch (err) {
            console.log(err);
            res.status(400).json({err: 'Error, unable to create payment intent.'})
        }
    }
}