import {useState} from "react"
import { ImHappy } from "react-icons/im"
import { useDispatch } from "react-redux/es/exports";
import { happyButtonClicked } from "../action";
import Button from "./Button";
import TrackerInput from "./TrackerInput";

type HappinessIncProps = {}

const HappinessInc = (props: HappinessIncProps) => {
    const [quantity, setQuantity] = useState(0)

    function handleQuantity(e:any){
        setQuantity(+e.target.value)
    }
    
    const dispatch = useDispatch()
    function dispatchBtnAction(){
        dispatch(happyButtonClicked(quantity))
    }
    return (
        <div className="flex flex-col gap-2 justify-center items-center p-5">
            <ImHappy className="text-7xl text-white bg-yellow-300 rounded-full"></ImHappy>
            <TrackerInput
                quantity={quantity}
                handleQuantity={handleQuantity}
                className="border-yellow-500"
            />
            <Button
                className="bg-yellow-500"
                dispatchBtnAction={dispatchBtnAction}
            >
                HAPPY
            </Button>
        </div>
    )
}
export default HappinessInc;