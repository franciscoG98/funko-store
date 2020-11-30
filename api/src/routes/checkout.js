const server = require('express').Router();
const stripe = require("stripe")("sk_test_51HsVfCGPp99r0B7MKoAWM4zz24fYa7P7NtTtA6H7T2UjWBJ8MhzzCTKMeqcLs4h4KNHY4ggic9zAtsKI6MP27qdw00QiWAaPLs");
const {v4 : uuidv4} = require('uuid') 

server.post("/", async (req, res) => {
    console.log("Request:", req.body);
  
    let error;
    let status;
    try {
      const { product, token } = req.body;
  
      const customer = await stripe.customers.create({
        email: token.email,
        source: token.id
      });
  
      const idempotency_key = uuidv4();
      const charge = await stripe.charges.create(
        {
          amount: 200 * 100,
          currency: "usd",
          customer: customer.id,
          receipt_email: token.email,
          description: `Purchased the ${"Enzo"}`,
          shipping: {
            name: token.card.name,
            address: {
              line1: token.card.address_line1,
              line2: token.card.address_line2,
              city: token.card.address_city,
              country: token.card.address_country,
              postal_code: token.card.address_zip
            }
          }
        },
        {
          idempotency_key
        }
      );
      console.log("Charge:", { charge });
      status = "success";
    } catch (error) {
      console.error("Error:", error);
      status = "failure";
    }
    res.json({ error, status });
  
    
  });




module.exports = server