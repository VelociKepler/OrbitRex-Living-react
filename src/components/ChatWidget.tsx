import { useRef, useState, useEffect } from "react";

function ChatWidget() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Scroll to the latest message
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = () => {
    const trimmedMessage = input.trim();
    if (trimmedMessage) {
      setMessages((prevMessages) => [...prevMessages, trimmedMessage]);
      setInput("");
    }
  };

  const toggleChat = () => setIsChatOpen((prevState) => !prevState);

  return (
    <div className = "fixed bottom-5 right-5 z-50">
      {/* Chat Toggle Button */}
      <button
        onClick = {toggleChat}
        className = "bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600"
      >
        <i className = "fa-solid fa-comments text-xl"></i>
      </button>

      {/* Chat Box */}
      {isChatOpen && (
        <div className = "fixed bottom-16 right-5 w-80 h-96 bg-white shadow-lg rounded-lg">
          <ChatHeader onClose = {toggleChat} />
          <ChatMessages
            messages = {messages}
            messagesEndRef = {messagesEndRef}
          />
          <ChatInput
            input = {input}
            onInputChange = {setInput}
            onSendMessage = {sendMessage}
          />
        </div>
      )}
    </div>
  );
}

type ChatHeaderProps = {
  onClose: () => void;
};

const ChatHeader: React.FC<ChatHeaderProps> = ({ onClose }) => (
  <div className = "flex items-center justify-between bg-blue-500 text-white p-3 rounded-t-lg">
    <h1 className = "text-lg font-bold">Chat</h1>
    <button
      onClick = {onClose}
      className = "text-white hover:text-gray-300"
    >
      <i className = "fa-solid fa-times"></i>
    </button>
  </div>
);

type ChatMessagesProps = {
  messages: string[];
  messagesEndRef: React.RefObject<HTMLDivElement>;
};

const ChatMessages: React.FC<ChatMessagesProps> = ({ messages, messagesEndRef }) => (
  <div className = "p-4 overflow-y-auto h-56">
    {messages.map((message, index) => (
      <div
        key = {index}
        className = "mb-2"
      >
        <p className = "bg-gray-100 p-2 rounded-lg">{message}</p>
      </div>
    ))}
    <div ref = {messagesEndRef} />
  </div>
);

type ChatInputProps = {
  input: string;
  onInputChange: (value: string) => void;
  onSendMessage: () => void;
};

const ChatInput: React.FC<ChatInputProps> = ({ input, onInputChange, onSendMessage }) => (
  <div className = "p-3 border-t flex">
    <input
      type = "text"
      value = {input}
      onChange = {(e) => onInputChange(e.target.value)}
      onKeyDown = {(e) => {
        if (e.key === "Enter") onSendMessage();
      }}
      placeholder = "Type your message..."
      className = "w-full p-2 border rounded-lg"
    />
    <button
      onClick = {onSendMessage}
      className = "ml-2 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
    >
      Send
    </button>
  </div>
);

export default ChatWidget;