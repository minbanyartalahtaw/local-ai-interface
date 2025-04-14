"use server";
import axios from "axios";
export async function askQuestion(formData: FormData) {
  const question = formData.get("question");
  if (!question || typeof question !== "string") {
    return { status: false, answer: "Question is required" };
  }
  const ai_response = await axios.post("http://localhost:11434/api/generate", {
    model: "codellama:latest", // or your model name
    prompt: question,
    stream: false,
  });
  console.log(ai_response);
  return { status: true, answer: "Fuck You." };
}
