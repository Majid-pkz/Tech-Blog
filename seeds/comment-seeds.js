const { Comment} = require('../models');
// const moment = require('moment');

const commentData = [
  {
    content:'This is very helpfull for beginners',
    date : '',
    user_id: 1,
    post_id: 1,
  
  },
//   {
//     content:'This is very helpfull for beginners',
//     date : moment().format('yyyy-MM-DD HH:mm:ss'),
//     user_id: 1,
//     post_id: 1,
  
//   },

  


  
]
const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;