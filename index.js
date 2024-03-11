import express from "express";
import { MongoClient } from "mongodb";
import { ObjectId } from "mongodb";
import cors from "cors";

const app = express();
const PORT = 4000;

const url = "mongodb+srv://priyadharshini6761:mongodbatlaspriya7@cluster0.75tigyr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(url);

await client.connect();
console.log("Database Connected Successfully");

app.use(express.json())
app.use(cors())

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.post("/post", async function (req, res) {
  const postMethod = req.body;

  const POSTMETHOD = await client.db("CRUD").collection("DATA").insertMany([postMethod]);
  res.status(200).send(POSTMETHOD);
});
