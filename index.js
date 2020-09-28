//import express from 'express'
const express = require("express");
const server = express();

//teach 'express' how to read JSON data from req.body
server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ message: "User API first project" });
});

const port = 5000;
server.listen(port, () => console.log("api running"));

//see a list users { }
let users = [
  {
    id: "a_unique_id",
    name: "Jane Doe",
    bio: "Not Tarzan's Wife, another Jane",
  },

  {
    id: "a_unique_id",
    name: "Jane Doe",
    bio: "Not Tarzan's Wife, another Jane",
  },
  {
    id: "a_unique_id",
    name: "Jane Doe",
    bio: "Not Tarzan's Wife, another Jane",
  },
];
