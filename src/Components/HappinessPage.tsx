import HappinessInc from "./HappinessInc"
import HappinessTracker from "./HappinessTracker"

type HappinessPageProps = {}

const HappinessPage = (props:HappinessPageProps) => {
    return (
        <div className="max-w-xl">
            <HappinessTracker />
            <HappinessInc />
        </div>
    )
}
export default HappinessPage;