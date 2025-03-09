const obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');
console.log(obj);


import fs from 'fs';

fs.readFile("answer.json", (error, data) => {

    if (error) {
      console.error(error);
      throw err;
    }
  
    const info = JSON.parse(data);
  
    console.log(info);
});