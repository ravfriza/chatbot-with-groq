import { useState } from "react";
// import "./App.css";
import { askGroq } from "./langchain/chatbot";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";
import ChatCard from "./components/custom/chat-card";
import { SendHorizonal } from "lucide-react";
import Header from "./components/custom/header";

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChat = async (e) => {
    e.preventDefault();

    if (question) {
      setIsLoading(true);
      const response = await askGroq(question);
      setAnswer("");
      const words = response.split(" ");
      let i = 0;
      const interval = setInterval(() => {
        if (i <= words.length) {
          setAnswer(words.slice(0, i).join(" "));
          i++;
        } else {
          clearInterval(interval);
          setIsLoading(false);
        }
      }, 100);
    }
  };

  return (
    <main className="min-h-screen p-4 ">
      <div className="max-w-3xl mx-auto flex flex-col h-[calc(100vh-2rem)]">
        <Header title="Chatbot with Groq" />

        <section className="flex-1 p-4 mb-4 overflow-y-auto space-y-4">
          <div className="flex justify-end">
            {question && <ChatCard className="ml-auto">{question}</ChatCard>}
          </div>

          {answer && (
            <ChatCard className="mr-auto">
              {answer}
              {isLoading && <span className="animate-pulse">|</span>}
            </ChatCard>
          )}
        </section>

        <form onSubmit={handleChat} className="w-full">
          <div className="flex items-center gap-x-2">
            <Input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ask anything..."
            />
            <Button
              className={`${isLoading ? "animate-pulse" : ""}`}
              disabled={isLoading}
            >
              {isLoading ? "Thinking..." : <SendHorizonal />}
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default App;
