// const moment = require('moment');
const { Post } = require('../models');

const postData = [
  {
    title: 'chatGPT',
    content: 'ChatGPT is a large language model developed by OpenAI, which is designed to generate human-like responses to natural language inputs. It uses a deep learning architecture called the transformer to process and generate text. ChatGPT has been trained on a massive dataset of text from the internet, books, and other sources to enable it to generate responses to a wide range of questions and statements. Its purpose is to simulate human-like conversation and provide helpful responses to users.',   
    date: '',
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