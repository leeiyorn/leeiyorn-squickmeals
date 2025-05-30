// CustomChatbot.jsx
import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const steps = [
  {
    id: '0',
    message: 'Welcome to Leeiyorn SquickMeals! How can I assist you today?',
    trigger: '1',
  },
  {
    id: '1',
    options: [
      { value: 'menu', label: 'View Menu', trigger: '2' },
      { value: 'order', label: 'Place an Order', trigger: '3' },
      { value: 'contact', label: 'Contact Support', trigger: '4' },
    ],
  },
  {
    id: '2',
    message: 'You can view our menu on the Getmeals page.',
    end: true,
  },
  {
    id: '3',
    message: 'To place an order, add items to your cart and proceed to checkout.',
    end: true,
  },
  {
    id: '4',
    message: 'You can contact our support at support@leeiyorn-squickmeals.vercel.app.',
    end: true,
  },
];

const theme = {
  background: '#f5f8fb',
  headerBgColor: '#0b5ed7',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#0b5ed7',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

const config = {
  botAvatar: 'https://example.com/bot-avatar.png', // Replace with your bot avatar URL
  floating: true,
};

const CustomChatbot = () => {
  return (
    <ThemeProvider theme={theme}>
      <ChatBot
        headerTitle="Leeiyorn Assistant"
        steps={steps}
        {...config}
      />
    </ThemeProvider>
  );
};

export default CustomChatbot;
