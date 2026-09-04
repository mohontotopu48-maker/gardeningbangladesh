"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { shopInfo, products } from "@/lib/data";

type Message = { role: "bot" | "user"; text: string };

const botResponses: Record<string, string> = {
  price: "আমাদের পণ্যের দাম ৪০৳ থেকে শুরু। সব পণ্যের দাম ওয়েবসাইটে দেওয়া আছে। বিস্তারিত জানতে ক্যাটাগরি দেখুন।",
  delivery: "সারা বাংলাদেশে ডেলিভারি দেওয়া হয়। ঢাকায় ১-২ দিন, বাইরে ২-৫ দিন। ক্যাশ অন ডেলিভারি সুবিধা আছে। ১০০০৳+ অর্ডারে ফ্রি ডেলিভারি।",
  payment: "আমরা ক্যাশ অন ডেলিভারি গ্রহণ করি। পণ্য হাতে পেয়ে টাকা দিন। অনলাইনে অর্ডার করুন বা ফোন করুন: " + shopInfo.phone,
  order: "অর্ডার করতে পণ্যের 'কিনুন' বাটনে ক্লিক করুন, কার্টে যোগ করুন, তারপর চেকআউট করুন। অথবা সরাসরি কল করুন: " + shopInfo.phone,
  track: "অর্ডার ট্র্যাক করতে হেডারে 'ট্র্যাক' বাটনে ক্লিক করুন, অর্ডার নম্বর ও ফোন দিন।",
  membership: "সদস্যপদ মাত্র ১৫০৳ এককালীন বা ২৫০৳/মাস। সদস্য হলে ছাড়, ফ্রি ডেলিভারি ও উপহার পাবেন। /membership পেজ দেখুন।",
  organic: "জৈব সার প্রাকৃতিক ও নিরাপদ। ভার্মিকম্পোস্ট, ঝিনুক পাউডার, নিম খোল সহ ৯ ধরনের সার আছে। সপ্তাহে ১-২ বার ব্যবহার করুন।",
  indoor: "ইনডোর প্লান্টের ৩৮+ জাত আছে — স্নেক প্লান্ট, মানি প্লান্ট, জেড প্লান্ট, পিস লিলি সহ। ঘরের বাতাস পরিষ্কার করে, কম যত্নে চলে।",
  seed: "বীজের ৯ ধরন আছে — ডেড়শ, পুদিনা, টমেটো, মরিচ, ধনিয়া সহ। ৯০%+ অঙ্কুরোদ্গম নিশ্চিত।",
  hello: "আসসালামু আলাইকুম! 👋 গার্ডেনিং বাংলাদেশে স্বাগতম। কীভাবে সাহায্য করতে পারি?",
  hi: "হ্যালো! 🌱 গার্ডেনিং বাংলাদেশে স্বাগতম। আপনার কী সাহায্য দরকার?",
  contact: "যোগাযোগ: ফোন " + shopInfo.phone + " | ইমেইল " + shopInfo.email,
  thanks: "আপনাকে ধন্যবাদ! 🌱 আর কিছু লাগলে বলবেন।",
};

function getBotResponse(text: string): string {
  const lower = text.toLowerCase();
  if (lower.includes("দাম") || lower.includes("price") || lower.includes("কত")) return botResponses.price;
  if (lower.includes("ডেলিভারি") || lower.includes("delivery") || lower.includes("পৌঁছ")) return botResponses.delivery;
  if (lower.includes("পেমেন্ট") || lower.includes("payment") || lower.includes("টাকা")) return botResponses.payment;
  if (lower.includes("অর্ডার") || lower.includes("order") || lower.includes("কিনব")) return botResponses.order;
  if (lower.includes("ট্র্যাক") || lower.includes("track")) return botResponses.track;
  if (lower.includes("সদস্য") || lower.includes("membership")) return botResponses.membership;
  if (lower.includes("জৈব") || lower.includes("organic")) return botResponses.organic;
  if (lower.includes("ইনডোর") || lower.includes("indoor")) return botResponses.indoor;
  if (lower.includes("বীজ") || lower.includes("seed")) return botResponses.seed;
  if (lower.includes("ধন্যবাদ") || lower.includes("thanks")) return botResponses.thanks;
  if (lower.includes("যোগাযোগ") || lower.includes("contact") || lower.includes("ফোন")) return botResponses.contact;
  if (lower.includes("হাই") || lower.includes("hi") || lower.includes("hello") || lower.includes("আসসালামু")) return botResponses.hello;
  return "আমি আপনাকে সাহায্য করতে পারি! দাম, ডেলিভারি, পেমেন্ট, অর্ডার, ট্র্যাকিং, সদস্যপদ, জৈব সার, ইনডোর প্লান্ট বা বীজ সম্পর্কে জিজ্ঞাসা করুন। অথবা কল করুন: " + shopInfo.phone;
}

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: "আসসালামু আলাইকুম! 👋 গার্ডেনিং বাংলাদেশে স্বাগতম। কীভাবে সাহায্য করতে পারি?" },
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const send = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages((prev) => [...prev, { role: "user", text: userMsg }]);
    setInput("");
    setTimeout(() => {
      const response = getBotResponse(userMsg);
      setMessages((prev) => [...prev, { role: "bot", text: response }]);
    }, 600);
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-4 left-20 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-brand-green text-white shadow-brand-lg hover:scale-110 transition-transform print:hidden"
        aria-label="চ্যাটবট"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-20 left-4 z-40 w-[340px] max-w-[calc(100vw-2rem)] overflow-hidden rounded-2xl bg-white shadow-2xl print:hidden"
          >
            {/* Header */}
            <div className="bg-brand-green p-4 text-white flex items-center gap-2">
              <Bot className="h-6 w-6" />
              <div>
                <p className="font-bold text-sm">Gardening Bangladesh</p>
                <p className="text-xs text-white/80">অনলাইন সাহায্যকারী</p>
              </div>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="h-[300px] overflow-y-auto p-3 space-y-2 scrollbar-thin bg-brand-white-soft">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.role === "bot" && (
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-green text-white">
                      <Bot className="h-4 w-4" />
                    </span>
                  )}
                  <div
                    className={`max-w-[75%] rounded-2xl px-3 py-2 text-sm ${
                      msg.role === "user"
                        ? "bg-brand-black text-white rounded-br-sm"
                        : "bg-brand-green-light text-foreground rounded-bl-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                  {msg.role === "user" && (
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-black text-white">
                      <User className="h-4 w-4" />
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="flex gap-1.5 p-3 border-t border-border bg-white">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="মেসেজ লিখুন..."
                className="flex-1 rounded-full bg-brand-white-soft px-4 py-2 text-sm outline-none border border-border focus:border-brand-green"
              />
              <button
                onClick={send}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-green text-white hover:bg-brand-green-dark transition-colors"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
