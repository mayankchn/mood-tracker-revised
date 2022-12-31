import { useSelector } from "react-redux"
import { sadnessSelector } from "../selectors"

type SadnessTrackerProps = {}

const SadnessTracker = (props: SadnessTrackerProps) => {
    const Moments = useSelector(sadnessSelector);
    return (
        <div className=" bg-blue-400 text-white flex items-center px-5 flex-col gap-1">
                {Moments.map((moment, i) => {
                    return (
                        <div key={i}><span>Your sad count is : {moment.intensity}</span>, at time : {moment.when.toLocaleTimeString()}<span></span></div>
                    )
                })}
            </div>
    )
}
export default SadnessTracker