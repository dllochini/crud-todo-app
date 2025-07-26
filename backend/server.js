const express = require("express"); //import express

//creating an instance of express
const app = express();

const routes = require("./routes") //import routes.js
app.use("/api", routes); // the router in the js file is prefeixed with /api

const connectDB = require("./connectDb");

// test route
// app.get("/hello", (req,res) => {
//     res.status(200).json({msg:"Hello World"}) //respond with status 200(OK) and the message given.
// })

//initialize backend port number as port 
const port = 5000;

//start the server
// app.listen(port, () => {
//     console.log(`Server is listening on http://localhost:${port}`)
// })

//waits until the db connects to backend and start the server
const startServer = async () => {
    await connectDB();
    //start the server
    app.listen(port, () => {
        console.log(`Server is listening on http://localhost:${port}`)
    })
}

startServer();