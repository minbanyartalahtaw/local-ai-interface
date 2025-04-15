"use server";
import axios from "axios";

interface Message {
  id: number;
  question: string;
  answer: string;
}

interface Chat {
  id: number;
  title: string;
  messages: Message[];
}

export async function askQuestion(formData: FormData) {
  const question = formData.get("question");
  if (!question || typeof question !== "string") {
    return { status: false, answer: "Question is required" };
  }
  console.log(question);
  const ai_response = await axios.post("http://localhost:11434/api/generate", {
    model: "gemma:2b", // or your model name
    prompt: question,
    stream: false,
  });
  const ai_asnwer = ai_response.data.response;
  return { status: true, answer: ai_asnwer };
}

export async function createChat(Chat: Chat) {
  console.log(Chat);
}
