import React, { useState, useRef, useEffect } from 'react';
import { IoClose } from 'react-icons/io5';
import { RiRobot2Fill, RiSendPlaneFill } from 'react-icons/ri';
import { HiSparkles } from 'react-icons/hi';
import { useChat } from '../context/ChatContext';
import './Chatbot.css';
import { GoogleGenerativeAI } from "@google/generative-ai";

const SYSTEM_PROMPT = "You are CareFlow Support, a helpful healthcare assistant for CareFlow. You help patients find doctors, understand specialties, and guide them through booking appointments. Keep your responses concise, professional, and friendly. If you don't know something, suggest they contact our human support team.";

const Chatbot = () => {
  const { isOpen, setIsOpen, externalMessage, setExternalMessage } = useChat();
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm CareFlow Support. How can I help you with our services, doctor specialties, or booking procedures today?",
      sender: 'bot',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (externalMessage) {
      handleExternalSend(externalMessage);
      setExternalMessage(null);
    }
  }, [externalMessage]);

  const handleExternalSend = (msgText) => {
    const userMessage = {
      id: Date.now(),
      text: msgText,
      sender: 'user',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages(prev => [...prev, userMessage]);
    getBotResponse(msgText);
  };

  const getBotResponse = async (userText) => {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    
    if (!apiKey) {
      const errorMessage = {
        id: Date.now() + 1,
        text: "AI service is temporarily unavailable (API Key missing)",
        sender: 'bot',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, errorMessage]);
      return;
    }

    setIsTyping(true);
    try {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ 
        model: "gemini-1.5-flash",
        systemInstruction: SYSTEM_PROMPT 
      });

      const result = await model.generateContent(userText);
      const response = await result.response;
      const botResponse = response.text();

      const botMessage = {
        id: Date.now() + 1,
        text: botResponse,
        sender: 'bot',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error("Chatbot Error:", error);
      
      let errorText = "AI service is temporarily unavailable";
      if (error.message?.includes('403')) {
        errorText = "Access Denied: Please check if the Gemini API is enabled in your Google AI Studio and if your API key is correct.";
      }

      const errorMessage = {
        id: Date.now() + 1,
        text: errorText,
        sender: 'bot',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: input,
      sender: 'user',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    await getBotResponse(input);
  };

  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  return (
    <div className="chatbot-wrapper">
      <div className={`chatbot-window ${!isOpen ? 'hidden' : ''}`}>
        <div className="chatbot-header">
          <div className="chatbot-header-icon">
            <HiSparkles size={26} />
          </div>
          <div className="chatbot-header-info">
            <h3>CareFlow Support <span className={`status-dot ${apiKey ? 'online' : 'offline'}`}></span></h3>
            <p>{apiKey ? 'Always Online' : 'Connecting...'}</p>
          </div>
          <button 
            className="chatbot-close" 
            onClick={() => setIsOpen(false)}
          >
            <IoClose size={24} />
          </button>
        </div>

        <div className="chatbot-messages">
          {messages.map(msg => (
            <div key={msg.id} className={`message-container ${msg.sender}`}>
              {msg.sender === 'bot' && (
                <div className="bot-avatar">
                  <RiRobot2Fill size={20} />
                </div>
              )}
              <div className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="message-container bot">
              <div className="bot-avatar">
                <RiRobot2Fill size={20} />
              </div>
              <div className="typing-indicator">
                <div className="typing-dot"></div>
                <div className="typing-dot"></div>
                <div className="typing-dot"></div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form className="chatbot-input" onSubmit={handleSend}>
          <input 
            type="text" 
            placeholder="Ask about our services..." 
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" className="send-btn">
            <RiSendPlaneFill />
          </button>
        </form>
      </div>

      <button 
        className={`chatbot-button ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <IoClose size={24} /> : <RiRobot2Fill />}
      </button>
    </div>
  );
};

export default Chatbot;
