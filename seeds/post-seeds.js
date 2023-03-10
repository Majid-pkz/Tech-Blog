// const moment = require('moment');
const { Post } = require('../models');

const postData = [
  {
    title: 'chatGPT',
    content: 'ChatGPT is a large language model developed by OpenAI, which is designed .',   
    // date: '',
    user_id: 1,  
  
  },

  // {
  //   title: 'Handlebars',
  //   content: 'Handlebars is a popular templating language for building dynamic web pages and applications. It allows developers to create templates that can be populated with dynamic data and then rendered as HTML pages.',   
  //   date: moment().format('yyyy-MM-DD HH:mm:ss'),
  //   user_id: 1,  
  
  // },


  
]
const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;