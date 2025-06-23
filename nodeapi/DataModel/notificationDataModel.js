let mongooseObj = require("mongoose");
schemaObj = mongooseObj.Schema; //using the schema class from mongoose

//creates db with name product or opens a connection if already present
mongooseObj.connect("mongodb://127.0.0.1/data25"); 

let notificationSchema = new schemaObj({
    userId: { type: mongooseObj.Schema.Types.ObjectId, ref: 'user', required: true },
    notifications:[
        {
            type: {type: String, required: true, enum: ['dynamic', 'static'], default: "dynamic"},
            navigateTo : {type: String, required : true},
            content: {type:String, required : true}
        }
    ]
},
{
    versionKey: false //false - set to false then it wont create in mongodb, don't set it to true, if you want _v just dont add this
}
)

let NotificationsModel = mongooseObj.model("notifications", notificationSchema);//product - collection name, pluralised by mongodb

module.exports = NotificationsModel; //with capability to retrieve save udpate queries with mongo db