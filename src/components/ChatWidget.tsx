import { useRef, useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import chatIcon from "../assets/chat.png"; // Import chatbot icon

function ChatWidget() {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [messages, setMessages] = useState<string[]>([]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false); // State to show typing animation
    const [typingMessage, setTypingMessage] = useState("น้องบอทกำลังพิมพ์...");
    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    // Scroll to the latest message
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    // Add initial message when chat widget is created
    useEffect(() => {
        setMessages(["อยาถามไรหรอจ่ะ?"]);
    }, []);

    // Handle typing animation
    useEffect(() => {
        let interval: NodeJS.Timeout | null = null;

        if (isTyping) {
            interval = setInterval(() => {
                setTypingMessage((prev) => {
                    if (prev === "น้องบอทกำลังพิมพ์..............")
                        return "น้องบอทกำลังพิมพ์...";
                    return `${prev}.`;
                });
            }, 500); // Change text every 500ms
        }

        return () => {
            if (interval) clearInterval(interval); // Clear interval when typing stops
        };
    }, [isTyping]);

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Function to send a message to the chatbot API
    const sendMessage = async () => {
        const trimmedMessage = input.trim();
        if (trimmedMessage) {
            // Add user's message to the chat
            setMessages((prevMessages) => [...prevMessages, trimmedMessage]);
            setInput("");

            // Set typing animation
            setIsTyping(true);

            // Simulate backend call
            try {
                const response = await fetch(`https://chatbot-zcq6.onrender.com/api/chat`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ question: trimmedMessage, chat_history: messages }),
                });

                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }

                const data = await response.json();

                // Stop typing animation and add chatbot's response
                setIsTyping(false);
                setTypingMessage("น้องบอทกำลังพิมพ์..."); // Reset typing message
                setMessages((prevMessages) => [...prevMessages, data.answer]);
            } catch (error) {
                console.error("Error sending message:", error);
                setIsTyping(false);
                setTypingMessage("น้องบอทกำลังพิมพ์..."); // Reset typing message
                setMessages((prevMessages) => [
                    ...prevMessages,
                    "Error: Unable to send message. Please try again.",
                ]);
            }
        }
    };

    const toggleChat = () => setIsChatOpen((prevState) => !prevState);

    return (
        <div className="fixed bottom-5 right-5 z-50">
            {/* Chat Toggle Button */}
            <button
                onClick={toggleChat}
                aria-label="Open or close chat"
                className="bg-orange-400 text-white p-3 rounded-full shadow-lg hover:bg-orange-400 focus:outline-none focus:ring focus:ring-blue-300"
            >
                <i className="fa-solid fa-comments text-xl"></i>
            </button>

            {/* Chat Box */}
            {isChatOpen && (
                <div
                    className="fixed bottom-16 right-5 w-82 sm:w-96 h-[28rem] bg-white shadow-lg rounded-lg flex flex-col">
                    <ChatHeader onClose={toggleChat}/>
                    <ChatMessages
                        messages={messages}
                        messagesEndRef={messagesEndRef}
                        isTyping={isTyping}
                        typingMessage={typingMessage}
                    />
                    <ChatInput
                        input={input}
                        onInputChange={setInput}
                        onSendMessage={sendMessage}
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
    <div className="flex items-center justify-between bg-orange-400 text-white px-4 py-2 rounded-t-lg">
        <h1 className="text-lg font-semibold">น้องบอท</h1>
        <button
            onClick={onClose}
            aria-label="Close chat"
            className="text-white hover:text-gray-300"
        >
            <i className="fa-solid fa-times"></i>
        </button>
    </div>
);

type ChatMessagesProps = {
    messages: string[];
    messagesEndRef: React.RefObject<HTMLDivElement>;
    isTyping: boolean; // New prop to determine typing state
    typingMessage: string; // New prop for the typing message text
};

const ChatMessages: React.FC<ChatMessagesProps> = ({
                                                       messages,
                                                       messagesEndRef,
                                                       isTyping,
                                                       typingMessage,
                                                   }) => (
    <div className="p-4 flex-1 overflow-y-auto bg-gray-50">
        {messages.map((message, index) => {
            const isBotMessage = index % 2 === 0; // Bot messages alternate; change if using specific logic
            return (
                <div
                    key={index}
                    className={`mb-2 flex ${isBotMessage ? "justify-start" : "justify-end"}`}
                >
                    {isBotMessage && (
                        <img
                            src={chatIcon}
                            alt="Chatbot"
                            className="w-8 h-8 rounded-full mr-2" // Style for profile icon
                        />
                    )}
                    <div
                        className={`p-2 rounded-lg max-w-xs ${
                            isBotMessage
                                ? "bg-orange-200 text-orange-900"
                                : "bg-gray-200 text-gray-900"
                        }`}
                    >
                        <ReactMarkdown>{message}</ReactMarkdown>
                    </div>
                </div>
            );
        })}
        {/* Show typing animation */}
        {isTyping && (
            <div className="mb-2 flex justify-start">
                <img
                    src={chatIcon}
                    alt="Chatbot"
                    className="w-8 h-8 rounded-full mr-2" // Add the icon for typing as well
                />
                <div className="p-2 rounded-lg max-w-xs bg-orange-200 text-gray-900">
                    <ReactMarkdown>{typingMessage}</ReactMarkdown>
                </div>
            </div>
        )}
        <div ref={messagesEndRef} />
    </div>
);

type ChatInputProps = {
    input: string;
    onInputChange: (value: string) => void;
    onSendMessage: () => void;
};

const ChatInput: React.FC<ChatInputProps> = ({ input, onInputChange, onSendMessage }) => (
    <div className="p-3 border-t border-gray-300 flex items-center">
        <input
            type="text"
            value={input}
            onChange={(e) => onInputChange(e.target.value)}
            onKeyDown={(e) => {
                if (e.key === "Enter") onSendMessage();
            }}
            placeholder="Compose your message..."
            className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
        />
        <button
            onClick={onSendMessage}
            aria-label="Send message"
            className="ml-2 bg-orange-400 text-white px-4 py-2 rounded-xl hover:bg-orange-400"
        >
            Send
        </button>
    </div>
);

export default ChatWidget;