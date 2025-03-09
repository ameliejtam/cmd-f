console.log("yellow orange");

const apiKey = "AIzaSyD224Vm2gc6ke7NLtWbOf25sWUUbhGu5vw";

import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const prompt = "Explain how AI works";

(async () => {
  try {
    const result = await model.generateContent(prompt); // Wait for the result here
    console.log(result.response.text());  // Access the response after the promise resolves
    console.log("seas horses");
  } catch (error) {
    console.error("Error generating content:", error);
  }
})();

