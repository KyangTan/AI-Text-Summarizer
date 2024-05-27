const { GoogleGenerativeAI } = require("@google/generative-ai");
// Fetch your API_KEY
const API_KEY = 'AIzaSyAvXY1YqWIlNSPvLIQPx3bULrJEgT72QGI';

// Access your API key (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(API_KEY);

// ...

// The Gemini 1.5 models are versatile and work with most use cases
async function run(text) {
  // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

  const text_to_summarize = text;

  const prompt = "Summarize the content below into 1 to 3 paragraphs: " +text_to_summarize;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const summary = response.text();
  
  return summary;
  // console.log(text);
}

module.exports = run;