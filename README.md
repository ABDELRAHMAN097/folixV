# WhatsApp-like Chat System

A responsive chat system built with React and Tailwind CSS that mimics WhatsApp's behavior and design.

## Features

### 📱 Responsive Design
- **Desktop**: Side-by-side layout with contacts list and chat window
- **Mobile**: Single-view layout that switches between contacts and chat

### 💬 Chat Functionality
- Contact list with avatars, names, last messages, and timestamps
- Online status indicators (green dot)
- Unread message badges
- Message conversations with time stamps
- Sent vs received message styling

### 🎨 WhatsApp-like UI
- Clean, modern interface matching WhatsApp's design
- Smooth hover effects and transitions
- Search functionality in contacts
- Chat header with contact info and action buttons
- Message input area with emoji, attachment, and voice message buttons

### 📱 Mobile-First Behavior
- Back button appears only on mobile when in chat view
- Automatic view switching between contacts and chat on mobile
- Full-screen chat experience on mobile devices

## Installation

1. Install the required dependencies:

```bash
npm install react react-dom lucide-react
npm install -D tailwindcss autoprefixer postcss
```

2. Set up Tailwind CSS in your project by following the [official Tailwind CSS installation guide](https://tailwindcss.com/docs/installation).

3. Import and use the Messages component in your app:

```jsx
import Messages from './Messages';

function App() {
  return (
    <div className="min-h-screen">
      <Messages />
    </div>
  );
}
```

## Component Structure

### `Messages.jsx`
Main component that handles the entire chat system logic:

- **State Management**: Uses `useState` for selected chat tracking
- **Responsive Layout**: Tailwind grid system with conditional visibility
- **Sample Data**: Includes mock contacts and messages for demonstration

### Key Functions
- `handleContactClick(contactId)`: Switches to chat view for selected contact
- `handleBackClick()`: Returns to contacts list (mobile only)
- `getMessages(contactId)`: Retrieves messages for selected contact

## Responsive Behavior

### Desktop (md and above)
```css
grid-cols-2  /* Two-column layout */
md:block    /* Both panels always visible */
```

### Mobile (below md)
```css
grid-cols-1                           /* Single-column layout */
${selectedChat ? 'hidden md:block' : ''}  /* Hide contacts when chat selected */
${!selectedChat ? 'hidden md:block' : ''} /* Hide chat when no selection */
```

## Customization

### Adding Real Data
Replace the mock `contacts` array and `getMessages` function with real data from your API:

```jsx
// Replace contacts array with API data
const [contacts, setContacts] = useState([]);

// Replace getMessages with API call
const getMessages = async (contactId) => {
  const response = await fetch(`/api/messages/${contactId}`);
  return response.json();
};
```

### Styling
All styling uses Tailwind CSS classes. Key color scheme:
- Primary: `green-500` (WhatsApp green)
- Background: `gray-50`, `gray-100`
- Text: `gray-600`, `gray-800`, `gray-900`

### Icons
Uses [Lucide React](https://lucide.dev/) for all icons. Icons included:
- `ArrowLeft`: Back button
- `Search`: Search functionality
- `Phone`, `Video`: Call buttons
- `Send`, `Mic`, `Paperclip`, `Smile`: Message input

## Browser Support

Works on all modern browsers that support:
- CSS Grid
- Flexbox
- ES6+ JavaScript features

## Dependencies

- **React** ^18.2.0: Core library
- **Lucide React** ^0.294.0: Icon library
- **Tailwind CSS** ^3.3.6: Styling framework

## File Structure

```
├── Messages.jsx     # Main chat component
├── App.js          # Demo app component
├── package.json    # Dependencies
└── README.md       # This file
```

## Next Steps

To extend this component:

1. **Add real-time messaging** with WebSocket or Socket.io
2. **Implement message sending** functionality
3. **Add file/image sharing** capabilities
4. **Include typing indicators**
5. **Add message status** (sent, delivered, read)
6. **Implement search** in messages and contacts
7. **Add user authentication**
8. **Store data** in a database (MongoDB, PostgreSQL, etc.)

## License

MIT License - feel free to use this in your projects!






