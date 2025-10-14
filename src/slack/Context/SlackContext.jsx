import React, { createContext, useState, useEffect } from "react";

export const SlackContext = createContext();

export default function SlackProvider({ children }) {
    const [workspaces, setWorkspaces] = useState([
        { id: 1, name: "General" },
        { id: 2, name: "Desarrollo" },
    ]);
    const [selectedWorkspace, setSelectedWorkspace] = useState(workspaces[0]);
    const [channels, setChannels] = useState([
        { id: 1, name: "chat-general" },
        { id: 2, name: "frontend" },
        { id: 3, name: "backend" },
    ]);
    const [selectedChannel, setSelectedChannel] = useState(channels[0]);
    const [messages, setMessages] = useState([]);

    const sendMessage = (text) => {
        if (!text.trim()) return;
        const newMsg = {
            id: Date.now(),
            user: "Tú",
            text,
            time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        };
        setMessages((prev) => [...prev, newMsg]);
    };

    return (
        <SlackContext.Provider
            value={{
                workspaces,
                selectedWorkspace,
                setSelectedWorkspace,
                channels,
                selectedChannel,
                setSelectedChannel,
                messages,
                sendMessage,
            }}
        >
            {children}
        </SlackContext.Provider>
    );
}
