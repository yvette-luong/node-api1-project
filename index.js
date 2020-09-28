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
    id: 0,
    name: "Jane Doe",
    bio: "Not Tarzan's Wife, another Jane",
  },

  {
    id: 1,
    name: "Prisma Oxalate",
    bio: "Not your wife",
  },
  {
    id: 2,
    name: "Solco Somerset",
    bio: "Not my wife",
  },
];
