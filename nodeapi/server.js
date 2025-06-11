let express = require('express')
const app = express() //when we invoke it creates an express application which helps to build a web server

const defaultRoute = require("./route/defaultRoute")
const defaultApp = express();

const userRoute = require("./route/userRoute")
const userApp = express();

const productRoute = require("./route/productRoute")
const productApp = express();

const cartRoute = require("./route/cartRoute")
const cartApp = express();

const orderRoute = require("./route/orderRoute")
const orderApp = express();

const reviewsRoute = require("./route/reviewsRoute")
const reviewsApp = express();

const cors = require("cors");


globalThis.rootPath = __dirname
 
//allowing the cross origin resource sharing
app.use(cors())//using cors middleware to allow resource sharing with different ports in localhost

//setting up the middleware static to handle all the static files we need to serve to client
// serve static files like images css using static middleware 
app.use('/static', express.static('public')) //localhost:9000/static/alert_info.js

//json middle-ware for setting request content type to json in body
app.use(express.json({limit:'2mb', extended:false})); 

// For user DB, use /user paths
app.use("/user", userApp) 
userApp.use("/", userRoute)

// For product DB, use /product paths
app.use("/product", productApp) 
productApp.use("/", productRoute)

// For cart DB, use /cart paths
app.use("/cart", cartApp) 
cartApp.use("/", cartRoute)

// order DB, use /orders paths
app.use("/orders", orderApp) 
orderApp.use("/", orderRoute)

// order DB, use /orders paths
app.use("/reviews", reviewsApp) 
reviewsApp.use("/", reviewsRoute)

app.use("/", defaultApp)
defaultApp.use("/", defaultRoute) //redirecting all requests to default route to get served


console.log("Rest API is listening at 9000")
app.listen(9000)