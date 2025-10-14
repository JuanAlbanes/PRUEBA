import React, { useContext } from "react";
import { SlackContext } from "../../Context/SlackContext.jsx";
import Message from "../Message/Message.jsx";
import MessageInput from "../MessageInput/MessageInput.jsx";
import "./ChatWindow.css";

export default function ChatWindow() {
    const { selectedChannel, messages } = useContext(SlackContext);

    return (
        <div className="chat-window">
            <header className="chat-header"># {selectedChannel.name}</header>
            <div className="chat-messages">
                {messages.length === 0 ? (
                    <p className="empty">No hay mensajes aún.</p>
                ) : (
                    messages.map((msg) => <Message key={msg.id} message={msg} />)
                )}
            </div>
            <MessageInput />
        </div>
    );
}
