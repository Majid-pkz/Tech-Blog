const { User } = require('../models');
const bcrypt = require('bcrypt');


const userData = [
  {
    username: 'Alex',    
    email:'alex@gmail.com',
    password:`${bcrypt.hashSync("Alex12345", 10)}`,        
  },
  {
    username: 'Peter',    
    email:'gb@gov.com',
    password:`${bcrypt.hashSync("Covid19news", 10)}`,
  },
  {
    username: 'Rahat',    
    email:'rs@abc.com',
    password:`${bcrypt.hashSync('pass12345', 10)}`,
  },
 
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;