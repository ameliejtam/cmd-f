import fs from 'fs';
import { GoogleGenerativeAI } from "@google/generative-ai";

class key {
    #apiKey = "AIzaSyD224Vm2gc6ke7NLtWbOf25sWUUbhGu5vw";
    constructor() {
        this.apiKey
    }

    get apiKey() {
        return this.#apiKey;
    }
}

const apiKey = new key().apiKey;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const prompt = [`Name one random colours`, 'Name one random animal'];
const properties = ["colours", "animals"];

(async () => {
  try {
    var jsonObject = {};
    for (let i = 0; i < prompt.length; i++) {
      const result = await model.generateContent(prompt[i]);
      const response = result.response.text();
      console.log(response);
      jsonObject[properties[i]] = response;
    }

    fs.writeFileSync('answer.json', JSON.stringify(jsonObject)); 
    console.log("Response saved to answer.json");
    
  } catch (error) {
    console.error("Error generating content:", error);
  }
})();

