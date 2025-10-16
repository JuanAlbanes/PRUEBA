import { useContext, useEffect } from "react"
import { useParams } from "react-router"
import { MessagesContext } from "../../Context/MessagesContext"
import { WorkspaceContext } from "../../Context/WorkspaceContext"
import ChatHeader from "../../Components/ChatHeader/ChatHeader"
import Chat from "../../Components/Chat/Chat"
import NewMessageForm from "../../Components/NewMessageForm/NewMessageForm"
import LoaderSpinner from "../../Components/LoaderSpinner/LoaderSpinner"
import "./ChatScreen.css"

export default function ChatScreen() {
    const { workspace_id } = useParams()
    const { loadMessages, isMessagesLoading } = useContext(MessagesContext)
    const { workspaces } = useContext(WorkspaceContext)

    const currentWorkspace = workspaces.find((w) => w.id === Number(workspace_id))

    useEffect(() => {
        loadMessages(workspace_id)
    }, [workspace_id])

    if (isMessagesLoading) {
        return <LoaderSpinner />
    }

    return (
        <div className="chat-screen">
            <ChatHeader workspace={currentWorkspace} />
            <Chat />
            <NewMessageForm />
        </div>
    )
}