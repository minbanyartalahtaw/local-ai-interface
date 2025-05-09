"use server";
import axios from "axios";
import getClient from "../../lib/mongodb"



export async function askQuestion(formData: FormData) {
  const question = formData.get("question");
  if (!question || typeof question !== "string") {
    return { status: false, answer: "Question is required" };
  }
  const ai_response = await axios.post("http://localhost:11434/api/generate", {
    model: process.env.AI_MODEL,
    prompt: question,
    stream: false,
  });
  const ai_asnwer = ai_response.data.response;
  return { status: true, answer: ai_asnwer };
}

export async function createChat(Chat: Chat) {
  const client = await getClient();
  const db  = client.db("bro-code");
  const collection = db.collection("Chat");
  await collection.insertOne({Chat})
  return { status: "success", Message: "Chat created successfully" };
}
