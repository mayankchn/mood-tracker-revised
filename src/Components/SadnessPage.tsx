import SadnessInc from "./SadnessInc"
import SadnessTracker from "./SadnessTracker"

type SadnessPageProps = {}

const SadnessPage = (props:SadnessPageProps) => {
    return (
        <div className="">
            <SadnessTracker />
            <SadnessInc />
        </div>
    )
}
export default  SadnessPage