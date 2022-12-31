import { useDispatch } from "react-redux"
import { clearButtonClicked } from "../action"
import Button from "./Button"
import HappinessPage from "./HappinessPage"
import SadnessPage from "./SadnessPage"

type MoodTrackerPageProps = {}

const MoodTrackerPage = (props: MoodTrackerPageProps) => {
    const dispatch = useDispatch()
    function dispatchBtnAction() {
        dispatch(clearButtonClicked())
    }
    return (
        <div className="flex gap-5">
            <HappinessPage />
            <div className="self-end">
                <Button className="bg-green-400" dispatchBtnAction={dispatchBtnAction}>Start Over</Button>
            </div>
            <SadnessPage />
        </div>
    )
}
export default MoodTrackerPage