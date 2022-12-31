import { useSelector } from 'react-redux'
import { happinesSelector } from '../selectors'

type HappinessTrackerProps = {}

const HappinessTracker = (props: HappinessTrackerProps) => {
    const Moments = useSelector(happinesSelector);
    return (
        <div className=" bg-yellow-400 text-white flex items-center px-5 flex-col gap-1">
            {Moments.map((moment,i)=>{
                return (
                    <div key={i}><span>Your happy count is : {moment.intensity}</span>, at time : {moment.when.getHours()}<span></span></div>
                )
            })}
        </div>
    )
}
export default HappinessTracker