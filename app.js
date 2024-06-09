const express = require("express")
const app = express();
const path = require("path")
const cookieParser = require("cookie-parser");
const ownersRouter = require("./routes/ownersRouter");
const usersRouter = require("./routes/usersRouter");
const productsRouter = require("./routes/productsRouter");

const db = require("./config/mongoose-connection");

app.set("view engine","ejs");
app.use(express.json());
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.use("/owners",ownersRouter);
app.use("/users" , usersRouter);
app.use("/products",productsRouter);

app.listen(process.env.PORT || 3000);