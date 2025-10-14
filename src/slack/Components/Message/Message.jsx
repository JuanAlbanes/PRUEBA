import React from "react";
import "./Message.css";

export default function Message({ message }) {
    return (
        <div className="message">
            <strong>{message.user}</strong>
            <p>{message.text}</p>
            <span className="time">{message.time}</span>
        </div>
    );
}
