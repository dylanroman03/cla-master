const express = require("express");
const path = require("path");
const session = require("express-session");
const MySqlStore = require("express-mysql-session");
const { database } = require("./keys");
const morgan = require("morgan");

// Initializations //
const app = express();

// Settings //
app.set("port", 4000);

// SQL //
app.use(
  session({
    secret: "express-session",
    resave: false,
    saveUninitialized: false,
    store: new MySqlStore(database),
  })
);

// Middelwares //
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routers //
app.use("/", express.static(path.join(__dirname, "public")));
app.use(require("./routers/authenticate"));

app.listen(app.get("port"), (req, res, next) => {
  console.log("Listen on port ", app.get("port"));
});
