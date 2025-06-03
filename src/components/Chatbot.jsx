import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const steps = [
  {
    id: 'welcome',
    message: '🍽️ Welcome to Leeiyorn Squick Meals! How can we serve you today?',
    trigger: 'show-options',
  },
  {
    id: 'show-options',
    options: [
      { value: 'menu', label: 'What\'s on the menu?', trigger: 'menu-response' },
      { value: 'specials', label: 'Any specials today?', trigger: 'specials-response' },
      { value: 'delivery', label: 'Do you deliver?', trigger: 'delivery-response' },
      { value: 'hours', label: 'What are your hours?', trigger: 'hours-response' },
      { value: 'contact', label: 'How can I contact you?', trigger: 'contact-response' },
      { value: 'custom', label: 'I have another question...', trigger: 'user-input' },
    ],
  },
  {
    id: 'user-input',
    user: true,
    validator: (value) => {
      if (!value.trim()) return 'Please type your question';
      return true;
    },
    trigger: 'process-input',
  },
  {
    id: 'process-input',
    message: ({ previousValue }) => {
      const input = previousValue.toLowerCase();
      
      if (input.match(/hi|hello|hey|hola/)) {
        return '👋 Hello! Welcome to Leeiyorn Squick Meals! What can we get for you today?';
      } else if (input.match(/menu|offer|serve/)) {
        return 'Here\'s what\'s cooking today: 🍔 Burgers, 🍕 Pizza, 🍣 Sushi, 🥗 Salads. Need recommendations?';
      } else if (input.match(/burger/)) {
        return 'Our juicy burgers come with crispy fries! Try the Spicy BBQ or Cheesy Deluxe. Want to order?';
      } else if (input.match(/pizza/)) {
        return '🍕 Our wood-fired pizzas are amazing! Choose from Margherita, Pepperoni, or Veggie Supreme.';
      } else if (input.match(/sushi/)) {
        return '🍣 Fresh sushi daily! Popular choices: Dragon Roll, Salmon Nigiri, or our Squick Special Roll.';
      } else if (input.match(/deliver|order/)) {
        return '🚚 Yes! We deliver within 5 miles. Order online at leeiyorn-squickmeals.vercel.app or call us!';
      } else if (input.match(/hour|open|close/)) {
        return '⏰ Open daily: 10AM-10PM (Kitchen closes at 9:30PM)';
      } else if (input.match(/contact|support|help/)) {
        return '📞 Call: (123) 456-7890 | ✉️ Email: orders@leeiyorn.com | 📍 123 Foodie Street';
      } else if (input.match(/bye|quit|exit/)) {
        return '👋 Thanks for chatting! Come back when you\'re hungry!';
      } else {
        return 'I can help with menu, delivery, hours, or contact info. What would you like to know?';
      }
    },
    trigger: 'follow-up',
  },
  {
    id: 'menu-response',
    message: 'Our full menu includes:\n\n🍔 Burgers (Classic, BBQ, Mushroom Swiss)\n🍕 Pizza (Margherita, Pepperoni, Veggie)\n🍣 Sushi (Nigiri, Rolls, Sashimi)\n🥗 Salads (Caesar, Greek, Asian)\n\nWant details on any item?',
    trigger: 'follow-up',
  },
  {
    id: 'specials-response',
    message: '🔥 TODAY\'S SPECIALS 🔥\n\n1. Double Cheeseburger + Fries + Drink = $12.99\n2. Large Pepperoni Pizza = $14.99\n3. Sushi Combo (12pc) = $15.99\n\nLimited time only!',
    trigger: 'follow-up',
  },
  {
    id: 'delivery-response',
    message: '🚚 Delivery Info:\n\n- $3 delivery fee\n- 30-45 min estimated time\n- Minimum $15 order\n- Available within 5 mile radius\n\nOrder online at leeiyorn-squickmeals.vercel.app',
    trigger: 'follow-up',
  },
  {
    id: 'hours-response',
    message: '⏰ Restaurant Hours:\n\nMonday-Friday: 10AM - 10PM\nSaturday-Sunday: 9AM - 11PM\n\nKitchen closes 30 minutes before closing time.',
    trigger: 'follow-up',
  },
  {
    id: 'contact-response',
    message: '📞 Contact Us:\n\nPhone: (123) 456-7890\nEmail: orders@leeiyorn.com\nAddress: 123 Foodie Street, Foodville\nSocial: @LeeiyornSquickMeals\n\nWe respond within 30 minutes!',
    trigger: 'follow-up',
  },
  {
    id: 'follow-up',
    options: [
      { value: 'another', label: 'Ask another question', trigger: 'show-options' },
      { value: 'order', label: 'How do I place an order?', trigger: 'order-response' },
      { value: 'bye', label: 'That\'s all, thanks!', trigger: 'goodbye' },
    ],
  },
  {
    id: 'order-response',
    message: 'You can order:\n\n1. Online: leeiyorn-squickmeals.vercel.app\n2. By phone: (123) 456-7890\n3. In-person at our location\n\nWe accept cash, credit, and mobile payments!',
    trigger: 'follow-up',
  },
  {
    id: 'goodbye',
    message: '👋 Thank you for choosing Leeiyorn Squick Meals! We hope to serve you again soon!',
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
  optionBubbleColor: '#0b5ed7',
  optionFontColor: '#fff',
};

const config = {
  botAvatar: 'https://cdn-icons-png.flaticon.com/512/732/732247.png',
  floating: true,
  width: '400px',
  height: '500px',
  placeholder: 'Type your question here...',
};

const CustomChatbot = () => {
  return (
    <ThemeProvider theme={theme}>
      <ChatBot
        headerTitle="Leeiyorn Food Assistant"
        steps={steps}
        {...config}
      />
    </ThemeProvider>
  );
};

export default CustomChatbot;