import React, { useContext } from "react";
import { SlackContext } from "../../Context/SlackContext.jsx";
import "./Sidebar.css";

export default function Sidebar() {
    const { workspaces, selectedWorkspace, setSelectedWorkspace, channels, selectedChannel, setSelectedChannel } = useContext(SlackContext);

    return (
        <div className="sidebar">
            <div className="workspace-section">
                {workspaces.map((w) => (
                    <div
                        key={w.id}
                        className={`workspace ${selectedWorkspace.id === w.id ? "active" : ""}`}
                        onClick={() => setSelectedWorkspace(w)}
                    >
                        {w.name}
                    </div>
                ))}
            </div>
            <div className="channels">
                <h4>Canales</h4>
                {channels.map((c) => (
                    <div
                        key={c.id}
                        className={`channel ${selectedChannel.id === c.id ? "active" : ""}`}
                        onClick={() => setSelectedChannel(c)}
                    >
                        # {c.name}
                    </div>
                ))}
            </div>
        </div>
    );
}
