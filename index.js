const express = require("express");
const db = require("./config/database");
const User = require("./models/User");
const userRoutes = require('./routes/user.routes');
const movieRoutes = require("./routes/movie.routes");
const orderRoutes = require("./routes/order.routes")
require("dotenv").config();

const app = express();
app.use(express.json());

//middlewares
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

const port = process.env.PORT || 4000;

//routes
app.use("/api", userRoutes);
app.use("/api", movieRoutes);
app.use("/api", orderRoutes);



app.get("/", (req, res)=>{
    return res.send("Bienvenidos a la mejor API de este lado del Mississippi, creada por Ivan y Lionel")
});

app.get("*", (req, res)=>{
    return res.status(404).send("404 route not found")
});

db()
    .then (()=> {
        app.listen(port, ()=> {
            console.log("server is running: " + port)
        });

    })
    .catch((error) => {
        console.log("Error conecting mongoDB " + error)
    });
    