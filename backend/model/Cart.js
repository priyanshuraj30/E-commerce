const mongoose = require('mongoose');
const products=require('./Product');
const schema = mongoose.Schema; 

const cart = new schema({
    user_id:{type:String},
    orderlist: [
        {
            product_id: {
                type: mongoose.Types.ObjectId, ref: `${products}`,
            }
        }
    ]
})

module.exports = mongoose.model('Cart', cart);