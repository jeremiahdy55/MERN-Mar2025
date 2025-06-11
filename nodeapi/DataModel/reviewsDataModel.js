let mongooseObj = require("mongoose");
schemaObj = mongooseObj.Schema; //using the schema class from mongoose

//creates db with name product or opens a connection if already present
mongooseObj.connect("mongodb://127.0.0.1/data25"); 

let reviewsSchema = new schemaObj({
    userId: { type: mongooseObj.Schema.Types.ObjectId, ref: 'user', required: true },
    refModel: {type: String, required: true, enum: ['product', 'orders']},
    refObj: { type: mongooseObj.Schema.Types.ObjectId, required: true, refPath: 'refModel' },
    content: {type: String, required: true}
},
{
    versionKey: false //false - set to false then it wont create in mongodb, don't set it to true, if you want _v just dont add this
}
)

let ReviewsModel = mongooseObj.model("reviews", reviewsSchema); //product - collection name, pluralised by mongodb

module.exports = ReviewsModel; //with capability to retrieve save udpate queries with mongo db