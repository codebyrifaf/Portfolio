"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/Card";

// Mock AI responses based on your profile
const getAIResponse = (message: string): string => {
  const lowerMessage = message.toLowerCase();
  
  // Basic Greetings
  if (lowerMessage.includes("hi") || lowerMessage.includes("hello") || lowerMessage.includes("hey")) {
    const greetings = [
      "Hello! 👋 Great to meet you! I'm here to tell you all about Rifaf. What would you like to know?",
      "Hey there! 😊 Nice to chat with you! I'm Rifaf's AI assistant. Feel free to ask me anything about him!",
      "Hi! 🤖 I'm excited to talk with you! I know everything about Rifaf - his projects, skills, life, and more!",
      "Hello! Welcome to Rifaf's portfolio! 🚀 I'm here to help you get to know him better. What interests you most?"
    ];
    return greetings[Math.floor(Math.random() * greetings.length)];
  }
  
  // How are you
  if (lowerMessage.includes("how are you") || lowerMessage.includes("how's it going") || lowerMessage.includes("what's up")) {
    const responses = [
      "I'm doing great, thanks for asking! 😊 I'm always excited to talk about Rifaf and his amazing work. How are you doing today?",
      "I'm fantastic! 🤖 I love helping people learn about Rifaf's journey in tech. What brings you to his portfolio today?",
      "I'm doing wonderful! 🌟 Always ready to chat about Rifaf's projects and achievements. How can I help you today?",
      "I'm excellent, thank you! 😄 Just here sharing Rifaf's story with awesome people like you. What would you like to know about him?"
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }
  
  // Good morning/afternoon/evening
  if (lowerMessage.includes("good morning") || lowerMessage.includes("good afternoon") || lowerMessage.includes("good evening")) {
    const timeGreetings = [
      "Good day to you too! ☀️ Perfect time to learn about Rifaf's amazing projects. What catches your interest?",
      "What a lovely day to explore Rifaf's portfolio! 🌅 I'm here to help you discover his journey. Where shall we start?",
      "Hello and good day! 🌞 Thanks for visiting Rifaf's portfolio. I'm excited to share his story with you!"
    ];
    return timeGreetings[Math.floor(Math.random() * timeGreetings.length)];
  }
  
  // Thank you
  if (lowerMessage.includes("thank you") || lowerMessage.includes("thanks") || lowerMessage.includes("appreciate")) {
    const thankResponses = [
      "You're so welcome! 😊 I'm happy to help you learn about Rifaf. Is there anything else you'd like to know?",
      "My pleasure! 🤗 I love sharing Rifaf's story. Feel free to ask me anything else!",
      "Anytime! 😄 That's what I'm here for. What else would you like to discover about Rifaf?"
    ];
    return thankResponses[Math.floor(Math.random() * thankResponses.length)];
  }
  
  // Nice to meet you
  if (lowerMessage.includes("nice to meet you") || lowerMessage.includes("pleasure to meet")) {
    return "The pleasure is all mine! 🤝 I'm thrilled to meet you too. I'm here to be your guide through Rifaf's amazing journey in tech. What would you like to explore first?";
  }
  
  // How old are you / age
  if (lowerMessage.includes("how old") || lowerMessage.includes("age") || lowerMessage.includes("born")) {
    return "Rifaf was born on July 18, 2002, so he's 22 years old! 🎂 Pretty impressive what he's accomplished at such a young age, right? He's been coding since he was quite young and has already built 20+ projects!";
  }
  
  // What's your name
  if (lowerMessage.includes("what's your name") || lowerMessage.includes("who are you") && lowerMessage.includes("assistant")) {
    return "I'm Rifaf's AI assistant! 🤖 I don't have a specific name - I'm just here to help you get to know Rifaf better. You can think of me as his digital representative! What would you like to know about him?";
  }
  
  // Compliments
  if (lowerMessage.includes("amazing") || lowerMessage.includes("awesome") || lowerMessage.includes("impressive") || lowerMessage.includes("cool")) {
    const complimentResponses = [
      "Right?! 🤩 Rifaf is truly amazing! His dedication to learning and building innovative projects is inspiring. What aspect impressed you the most?",
      "I'm so glad you think so! 😊 Rifaf has put so much passion into his work. His projects range from healthcare apps to game engines - pretty diverse, right?",
      "Absolutely! 🚀 Rifaf's journey is incredible. From playing in the IUT football team to building complex software systems - he's quite the multi-talented person!"
    ];
    return complimentResponses[Math.floor(Math.random() * complimentResponses.length)];
  }
  
  // Funny/jokes
  if (lowerMessage.includes("funny") || lowerMessage.includes("joke") || lowerMessage.includes("laugh")) {
    const funnyResponses = [
      "Haha! 😄 Well, here's something fun - Rifaf is better at FIFA than actual football! Just kidding, he's actually great at both! ⚽🎮",
      "😂 You want to hear something amusing? Rifaf once spent more time perfecting his voxel engine than he did on his actual university assignments! Priorities, right? 🎮",
      "Here's a fun fact: Rifaf's girlfriend gets emotional over small things, but he gets emotional over clean code! 😅 They're perfect for each other!"
    ];
    return funnyResponses[Math.floor(Math.random() * funnyResponses.length)];
  }
  
  // Bye/goodbye
  if (lowerMessage.includes("bye") || lowerMessage.includes("goodbye") || lowerMessage.includes("see you")) {
    const goodbyes = [
      "Goodbye! 👋 It was wonderful chatting with you! Don't forget to check out Rifaf's projects, and feel free to come back anytime!",
      "See you later! 😊 Thanks for learning about Rifaf with me. I hope you'll reach out to him - he'd love to connect!",
      "Take care! 🌟 I hope you enjoyed getting to know Rifaf better. Remember, he's always open to new opportunities and conversations!"
    ];
    return goodbyes[Math.floor(Math.random() * goodbyes.length)];
  }
  
  // Random conversation starters
  if (lowerMessage.includes("tell me something") || lowerMessage.includes("surprise me") || lowerMessage.includes("random")) {
    const randomFacts = [
      "Here's something cool! 🌟 Rifaf is Pro-Secretary of the IUT Al-Fazari Interstellar Society and has a Silver Honor from the International Astronomy and Astrophysics Competition. He literally reaches for the stars! ⭐",
      "Fun fact! 🏆 Rifaf maintains a 100% project success rate. Every single project he takes on gets completed successfully. That's some serious dedication!",
      "Did you know? 🎮 Rifaf built a complete voxel engine in Unity with procedural generation, multithreading, and custom shaders. It's like Minecraft but cooler!",
      "Here's something sweet! 💕 Rifaf's in a long-distance relationship with someone in Paris, and despite the distance, their love keeps them connected across continents!"
    ];
    return randomFacts[Math.floor(Math.random() * randomFacts.length)];
  }
  
  // Personal Info
  if (lowerMessage.includes("who are you") || lowerMessage.includes("about yourself") || lowerMessage.includes("introduce")) {
    return "Hi! I'm Rifaf Rahman, a passionate Software Engineering student at IUT (Islamic University of Technology) in Bangladesh. I'm currently in my 7th semester and expected to graduate in 2025. I have 3+ years of experience in full-stack development and have built 20+ projects using technologies like MERN stack, React Native, Unity3D, and more!";
  }
  
  // Education
  if (lowerMessage.includes("education") || lowerMessage.includes("university") || lowerMessage.includes("iut")) {
    return "I'm pursuing a BSc in Software Engineering at Islamic University of Technology (IUT), currently in my 7th semester with expected graduation in 2025. I completed my HSC from Dhaka College in 2021. I'm also planning to pursue an MBA in Europe, preferably focused on tech/innovation management!";
  }
  
  // Projects
  if (lowerMessage.includes("projects") || lowerMessage.includes("work") || lowerMessage.includes("portfolio")) {
    return "I've completed 20+ projects! Some highlights: DocTime (MERN stack doctor appointment system), Foodex (React Native food ordering app), Crafted Soul (eCommerce website), PixelForge (Unity3D voxel engine), and a comprehensive QA automation suite with 470+ test cases using Playwright. Each project showcases different aspects of full-stack development!";
  }
  
  // Skills
  if (lowerMessage.includes("skills") || lowerMessage.includes("technologies") || lowerMessage.includes("programming")) {
    return "I'm proficient in 5+ programming languages: JavaScript, Python, Java, C#, C++, and C. I work with modern frameworks like React, Node.js, Express.js, React Native, and have experience with databases like MongoDB and Oracle. I'm also skilled in cloud platforms (AWS, Azure), Unity3D for game development, and various tools like Docker, Git, and Playwright for automation.";
  }
  
  // Experience
  if (lowerMessage.includes("experience") || lowerMessage.includes("professional") || lowerMessage.includes("work")) {
    return "I have 3+ years of hands-on experience as a freelance full-stack & mobile developer. I've built scalable web/mobile apps, automation scripts, and cloud-integrated systems. I maintain a 100% project success rate and have 15+ repositories on GitHub showcasing my work!";
  }
  
  // Personal Life
  if (lowerMessage.includes("personal") || lowerMessage.includes("hobbies") || lowerMessage.includes("football") || lowerMessage.includes("fifa")) {
    return "I love playing football and I'm currently part of the main IUT CSE football team! I'm also very good at FIFA (the game 😄). I live in Dhanmondi, Dhaka. My other interests include mobile photography, competitive programming, astronomy, and game design. I'm also Pro-Secretary of the IUT Al-Fazari Interstellar Society!";
  }
  
  // Girlfriend (keeping it brief and respectful)
  if (lowerMessage.includes("girlfriend") || lowerMessage.includes("relationship")) {
    return "I'm in a wonderful relationship with someone very special who lives in Paris, France. She's currently in lycée and is incredibly smart and beautiful. She has a soft personality and is very emotional, which makes her even more endearing. Her academic excellence and kind nature inspire me every day! 💕";
  }
  
  // Location
  if (lowerMessage.includes("location") || lowerMessage.includes("where") || lowerMessage.includes("live")) {
    return "I currently live in Dhanmondi, Dhaka, Bangladesh. I'm studying at Islamic University of Technology (IUT) and actively involved in the local tech community, including conducting workshops at various colleges!";
  }
  
  // Goals
  if (lowerMessage.includes("goals") || lowerMessage.includes("future") || lowerMessage.includes("plans")) {
    return "My short-term goals include completing my BSc in Software Engineering and pursuing an MBA in Europe. Long-term, I want to build impactful tech products with global reach, possibly co-found a startup, and contribute to tech education in Bangladesh. I'm passionate about innovation and leadership in technology!";
  }
  
  // Contact
  if (lowerMessage.includes("contact") || lowerMessage.includes("reach") || lowerMessage.includes("email")) {
    return "You can reach me through my GitHub profile or the contact section on this portfolio. I'm always open to discussing new opportunities, collaborations, or just chatting about technology and innovation!";
  }
  
  // Default response
  const defaultResponses = [
    "That's an interesting question! 🤔 I'm Rifaf Rahman, a Software Engineering student and full-stack developer. Feel free to ask me about my projects, skills, education, or anything else you'd like to know about my journey in tech! 🚀",
    "Hmm, I'm not sure I understand that completely, but I'd love to help! 😊 Try asking me about Rifaf's projects, his life, his skills, or anything else you're curious about!",
    "That's a great question! 🌟 I'm here to share everything about Rifaf's journey. Whether it's his coding projects, football passion, or future plans - I'm your go-to source!"
  ];
  return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
};

export const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{id: number, text: string, isUser: boolean}>>([
    { id: 1, text: "Hi! I'm Rifaf's AI assistant. Ask me anything about his background, projects, skills, or experience! 🤖", isUser: false }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputMessage,
      isUser: true
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse = {
        id: Date.now() + 1,
        text: getAIResponse(inputMessage),
        isUser: false
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-emerald-400 to-sky-400 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          )}
        </motion.div>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-40 w-80 h-96 md:w-96 md:h-[500px]"
          >
            <Card className="h-full bg-gray-900 border-gray-700 flex flex-col">
              {/* Header */}
              <div className="p-4 border-b border-gray-700">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-emerald-400 to-sky-400 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">R</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Rifaf's AI Assistant</h3>
                      <p className="text-gray-400 text-xs">Ask me anything!</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        message.isUser
                          ? 'bg-gradient-to-r from-emerald-400 to-sky-400 text-white'
                          : 'bg-gray-800 text-gray-100'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                    </div>
                  </motion.div>
                ))}
                
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="bg-gray-800 text-gray-100 p-3 rounded-lg">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-4 border-t border-gray-700">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me anything..."
                    className="flex-1 bg-gray-800 text-white px-3 py-2 rounded-lg border border-gray-600 focus:border-emerald-400 focus:outline-none text-sm"
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputMessage.trim() || isTyping}
                    className="bg-gradient-to-r from-emerald-400 to-sky-400 text-white px-4 py-2 rounded-lg hover:opacity-90 disabled:opacity-50 transition-opacity"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </div>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
