const stripe = require('../stripe.js');

module.exports = {
    checkoutSession: async (req, res) => {
        const url = process.env.WEB_APP_URL;
        console.log(process.env.SECRET_KEY)
        console.log(url);
        const {line_items, customer_email} = req.body;

        if(!line_items || !customer_email){
            return res.status(400).json({error: "required session parameters are missing"})
        }

        let session;

        try {
            session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                mode: 'payment',
                line_items,
                customer_email,
                success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: `${url}/canceled`,
                shipping_address_collection: { allowed_countries: ['GB', 'US'] }
            })
            res.status(200).json({sessionId: session.id});
        } catch(err) {
            console.log(err);
            res.status(400).json({err: 'Error, unable to create session'});
        }
    }
}