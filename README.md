# GreenHeap
Made during the cmd-f Hackathon!
## Inspiration
Too long, didn’t read; give me a summary!  

This project was inspired by the need to enhance climate awareness and sustainability through accessible, relevant, and up-to-date knowledge for everyone. With the constant influx of climate-related events and policy changes, staying informed can be challenging. To bridge this gap, we aim to create a weekly newsletter that curates and summarizes key developments from a variety of sources.

GreenHeap covers a wide range of topics, from changing climate policies, to educational resources, to current events and local opportunities, in order to build a holistic and consistent approach in understanding our climate. Building a strong foundation in climate education is essential to addressing the root causes of the climate crisis. Climate education is more than simply knowing that climate change is happening: it equips society to deal with the complexities of it and encourages sustainable solutions to make the Earth green again. 

## What it does
When you subscribe to a particular category from our web application, you will automatically be signed up to receive weekly emails that deliver snapshots of current and relevant news and events of your chosen topic. Subscriptions to multiple categories is supported.

## How we built it
GreenHeap is a full-stack development, with HTML, CSS, and JavaScript in the front-end, and Node.js environment for the backend. Specifically, we connected inputs and button 'onclick' functions to its respective JSON file, including both the prompt for email subscription and newletter compilation.  Additionally, to get the summarized news, the Gemini API was implemented to summarize important news from Google. 

## Challenges we ran into
Challenges we ran into include the connection between the front-end and back-end server. Due to various connection issues, the Fetch API had issues working properly. Parts of this issues was mitigated by wrapping API calls to be asynchronous, allowing proper retrieval of the desired information. 

## Accomplishments that we're proud of
Since this is our first time working with the Gemini API, or any AI API for that matter, we're really proud that we were able to successfully implement the API into our program. Writing the response from Gemini to a JSON file, then reading the JSON file to display on the web application was something we struggled with throughout the hackathon, and we're really proud that we were able to achieve such a functionality. Further, the overall UI and UX design is something we spent a lot of time working on and are excited to show off. 

## What we learned
We gained more in-depth knowledge on how the different files and languages in a program interact, as well as how to better resolve merging and branching conflicts within Git and GitHub. Further, we learned how to implement AI APIs into our program, and gained an understanding of how to iterate JSON files via JavaScript. Additionally, throughout the Hackathon, we definitely got more familiarity and confidence with coding in HTML, CSS, JavaScript, and Node.

## What's next for GreenHeap
Due to the time restrictions of this hackathon, the email sending functionality hasn't been implemented in the program yet. Thus, the next step for GreenHeap would be to increase the automation of this program to run and send newletters without human prompting each week. Moreover, implementing proper prompts to the AI API in order to find relevant news for each of the categories will move GreenHeap to its full functionality. 
