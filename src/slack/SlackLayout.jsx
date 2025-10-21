import React from 'react';
import WorkspaceListScreen from './Screens/WorkspaceListScreen/WorkspaceListScreen.jsx';
import ChatScreen from './Screens/ChatScreen/ChatScreen.jsx';
import './SlackLayout.css';
import './slack-responsive.css'

const SlackLayout = () => {
    return (
        <div className="slack-layout">
            <aside className="sidebar">
                <WorkspaceListScreen />
            </aside>
            <main className="chat-area">
                <ChatScreen />
            </main>
        </div>
    );
};

export default SlackLayout;
