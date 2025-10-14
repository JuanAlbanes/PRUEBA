import React, { useContext, useEffect, useState } from "react";
import { SlackContext } from "../../Context/SlackContext.jsx";
import "./ChannelList.css";

export default function ChannelList() {
    const { selectedWorkspace, selectedChannel, setSelectedChannel } = useContext(SlackContext);
    const [channels, setChannels] = useState([]);

    useEffect(() => {
        if (!selectedWorkspace) return;

        const fetchChannels = async () => {
            try {
                const res = await fetch(`${import.meta.env.VITE_API_URL}/workspaces/${selectedWorkspace.id}/channels`);
                const data = await res.json();
                setChannels(data);
            } catch (err) {
                console.error("Error obteniendo canales:", err);
            }
        };

        fetchChannels();
    }, [selectedWorkspace]);

    return (
        <div className="channel-list">
            <h4>Canales</h4>
            {channels.map((c) => (
                <div
                    key={c.id}
                    className={`channel-item ${selectedChannel?.id === c.id ? "active" : ""}`}
                    onClick={() => setSelectedChannel(c)}
                >
                    # {c.name}
                </div>
            ))}
        </div>
    );
}
