"use client";
import { ArrowUp } from "lucide-react";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { askQuestion } from "./action";

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

export default function Home() {
  const defaultChat: Chat = {
    id: 1,
    title: "Click me To Edit Chat Name",
    messages: [],
  };
  const [loading, setLoading] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(1);
  const [chat, setChat] = useState<Chat>(defaultChat);

  /*   const sampleChat: Chat = {
    id: 1,
    title: "Apple",
    messages: [
      {
        id: 1,
        question: "What is the most popular fruit in the world?",
        answer:
          "The most popular fruit in the world is the banana, followed by apples, oranges, and mangoes.",
      },
      {
        id: 2,
        question: "How do you make apple pie?",
        answer:
          "Apple pie requires ingredients like apples, sugar, cinnamon, and pastry dough. First, prepare the crust, then fill with seasoned apples, and bake until golden brown.",
      },
      {
        id: 3,
        question: "What are the health benefits of eating fruits?",
        answer:
          "Fruits are packed with essential vitamins, minerals, and fiber. They can help reduce the risk of heart disease, improve digestive health, and boost your immune system. Many fruits also contain antioxidants that help fight inflammation and protect against certain types of cancer.",
      },
      {
        id: 4,
        question: "Which fruits are best for weight loss?",
        answer:
          "Fruits that are high in fiber and water content but low in calories are ideal for weight loss. These include berries (strawberries, blueberries), grapefruit, apples, and watermelon. The fiber helps you feel full longer, while the high water content provides hydration with minimal calories.",
      },
      {
        id: 5,
        question: "Are frozen fruits as healthy as fresh fruits?",
        answer:
          "Yes, frozen fruits can be just as nutritious as fresh fruits, sometimes even more so. This is because frozen fruits are typically harvested at peak ripeness and flash-frozen, which preserves their nutrients. Fresh fruits, on the other hand, may lose some nutrients during transportation and storage.",
      },
      {
        id: 6,
        question: "What fruits are in season during summer?",
        answer:
          "Summer fruits include watermelon, peaches, nectarines, berries (strawberries, blueberries, raspberries), cherries, plums, and mangoes. These fruits thrive in warm weather and are typically at their peak flavor and nutritional value during summer months.",
      },
      {
        id: 7,
        question: "How many servings of fruit should I eat daily?",
        answer:
          "Most dietary guidelines recommend 1.5-2 cups of fruit daily for adults. This is approximately 2-4 servings, depending on the fruit. Children need 1-2 cups daily, depending on their age and activity level.",
      },
      {
        id: 8,
        question: "Which fruits have the highest vitamin C content?",
        answer:
          "Fruits with the highest vitamin C content include guavas, kiwi, strawberries, oranges, papayas, and bell peppers (technically a fruit). Just one medium guava provides over 200% of your daily vitamin C needs.",
      },
      {
        id: 9,
        question: "Are fruit smoothies healthy?",
        answer:
          "Fruit smoothies can be healthy when made primarily with whole fruits and without added sugars. They retain the fiber from whole fruits, unlike juices. However, they can be high in natural sugars and calories if consumed in large quantities, so portion control is important.",
      },
      {
        id: 10,
        question: "What's the difference between fruits and vegetables?",
        answer:
          "Botanically, fruits develop from the flower of a plant and contain seeds, while vegetables come from other parts of the plant (leaves, stems, roots). Culinary definitions often differ, with sweet produce typically called fruits and savory produce called vegetables, regardless of botanical classification.",
      },
      {
        id: 11,
        question: "Which fruits are best for diabetics?",
        answer:
          "Fruits with a lower glycemic index are best for people with diabetes, including berries, cherries, apples, pears, and citrus fruits. These fruits cause a slower rise in blood sugar levels. Portion control is still important, as all fruits contain natural sugars.",
      },
      {
        id: 12,
        question: "Can eating too much fruit be harmful?",
        answer:
          "While fruit is healthy, excessive consumption can lead to high sugar intake, which may contribute to weight gain or blood sugar issues for some people. Very high fruit intake might also displace other important food groups from your diet. Most people should aim for the recommended 1.5-2 cups daily.",
      },
      {
        id: 13,
        question: "What are some exotic fruits worth trying?",
        answer:
          "Some interesting exotic fruits include dragon fruit, lychee, rambutan, mangosteen, jackfruit, durian, star fruit, and passion fruit. Each offers unique flavors and nutritional benefits not found in more common fruits.",
      },
      {
        id: 14,
        question: "How can I tell if a fruit is ripe?",
        answer:
          "Ripeness indicators vary by fruit but often include: gentle softness to touch, sweet aroma, vibrant color, and slight give when gently squeezed. For example, avocados and peaches should yield slightly to pressure, while berries should be fully colored and fragrant.",
      },
      {
        id: 15,
        question: "What's the best way to store different fruits?",
        answer:
          "Some fruits like bananas, avocados, and tomatoes continue ripening after harvest and should be kept at room temperature until ripe. Most berries, citrus, and cut fruits should be refrigerated. Apples, grapes, and pears can be refrigerated to extend shelf life.",
      },
      {
        id: 16,
        question: "Are organic fruits worth the extra cost?",
        answer:
          "Organic fruits may have fewer pesticide residues and are grown using more environmentally sustainable methods. However, nutritionally, they're similar to conventional fruits. If budget is a concern, consider prioritizing organic for the 'dirty dozen' fruits with highest pesticide residues, like strawberries and apples.",
      },
      {
        id: 17,
        question: "What fruits help with inflammation?",
        answer:
          "Berries (especially blueberries), cherries, oranges, and pineapple contain antioxidants and compounds that help reduce inflammation. Berries contain anthocyanins, cherries have anthocyanins and quercetin, citrus fruits provide flavonoids, and pineapple contains bromelain, all with anti-inflammatory properties.",
      },
      {
        id: 18,
        question: "Can I eat fruit on a keto diet?",
        answer:
          "Most fruits are too high in carbohydrates for a strict ketogenic diet. However, small portions of low-carb fruits like berries (especially raspberries and blackberries), avocados, olives, and tomatoes can sometimes fit into keto macros when consumed in moderation.",
      },
      {
        id: 19,
        question: "What are the benefits of eating seasonal fruits?",
        answer:
          "Seasonal fruits tend to be fresher, more flavorful, more nutritious, less expensive, and have a lower environmental impact. They're typically harvested at peak ripeness rather than being picked early for long-distance shipping, which maximizes both taste and nutrient content.",
      },
      {
        id: 20,
        question: "How can I incorporate more fruit into my diet?",
        answer:
          "Try adding fruit to breakfast (oatmeal, yogurt, smoothies), keeping cut fruit visible in your refrigerator, freezing fruit for smoothies, adding fruit to salads, using fruit as a natural sweetener in baking, or simply keeping a bowl of ready-to-eat fruit on your counter or desk.",
      },
    ],
  }; */

  const changeCurrentMessage = (messageId: number) => {
    setCurrentMessage(messageId);
  };

  const sendMessage = async (formData: FormData) => {
    if (!formData.get("question")) {
      return;
    }
    setLoading(true);
    // response {status : true , question : ""}
    const response = await askQuestion(formData);
    const newMessage: Message = {
      id: chat.messages.length + 1,
      question: formData.get("question") as string,
      answer: response.answer,
    };
    const updatedChat: Chat = {
      ...chat,
      messages: [...chat.messages, newMessage],
    };
    setLoading(false);
    setChat(updatedChat);
    setCurrentMessage(updatedChat.messages.length);
  };

  return (
    <div className="flex justify-around w-screen items-center h-[85vh] xl:h-[95vh] p-5">
      <div className="w-full h-full">
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel>
            <div className="bg-white w-full h-full rounded-md shadow-sm relative flex flex-col">
              <div className="flex-1 overflow-hidden">
                <div className="p-4 h-full flex flex-col">
                  <h2 className="text-lg font-medium mb-3 text-gray-800 bg-amber-100 p-5 rounded-2xl min-w-[285px]">
                    {chat.title}
                  </h2>
                  <h4 className="text-lg font-sm mb-3 text-gray-800">
                    Questions
                  </h4>
                  <div className="space-y-2  overflow-scroll h-[calc(100vh-200px)] ">
                    {chat.messages.length === 0 ? (
                      <div className="p-3  rounded-md text-center text-gray-700">
                        Ask Your First Question
                      </div>
                    ) : (
                      chat.messages.map((message, index) => (
                        <div
                          key={message.id}
                          className={`p-3 min-w-[285px] ${
                            currentMessage === message.id
                              ? "bg-blue-100"
                              : "bg-gray-100"
                          } rounded-md  transition-colors cursor-pointer select-none hover:shadow-md`}
                          onClick={() => changeCurrentMessage(message.id)}>
                          <h3 className="text-sm text-gray-700">
                            {index + 1}. {message.question}
                          </h3>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>

              {/* User Input */}
              <div className="p-3 border-t border-gray-100">
                <form action={sendMessage} className="flex items-center gap-2">
                  <input
                    name="question"
                    type="text"
                    placeholder="Type your message..."
                    className="flex-1 px-3 py-2 text-sm bg-gray-50 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-200"
                  />
                  <button
                    type="submit"
                    className="p-2 rounded-md bg-gray-800 text-white hover:bg-black transition-colors"
                    aria-label="Send message">
                    <ArrowUp />
                  </button>
                </form>
              </div>
            </div>
          </ResizablePanel>

          <ResizableHandle withHandle />

          <ResizablePanel>
            {" "}
            <div className="bg-slate-100 w-full h-full rounded-lg shadow-sm ">
              {chat.messages.length === 0 ? (
                <div className="p-3  rounded-md text-center text-gray-700">
                  Ask Your First Question
                </div>
              ) : (
                <div className="p-4 h-full flex flex-col">
                  <h2 className="text-lg font-medium mb-3 text-gray-800">
                    Question : {chat.messages[currentMessage - 1].question}
                  </h2>
                  <h2 className="text-lg font-medium mb-3 text-gray-800">
                    Answer
                  </h2>
                  <div className="overflow-auto h-[calc(100vh-200px)]">
                    <div className="prose prose-sm max-w-none">
                      <ReactMarkdown>
                        {chat.messages[currentMessage - 1].answer}
                      </ReactMarkdown>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
}
