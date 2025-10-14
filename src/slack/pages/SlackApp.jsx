import React from "react";
import SlackProvider from "../Context/SlackContext.jsx";
import Sidebar from "../Components/Sidebar/Sidebar.jsx";
import ChatWindow from "../Components/ChatWindow/ChatWindow.jsx";
import "./SlackApp.css";

export default function SlackApp() {
    return (
        <SlackProvider>
            <div className="slack-app">
                <Sidebar />
                <ChatWindow />
            </div>
        </SlackProvider>
    );
}
