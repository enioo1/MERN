let express = require("express");
let cors = require("cors");
let mongoose = require("mongoose");
let session = require("express-session");
let contactRoute = require("./routes/contactRoute.js");
let itemRoute = require("./routes/itemRoute.js");
let app = express();
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
    exposedHeaders: ["set-cookie"],
  })
);
app.use(
  session({
    secret: "This will be secret",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
  })
);
app.use(express.json({ limit: "1000mb", extended: true }));

// lidhja me databaze
mongoose
  .connect(
    "mongodb+srv://enio_gjonaj:288ASHphi3_8igkgit@cluster0.h9uun.mongodb.net/mernTest?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("DB conneted"))
  .catch((err) => console.log("Error", err));

app.use(contactRoute);
app.use(itemRoute);

app.use("/send", (req, res) => {
  res.send("Hello");
});

app.listen(5000, (req, res) => {
  console.log("Server start!");
});