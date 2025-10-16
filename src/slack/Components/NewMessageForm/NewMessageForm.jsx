import { useContext } from "react"
import { useParams } from "react-router"
import { MessagesContext } from "../../Context/MessagesContext"
import "./NewMessageForm.css"
import { IoSend } from "react-icons/io5"

export default function NewMessageForm() {
    const { workspace_id } = useParams()
    const { handleAddMessage } = useContext(MessagesContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        const text = e.target.message.value.trim()
        if (text) {
            handleAddMessage(workspace_id, text)
            e.target.reset()
        }
    }

    return (
        <form onSubmit={handleSubmit} className="message-form">
            <input
                type="text"
                name="message"
                placeholder="Escribe un mensaje..."
                className="message-input"
                autoComplete="off"
            />
            <button type="submit" className="btn-send">
                <IoSend />
            </button>
        </form>
    )
}