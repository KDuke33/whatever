const express = require('express')
const app = express();
const cartItems = require("./ cartItems")

app.use(express.json());
app.get("/", (req, res) => {
    res.send('howdy')
})
app.use("/cart-items", cartItems);

const port = 3000;
app.listen(port, () => {
    console.log(`listening on port: ${port}`)
})