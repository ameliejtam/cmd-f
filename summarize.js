// console.log("yellow orange");

// const apiKey = "AIzaSyD224Vm2gc6ke7NLtWbOf25sWUUbhGu5vw";

// import { GoogleGenerativeAI } from "@google/generative-ai";
// const genAI = new GoogleGenerativeAI(apiKey);

// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// const prompt = "What's 1 + 1";

// const answer = [];
// console.log("answer 1: " + answer);

// (async () => {
//   try {
//     const result = await model.generateContent(prompt); 
//     let response = result.response.text(); 
//     console.log(response);  
//     answer.push(response);
//     console.log("answer 2: " + answer);
//   } catch (error) {
//     console.error("Error generating content:", error);
//   }
// })();

// console.log("answer 3: " + answer);


console.log("yellow orange");

const apiKey = "AIzaSyD224Vm2gc6ke7NLtWbOf25sWUUbhGu5vw";

import fs from 'fs';

import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const prompt = `Summarize three recent climate events using this JSON schema:

Info = {'climateNews': string}
Return: Array<Info>`;

(async () => {
  try {
    const result = await model.generateContent(prompt); 
    const response = result.response.text(); 
    console.log(response);  

    fs.writeFileSync('answer.json', JSON.stringify(response, null, 4));  // Save the response as JSON

    console.log("Response saved to answer.json");


  } catch (error) {
    console.error("Error generating content:", error);
  }
})();




