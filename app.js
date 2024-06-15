const express = require("express")
const app = express();
const path = require("path")
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");
const flash = require("connect-flash");


const ownersRouter = require("./routes/ownersRouter");
const usersRouter = require("./routes/usersRouter");
const productsRouter = require("./routes/productsRouter");
const indexRouter = require("./routes/index");

require("dotenv").config();

const db = require("./config/mongoose-connection");

app.set("view engine","ejs");
app.use(express.json());
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(
    expressSession({
        resave : false,
        saveUninitialized: false,
        secret: process.env.EXPRESS_SESSIOON_SECRET,
    })
);
app.use(flash());
app.use("/owners",ownersRouter);
app.use("/users" , usersRouter);
app.use("/products",productsRouter);
app.use("/",indexRouter);



app.listen(process.env.PORT || 3000);