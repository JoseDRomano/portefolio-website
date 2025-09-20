'use client';

import React, { useState } from 'react';
import { ChatBotWidget } from "chatbot-widget-ui";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi! I'm José's AI assistant. Ask me anything about his skills, experience, or projects!" }
  ]);

  const botResponses = {
    greeting: [
      "Hello! I'm here to help you learn about José's background and skills.",
      "Hi there! Feel free to ask me about José's experience or projects.",
      "Hey! I can tell you about José's work as an AI Engineer."
    ],
    skills: [
      "José is an AI Engineer with expertise in machine learning, data analysis, and software development. He specializes in transforming data into actionable decisions.",
      "His key skills include Python, machine learning frameworks, data visualization, and building AI solutions that drive business value.",
      "José works with various technologies including Python, TensorFlow, PyTorch, and has experience in both supervised and unsupervised learning."
    ],
    experience: [
      "José has extensive experience in AI and data science, working on projects that involve data transformation and decision-making systems.",
      "He has a strong background in developing machine learning models and implementing AI solutions for real-world problems.",
      "His experience spans across data analysis, model development, and creating AI-driven applications."
    ],
    projects: [
      "José has worked on various AI projects focusing on data transformation and decision-making systems. You can explore his portfolio to see specific examples.",
      "His projects typically involve machine learning, data analysis, and building intelligent systems that help organizations make better decisions.",
      "He has experience with end-to-end AI project development, from data collection to model deployment."
    ],
    contact: [
      "You can reach José through LinkedIn or by booking a call using the 'Book a call' button in the dock below!",
      "For professional inquiries, José is available on LinkedIn. You can also schedule a call to discuss potential collaborations.",
      "Feel free to connect with José on LinkedIn or use the booking system to schedule a meeting."
    ],
    default: [
      "That's an interesting question! José is an AI Engineer who specializes in transforming data into decisions. Would you like to know more about his specific skills or projects?",
      "I'd be happy to help! José works in AI and data science. You can ask me about his skills, experience, projects, or how to contact him.",
      "Great question! José is passionate about AI and data science. Feel free to ask about his technical skills, work experience, or ongoing projects."
    ]
  };

  const getBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return botResponses.greeting[Math.floor(Math.random() * botResponses.greeting.length)];
    } else if (message.includes('skill') || message.includes('what can') || message.includes('expertise')) {
      return botResponses.skills[Math.floor(Math.random() * botResponses.skills.length)];
    } else if (message.includes('experience') || message.includes('work') || message.includes('background')) {
      return botResponses.experience[Math.floor(Math.random() * botResponses.experience.length)];
    } else if (message.includes('project') || message.includes('portfolio') || message.includes('work on')) {
      return botResponses.projects[Math.floor(Math.random() * botResponses.projects.length)];
    } else if (message.includes('contact') || message.includes('reach') || message.includes('email') || message.includes('linkedin')) {
      return botResponses.contact[Math.floor(Math.random() * botResponses.contact.length)];
    } else {
      return botResponses.default[Math.floor(Math.random() * botResponses.default.length)];
    }
  };

  const customApiCall = async (message) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    return getBotResponse(message);
  };

  const handleBotResponse = (response) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { role: "assistant", content: response },
    ]);
  };

  const handleNewMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  return (
    <div className="fixed bottom-8 right-8 z-45" style={{ zIndex: 45 }}>
      <style jsx>{`
        :global(.chatbot-widget-button) {
          width: 120px !important;
          height: 120px !important;
          border-radius: 50% !important;
        }
        :global(.chatbot-widget-bot-avatar) {
          background-color: transparent !important;
          background: none !important;
        }
        :global(.chatbot-widget-bot-avatar img) {
          background-color: transparent !important;
          background: none !important;
        }
        :global(.chatbot-widget-message-bot) {
          background-color: transparent !important;
          background: none !important;
        }
        :global(.chatbot-widget-message-bot .chatbot-widget-bot-avatar) {
          background-color: transparent !important;
          background: none !important;
        }
        :global(.chatbot-widget-message-bot .chatbot-widget-bot-avatar div) {
          background-color: transparent !important;
          background: none !important;
        }
        :global(.chatbot-widget-message-bot .chatbot-widget-bot-avatar span) {
          background-color: transparent !important;
          background: none !important;
        }
        :global(.chatbot-widget-message-bot .chatbot-widget-bot-avatar div) {
          text-align: left !important;
          padding-left: 0 !important;
          margin-left: -50px !important;
        }
        .notification-badge {
          position: absolute;
          top: -20px;
          right: -5px;
          width: 24px;
          height: 24px;
          background-color: #ef4444;
          border-radius: 50%;
          border: 3px solid white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: bold;
          color: white;
          z-index: 50;
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
      <div style={{ position: 'relative' }}>
        <div className="notification-badge">
          1
        </div>
      <ChatBotWidget
        callApi={customApiCall}
        onBotResponse={handleBotResponse}
        handleNewMessage={handleNewMessage}
        messages={messages}
        primaryColor="#2563eb"
        inputMsgPlaceholder="Ask me something about José..."
        chatbotName="RomanOS"
        isTypingMessage="José's assistant is typing..."
        IncommingErrMsg="Oops! Something went wrong. Try again."
        chatIcon={<div style={{ fontSize: '48px' }}>🤖</div>}
        botIcon={<div style={{ fontSize: '48px', backgroundColor: 'transparent' }}>🤖</div>}
        botFontStyle={{
          fontFamily: "Arial, Helvetica, sans-serif",
          fontSize: "14px",
          color: "#374151",
        }}
        typingFontStyle={{
          fontFamily: "Arial, Helvetica, sans-serif",
          fontSize: "12px",
          color: "#6b7280",
          fontStyle: "italic",
        }}
        useInnerHTML={true}
      />
      </div>
    </div>
  );
};

export default Chatbot;
