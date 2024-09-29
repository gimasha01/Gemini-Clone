import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

// Replace the environment variable with the actual API key
const apiKey = "AIzaSyC7ajY6n9CtdN8DAJVxLDn6qusi1RgL_I0";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

// Define safety settings
const safetySettings = [
  {
  category: HarmCategory.HATE,
  threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
},
{
  category: HarmCategory.VIOLENCE,
  threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
},
{
  category: HarmCategory.SELF_HARM,
  threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
},
{
  category: HarmCategory.SEXUAL,
  threshold: HarmBlockThreshold.BLOCK_HIGH_AND_ABOVE,
}
];

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function runChat(prompt) {
  const chatSession = model.startChat({
    generationConfig,
    // safetySettings: Adjust safety settings
    // See https://ai.google.dev/gemini-api/docs/safety-settings
    history: [
    ],
  });

  const result = await chatSession.sendMessage(prompt);
  const response = result.response;
  console.log(response.text());
  return response.text();
}

export default runChat;


