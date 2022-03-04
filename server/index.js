const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

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

app.get("/api/achievements", (req, res) => {
  const achievement = ["I have Been to 4 continents.",
           "I have been around 35 states!",
           "I have read over 300 books.", 
           "I will somday master this.", 
  ];

  let randomIndex = Math.floor(Math.random() * achievement.length);
  let randomAchievements = achievement[randomIndex];

  res.status(200).send(randomAchievements);
})

app.post('/api/users', (req, res) => {
  let { username, firstName, lastName } = req.body

  if (!username || !firstName || !lastName) {
    res.status(400).send('Error missing info.')
  } else {
    userDatabase.push(req.body) 
    res.status(200).send('successfull.')
  }
})


app.get("/api/panic", (req, res) => {
  const panic = ["I worked harder than it looks!",
					 "Post took me soooo long and its still not working right!",
					 "Hopefully I can get more time to work on this.",
           "I felt so good about this before I sat down.",
           "I know I failed this one I will study and work harder."
  ];


 
  let randomIndex = Math.floor(Math.random() * panic.length);
  let randomPanic = panic[randomIndex];

  res.status(200).send(randomPanic);

})



app.listen(4040, () => console.log("Server running on 4040"));
