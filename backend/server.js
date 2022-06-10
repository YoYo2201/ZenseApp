const firebase = require("firebase-admin");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const app = express();
const http = require('http');
const server = http.createServer(app, {
  cors: {
        origin: "*",
      },
});

const PORT = process.env.PORT || 5000;
if(process.env.NODE_ENV === "production")
{
  app.use(express.static('build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  });
}

app.use(express.json());
app.use(bodyParser.json());



const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

var serviceAccount = require("./zense-app.json");

const JWT_SECRET = process.env.JWT_SECRET;

app.use(
  cors({
    origin: "*",
  })
);


app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://zenseapp-6909a.firebaseio.com",
});

var db = firebase.firestore();
const Collection1 = db.collection("users");

app.post("/api/signUp", async(req, res) => {
  const {name, email, username, password} = req.body;
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);

  const getUser = await Collection1.doc(username).get();
  if (getUser.exists) res.json({ status: "Exists" });
  else {
  const pass = await bcrypt.hash(password, 10);
    const user = await Collection1.doc(username).set({
      email: email,
      password: pass,
    });
    if (user) {
      res.json({ status: "ok" });}
    else res.json({ status: "error" });
  }
});

app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await Collection1.doc(username).get();
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  if (!user.exists) {
    return res.json({ status: "error", error: "Invalid username/password" });
  }

  if (await bcrypt.compare(password, user.data().password)) {
    return res.json({ status: "ok" });
  }

  res.json({ status: "error", error: "Invalid username/password" });
});

server.listen(PORT, () => {
  console.log("Server Connected!!!");
});