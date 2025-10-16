import { useContext } from "react"
import { WorkspaceContext } from "../../Context/WorkspaceContext"
import WorkspaceList from "../../Components/WorkspaceList/WorkspaceList"
import LoaderSpinner from "../../Components/LoaderSpinner/LoaderSpinner"

export default function WorkspaceListScreen() {
    const { isLoadingWorkspaces } = useContext(WorkspaceContext)

    if (isLoadingWorkspaces) {
        return <LoaderSpinner />
    }

    return (
        <div>
            <WorkspaceList />
        </div>
    )
}