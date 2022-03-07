const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

const users = [];

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];


  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  const fortune = ["Do not be intimidated by the eloquence of others.",
           "Don’t just think, act!",
           "Good news will come to you by mail.", 
           "It takes courage to admit fault.", 
           "Now is a good time to buy stock.",
  ];

  let randomIndex = Math.floor(Math.random() * fortune.length);
  let randomfortune = fortune[randomIndex];

  res.status(200).send(randomfortune);
})

app.post("/api/user", (req, res) => {
  console.log(req.body)
  const {newUser} = req.body

  users.push(newUser)
  res.status(200).send(users)
})

app.delete("/api/delete/:id", (req, res) => {
  console.log(req.params)

  if(+req.params.id) {
users.splice(req.params.id, 1)
res.status(200).send(users)
}else{
  res.status(400).send("No Number")
}
})

app.put('/api/update/:id', (req, res) => {
  console.log(req.params)
  console.log(req.body)

  const {userChange} = req.body
  const editIndex = +req.params.id

  users[editIndex] = editUser

  res.status(200).send(users)
})



app.listen(4040, () => console.log("Server running on 4040"));


