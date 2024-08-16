const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser'); // Corrected

const app = express();

// Middleware
app.use(bodyParser.json()); // Corrected
app.use(cors());

// Sample data
const users = ['user1', 'user2', 'user3', 'user4', 'user5', 'user6', 'user7', 'user8'];

// Routes
app.get('/', (req, res) => {
  const Food_Details = {
    Total_products: 200,
    fruit_name: 'apple',
  };
  res.send(Food_Details); 
});

app.post('/Add_user', (req, res) => {
  console.log('POST successful');
  const user =req.body ;
  user.id = 55;
  res.send(user); // Corrected
  res.sendStatus(200); // Added response status
});

app.get('/fruit_details/banana', (req, res) => {
  res.send({
    fruit_name: 'banana', // Corrected fruit_name
    total_products: 20,
  });
});

app.get('/users/:id', (req, res) => {
  const id = parseInt(req.params.id, 10); // Ensure id is an integer
  const query = req.query.sort;
  console.log(query);
  console.log(id);

  if (id >= 0 && id < users.length) { // Check if id is valid
    const users_name = users[id];
    console.log(users_name);
    res.send({ users_name, id });
  } else {
    res.status(404).send({ error: 'User not found' });
  }
});

// Start server
app.listen(3000, () => console.log('Listening on port 3000')); // Corrected
