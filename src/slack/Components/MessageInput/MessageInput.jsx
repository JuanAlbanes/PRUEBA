import React, { useContext, useState } from "react";
import { SlackContext } from "../../Context/SlackContext.jsx";
import "./MessageInput.css";

export default function MessageInput() {
    const { sendMessage } = useContext(SlackContext);
    const [text, setText] = useState("");

    const handleSend = () => {
        sendMessage(text);
        setText("");
    };

    return (
        <div className="message-input">
            <input
                type="text"
                placeholder="Escribí un mensaje..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button onClick={handleSend}>Enviar</button>
        </div>
    );
}
