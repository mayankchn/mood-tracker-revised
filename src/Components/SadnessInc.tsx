import { useState } from "react";
import { ImSad } from "react-icons/im"
import { useDispatch } from "react-redux";
import { sadButtonClicked } from "../action";
import Button from "./Button";
import TrackerInput from "./TrackerInput";

type SadnessIncProps = {}

const SadnessInc = (props: SadnessIncProps) => {
    const [quantity,setQuantity] = useState(0)
    const dispatch = useDispatch()
    function dispatchBtnAction(){
        dispatch(sadButtonClicked(quantity))
    }
    function handleQuantity(e:any){
        console.log(e.target.value)
        setQuantity(+e.target.value)
    }
    return (
        <div className="flex flex-col gap-2 justify-center items-center p-5">
            <ImSad className="text-7xl text-white bg-blue-300 rounded-full"></ImSad>
            <TrackerInput
                quantity={quantity}
                handleQuantity={handleQuantity}
                className="border-blue-500"
            />
            <Button
                className="bg-blue-500"
                dispatchBtnAction={dispatchBtnAction}
            >
                SAD
            </Button>
        </div>
    )
}
export default SadnessInc;