import { createContext, useState } from "react"
import { getMessagesByWorkspaceId, addMessageToWorkspace, deleteMessage } from '../services/messagesService-slack.js'

export const MessagesContext = createContext({
    messages: [],
    isMessagesLoading: true,
    loadMessages: (workspace_id) => { },
    handleAddMessage: (workspace_id, text) => { },
    handleDeleteMessage: (workspace_id, message_id) => { },
})

const MessagesContextProvider = ({ children }) => {
    const [messages, setMessages] = useState([])
    const [isMessagesLoading, setIsMessagesLoading] = useState(true)
    const [currentWorkspaceId, setCurrentWorkspaceId] = useState(null)

    const loadMessages = (workspace_id) => {
        setIsMessagesLoading(true)
        setCurrentWorkspaceId(workspace_id)
        setTimeout(() => {
            const workspace_messages = getMessagesByWorkspaceId(workspace_id)
            setMessages(workspace_messages)
            setIsMessagesLoading(false)
        }, 900)
    }

    const handleAddMessage = (workspace_id, text) => {
        const newMessage = addMessageToWorkspace(workspace_id, text)
        if (newMessage) {
            setMessages([...messages, newMessage])
        }
    }

    const handleDeleteMessage = (workspace_id, message_id) => {
        const success = deleteMessage(workspace_id, message_id)
        if (success) {
            const updatedMessages = messages.filter((m) => m.id !== Number(message_id))
            setMessages(updatedMessages)
        }
    }

    return (
        <MessagesContext.Provider
            value={{
                messages,
                isMessagesLoading,
                loadMessages,
                handleAddMessage,
                handleDeleteMessage,
                currentWorkspaceId,
            }}
        >
            {children}
        </MessagesContext.Provider>
    )
}

export default MessagesContextProvider