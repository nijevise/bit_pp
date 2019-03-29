const axios = require('axios');

async function makeGetRequest() {
  
  let res = await axios.get('https://jsonplaceholder.typicode.com/posts');

  let data = res.data;
  console.log(data);
}

makeGetRequest();



