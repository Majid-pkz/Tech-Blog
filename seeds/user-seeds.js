const { User } = require('../models');
const bcrypt = require('bcrypt');


const userData = [
  {
    firstName: 'Alex',
    lastName:'Fergosen',
    email:'alex@gmail.com',
    password:`${bcrypt.hashSync("Alex12345", 10)}`,        
  },
  {
    firstName: 'Peter',
    lastName:'Jackson',
    email:'gb@gov.com',
    password:`${bcrypt.hashSync("Covid19news", 10)}`,
  },
  {
    firstName: 'Rahat',
    lastName:'saini',
    email:'rs@abc.com',
    password:`${bcrypt.hashSync('pass12345', 10)}`,
  },
  {
    firstName: 'AAA',
    lastName:'BBB',
    email:'AB@abc.com',
    password:`${bcrypt.hashSync('pass12345', 10)}`,      
  },

];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;