"use client";

import { useState, useRef, useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Bot, Send, MessageSquare, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Social sentiment analysis responses
const sentimentResponses = {
  "Key differences between platforms": {
    response: `Based on 2,845 analyzed mentions, here are the key differentiators:

Jasper AI: Leads in Chrome extension and browser integration praise
Copy.ai: Strongest positive mentions for email sequence automation
Writer: Most frequently cited for enterprise-grade controls and team features
→ Most significant gap: Jasper leads in individual user tools while Writer dominates enterprise feature discussions.`,
    thinkingTime: 2000
  },
  "Enterprise vs SMB sentiment": {
    response: `Clear segment divide in platform preferences:

Enterprise users (500+ employees): Heavily favor Writer (78% positive), citing governance and compliance
SMBs: Prefer Jasper and Copy.ai (82% positive), highlighting ease of use and quick results
→ Key insight: Price sensitivity 3x higher in SMB discussions vs Enterprise mentions`,
    thinkingTime: 1800
  },
  "Feature satisfaction trends": {
    response: `Last 30 days analysis shows:

Most praised: Browser extensions (426 positive mentions)
Most requested: Enhanced team collaboration (312 mentions)
Fastest growing concern: AI content detection workarounds (89% increase)
→ Notable trend: Enterprise users increasingly seeking granular brand voice controls`,
    thinkingTime: 2200
  },
  "Common pain points": {
    response: `Top issues by mention frequency:

Content quality inconsistency (218 mentions)
API reliability for enterprise integrations (186 mentions)
Pricing model complexity (164 mentions)
→ Critical insight: Enterprise users cite integration issues 2.5x more than SMBs`,
    thinkingTime: 1500
  }
};

interface Message {
  id: string;
  type: "user" | "agent";
  content: string;
}

export function ReportChat({ reportType }: { reportType: string }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (showChat) {
      setMessages([{
        id: "welcome",
        type: "agent",
        content: "I can help you analyze this report. What would you like to know?"
      }]);
    }
  }, [showChat]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (content: string) => {
    if (!content.trim() || isThinking) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content
    };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsThinking(true);

    // Get response data
    const responseData = sentimentResponses[content as keyof typeof sentimentResponses];
    
    // Simulate AI thinking with typing animation
    await new Promise(resolve => setTimeout(resolve, responseData?.thinkingTime || 1500));

    // Add AI response
    const response: Message = {
      id: (Date.now() + 1).toString(),
      type: "agent",
      content: responseData?.response || "I'll need to analyze that further. Could you rephrase your question?"
    };
    
    setMessages(prev => [...prev, response]);
    setIsThinking(false);
  };

  if (!showChat) {
    return (
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setShowChat(true)}
        className="absolute top-4 right-4 text-gray-600 hover:text-gray-700"
      >
        <MessageSquare className="w-4 h-4 mr-2" />
        Ask AI
      </Button>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 350 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 350 }}
      className="absolute top-0 right-0 w-[350px] h-full border-l border-slate-800 bg-slate-900/95"
    >
      <div className="h-full flex flex-col">
        <div className="p-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bot className="w-5 h-5 text-blue-400" />
            <h2 className="font-medium">Analysis Assistant</h2>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setShowChat(false)}
            className="h-8 w-8 rounded-full hover:bg-slate-800/50"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4" ref={scrollRef}>
            <AnimatePresence mode="wait">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`p-3 rounded-lg text-sm ${
                    msg.type === "agent" 
                      ? "bg-slate-800/50 text-gray-700" 
                      : "bg-blue-500/10 text-gray-700 ml-4"
                  }`}
                >
                  <div className="whitespace-pre-wrap">{msg.content}</div>
                </motion.div>
              ))}

              {isThinking && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2 text-gray-600 text-sm"
                >
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                  Analyzing...
                </motion.div>
              )}
            </AnimatePresence>

            {messages.length === 1 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-2 mt-4"
              >
                <p className="text-sm text-gray-600">Suggested questions:</p>
                {Object.keys(sentimentResponses).map((question) => (
                  <motion.button
                    key={question}
                    whileHover={{ scale: 1.02 }}
                    className="w-full text-left p-2 text-sm text-gray-600 hover:bg-slate-800/50 rounded-lg transition-colors"
                    onClick={() => handleSend(question)}
                  >
                    {question}
                  </motion.button>
                ))}
              </motion.div>
            )}
          </div>
        </ScrollArea>

        <div className="p-4 border-t border-slate-800">
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              handleSend(input);
            }}
            className="flex gap-2"
          >
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
              className="bg-slate-800/50 border-slate-700"
            />
            <Button 
              type="submit" 
              size="icon"
              disabled={!input.trim() || isThinking}
              className="bg-blue-500 hover:bg-blue-600"
            >
              <Send className="w-4 h-4" />
            </Button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}