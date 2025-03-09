
const apiKey = "AIzaSyD224Vm2gc6ke7NLtWbOf25sWUUbhGu5vw";

import fs from 'fs';

import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const prompt = `Summarize three recent climate events using this schema: Return: Array<string>`;

Info = {'climateNews': string}
Return: Array<Info>`;

(async () => {
  try {
    const result = await model.generateContent(prompt); 
    const response = result.response.text(); 
    console.log(response);  
    const responseObject = { climateNews: response };
    fs.writeFileSync('answer.json', JSON.stringify(responseObject, null, 4)); 
    console.log("Response saved to answer.json");


  } catch (error) {
    console.error("Error generating content:", error);
  }
})();




