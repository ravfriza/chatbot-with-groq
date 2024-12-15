import { ChatGroq } from "@langchain/groq";

const llm = new ChatGroq({
  model: "mixtral-8x7b-32768",
  temperature: 0,
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
});

export async function askGroq(question) {
  const { content } = await llm.invoke([{ role: "user", content: question }]);

  return content;
}
