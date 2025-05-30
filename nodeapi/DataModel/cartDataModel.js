let mongooseObj = require("mongoose");
schemaObj = mongooseObj.Schema; //using the schema class from mongoose

//creates db with name product or opens a connection if already present
mongooseObj.connect("mongodb://127.0.0.1/data25"); 

let cartSchema = new schemaObj({
    userId: { type: mongooseObj.Schema.Types.ObjectId, ref: 'user', required: true },
    items:[
        {
            name : {type: String, required : true},
            desc: {type:String, required : true},
            rating: {type:String, default:"Not rated"},
            price: {type:String, default:"FREE!"},
            qty: {type: Number, default:1},
            category: {type:String, default:"Default category"}
        }
    ]
},
{
    versionKey: false //false - set to false then it wont create in mongodb, don't set it to true, if you want _v just dont add this
}
)

let CartModel = mongooseObj.model("cart", cartSchema);//product - collection name, pluralised by mongodb

module.exports = CartModel; //with capability to retrieve save udpate queries with mongo db