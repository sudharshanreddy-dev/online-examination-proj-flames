const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI('AIzaSyAcnS6frsfsoGQwheo-5uEt9wCC-2refUU');

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});


async function run(que,ans) {
    const prompt = `These are the questions array: ${que}
These are the answers array: ${ans}

Respond only with a JSON array of marks in the format [marks1, marks2, marks3, ...]. Do not include any explanations, text, or additional information. The marks should be integers between 0 and 10.


`
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return text
}


module.exports = {run}