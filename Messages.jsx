import React, { useState } from 'react';
import { ArrowLeft, Search, MoreVertical, Phone, Video, Paperclip, Smile, Mic, Send } from 'lucide-react';

const Messages = () => {
  const [selectedChat, setSelectedChat] = useState(null);

  // Sample contacts data
  const contacts = [
    {
      id: 1,
      name: 'Alice Johnson',
      lastMessage: 'Hey, how are you doing?',
      time: '2:30 PM',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b1c4?w=150&h=150&fit=crop&crop=face',
      unread: 2,
      online: true
    },
    {
      id: 2,
      name: 'Bob Smith',
      lastMessage: 'Did you see the game last night?',
      time: '1:45 PM',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      unread: 0,
      online: false
    },
    {
      id: 3,
      name: 'Carol Williams',
      lastMessage: 'Thanks for your help!',
      time: '12:20 PM',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      unread: 0,
      online: true
    },
    {
      id: 4,
      name: 'David Brown',
      lastMessage: 'Let\'s meet tomorrow at 3 PM',
      time: '11:55 AM',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      unread: 1,
      online: false
    },
    {
      id: 5,
      name: 'Emma Davis',
      lastMessage: 'Great job on the presentation!',
      time: '10:30 AM',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
      unread: 0,
      online: true
    }
  ];

  // Sample messages for selected contact
  const getMessages = (contactId) => {
    const messageData = {
      1: [
        { id: 1, text: 'Hey there! How are you doing?', sender: 'them', time: '2:25 PM' },
        { id: 2, text: 'I\'m doing great, thanks! How about you?', sender: 'me', time: '2:27 PM' },
        { id: 3, text: 'Pretty good! Working on some exciting projects', sender: 'them', time: '2:28 PM' },
        { id: 4, text: 'That sounds awesome! Tell me more about it', sender: 'me', time: '2:30 PM' }
      ],
      2: [
        { id: 1, text: 'Did you catch the game last night?', sender: 'them', time: '1:40 PM' },
        { id: 2, text: 'Yes! What an incredible match!', sender: 'me', time: '1:42 PM' },
        { id: 3, text: 'I know right! That last goal was insane', sender: 'them', time: '1:45 PM' }
      ],
      3: [
        { id: 1, text: 'Thanks so much for your help with the project!', sender: 'them', time: '12:15 PM' },
        { id: 2, text: 'You\'re very welcome! Happy to help anytime', sender: 'me', time: '12:18 PM' },
        { id: 3, text: 'Really appreciate it! 😊', sender: 'them', time: '12:20 PM' }
      ],
      4: [
        { id: 1, text: 'Hey, are you free tomorrow afternoon?', sender: 'them', time: '11:50 AM' },
        { id: 2, text: 'Yes, what did you have in mind?', sender: 'me', time: '11:52 AM' },
        { id: 3, text: 'Let\'s meet at the coffee shop at 3 PM', sender: 'them', time: '11:55 AM' }
      ],
      5: [
        { id: 1, text: 'Great job on the presentation today!', sender: 'them', time: '10:25 AM' },
        { id: 2, text: 'Thank you! I was a bit nervous', sender: 'me', time: '10:27 PM' },
        { id: 3, text: 'You didn\'t show it at all! Very professional', sender: 'them', time: '10:30 AM' }
      ]
    };
    return messageData[contactId] || [];
  };

  const selectedContact = contacts.find(c => c.id === selectedChat);
  const messages = selectedChat ? getMessages(selectedChat) : [];

  const handleContactClick = (contactId) => {
    setSelectedChat(contactId);
  };

  const handleBackClick = () => {
    setSelectedChat(null);
  };

  return (
    <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-0 h-[calc(100vh-92px)] bg-gray-100'>
      {/* Contacts List */}
      <div className={`w-full ${selectedChat ? 'hidden md:block' : ''} bg-white border-r border-gray-200 h-full flex flex-col`}>
        {/* Contacts Header */}
        <div className="flex items-center justify-between p-4 bg-gray-50 border-b border-gray-200">
          <h1 className="text-xl font-semibold text-gray-800">Chats</h1>
          <div className="flex items-center space-x-2">
            <button className="p-2 hover:bg-gray-200 rounded-full transition-colors">
              <Search className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-200 rounded-full transition-colors">
              <MoreVertical className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="p-3 bg-white border-b border-gray-100">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search conversations"
              className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>

        {/* Contacts List */}
        <div className="flex-1 overflow-y-auto">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              onClick={() => handleContactClick(contact.id)}
              className={`flex items-center p-4 hover:bg-gray-50 cursor-pointer transition-colors border-b border-gray-100 ${
                selectedChat === contact.id ? 'bg-gray-100' : ''
              }`}
            >
              <div className="relative">
                <img
                  src={contact.avatar}
                  alt={contact.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                {contact.online && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                )}
              </div>
              <div className="ml-3 flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {contact.name}
                  </p>
                  <p className="text-xs text-gray-500">{contact.time}</p>
                </div>
                <div className="flex items-center justify-between mt-1">
                  <p className="text-sm text-gray-600 truncate">
                    {contact.lastMessage}
                  </p>
                  {contact.unread > 0 && (
                    <span className="ml-2 bg-green-500 text-white text-xs rounded-full px-2 py-1 min-w-[20px] text-center">
                      {contact.unread}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Window */}
      <div className={`w-full ${!selectedChat ? 'hidden md:block' : ''} bg-white h-full flex flex-col`}>
        {selectedContact ? (
          <>
            {/* Chat Header */}
            <div className="flex items-center p-4 bg-gray-50 border-b border-gray-200">
              {/* Back button for mobile */}
              <button
                onClick={handleBackClick}
                className="md:hidden mr-3 p-1 hover:bg-gray-200 rounded-full transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              </button>
              
              <div className="relative">
                <img
                  src={selectedContact.avatar}
                  alt={selectedContact.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                {selectedContact.online && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                )}
              </div>
              
              <div className="ml-3 flex-1">
                <h2 className="text-lg font-medium text-gray-900">{selectedContact.name}</h2>
                <p className="text-sm text-gray-500">
                  {selectedContact.online ? 'Online' : 'Last seen recently'}
                </p>
              </div>
              
              <div className="flex items-center space-x-2">
                <button className="p-2 hover:bg-gray-200 rounded-full transition-colors">
                  <Phone className="w-5 h-5 text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-200 rounded-full transition-colors">
                  <Video className="w-5 h-5 text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-200 rounded-full transition-colors">
                  <MoreVertical className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      message.sender === 'me'
                        ? 'bg-green-500 text-white'
                        : 'bg-white text-gray-800 border border-gray-200'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p className={`text-xs mt-1 ${
                      message.sender === 'me' ? 'text-green-100' : 'text-gray-500'
                    }`}>
                      {message.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 bg-white border-t border-gray-200">
              <div className="flex items-center space-x-2">
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <Paperclip className="w-5 h-5 text-gray-600" />
                </button>
                
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="Type a message..."
                    className="w-full px-4 py-2 pr-10 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-200 rounded-full transition-colors">
                    <Smile className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
                
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <Mic className="w-5 h-5 text-gray-600" />
                </button>
                
                <button className="p-2 bg-green-500 hover:bg-green-600 rounded-full transition-colors">
                  <Send className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </>
        ) : (
          /* Welcome Screen when no chat is selected */
          <div className="hidden md:flex flex-1 flex-col items-center justify-center bg-gray-50 text-center p-8">
            <div className="w-64 h-64 bg-gray-200 rounded-full flex items-center justify-center mb-8">
              <div className="w-32 h-32 bg-gray-300 rounded-full flex items-center justify-center">
                <Search className="w-16 h-16 text-gray-400" />
              </div>
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              WhatsApp Web
            </h2>
            <p className="text-gray-600 max-w-md">
              Send and receive messages without keeping your phone online.
              Use WhatsApp on up to 4 linked devices and 1 phone at the same time.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages;