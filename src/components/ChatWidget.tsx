import { useRef, useState, useEffect } from "react";

function ChatWidget() {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    // ref สำหรับกล่องข้อความ
    const messagesEndRef = useRef(null)

    // ฟังก์ชันเลื่อนกล่องแชทไปยังข้อความล่าสุด
    const scrollToBottom = () => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
        }
    }

    // ใช้ useEffect เพื่อเลื่อนกล่องข้อความเมื่อ messages เปลี่ยน
    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const sendMessage = () => {
        if (input.trim()) {
            setMessages([...messages, input]);
            setInput("");
        }
    }

    // ฟังก์ชันเปิด-ปิดกล่องแชท
    const toggleChat = () => {
        setIsChatOpen(!isChatOpen);
    };

    return (
        <div className="fixed bottom-5 right-5 z-50">
            {/* ปุ่มแชท */}
            <button
                onClick={toggleChat}
                className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600"
            >
                <i className="fa-solid fa-comments text-xl"></i>
            </button>

            {/* กล่องแชท */}
            {isChatOpen && (
                <div className="fixed bottom-16 right-5 w-80 h-96 bg-white shadow-lg rounded-lg">
                    <div className="flex items-center justify-between bg-blue-500 text-white p-3 rounded-t-lg">
                        <h1 className="text-lg font-bold">Chat</h1>
                        <button onClick={toggleChat} className="text-white hover:text-gray-300">
                            <i className="fa-solid fa-times"></i>
                        </button>
                    </div>
                    <div className="p-4 overflow-y-auto h-56 ">
                        {messages.map((msg, index) => (
                            <div key={index} className="mb-2">
                                <p className="bg-gray-100 p-2 rounded-lg">{msg}</p>
                            </div>
                        ))}
                    <div ref={messagesEndRef}/>
                    </div>
                    <div className="p-3 border-t flex">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") sendMessage()
                            }}
                            placeholder="Type your message..."
                            className="w-full p-2 border rounded-lg"
                        />
                        <button
                            onClick={sendMessage}
                            className="ml-2 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
                        >
                            Send
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ChatWidget;