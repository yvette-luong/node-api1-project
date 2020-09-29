//import express from 'express'
const express = require("express");
const server = express();

//teach 'express' how to read JSON data from req.body
server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ message: "User API first project" });
});



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

let nextId = 3; 

server.get("/users", (req,res) =>{
    res.status(201).json({data: users});

})

server.post("/users", function (req, res) {
    const data = req.body;

    users.push({ id: nextId++, ...data });

    res.status(201).json({ data: users });
});

server.put("/users/:id", (req, res) =>{
    const id = Number(req.params.id); 

    const changes = req.body;
    
    const found = users.find(l => l.id === id);

    if(found) {
        Object.assign(found, changes);

        res.status(200).json({ data: users});
    } else {
        res.status(404).json({message: "User not found"});
    }
})

server.delete("/users/:id", (req,res) => {
    const id = Number(req.params.id);

    users = users.filter(l=>l.id !== id);

    res.status(200).json({data : users });
});
const port = 5000;
server.listen(port, () => console.log("api running"));