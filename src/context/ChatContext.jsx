import React, { createContext, useContext, useState } from 'react';

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [externalMessage, setExternalMessage] = useState(null);

  const openChatWithMsg = (msg) => {
    setExternalMessage(msg);
    setIsOpen(true);
  };

  return (
    <ChatContext.Provider value={{ isOpen, setIsOpen, externalMessage, setExternalMessage, openChatWithMsg }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => useContext(ChatContext);
