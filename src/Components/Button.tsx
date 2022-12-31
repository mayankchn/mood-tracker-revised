import { ReactElement } from "react"

type ButtonProps = {
    className: string,
    children: any
    dispatchBtnAction:()=>any
}

const Button = (props: ButtonProps) => {
    return (
        <button
            className={"text-white border font-semibold text-xs px-3 py-1 " + props.className}
            onClick={props.dispatchBtnAction}
        >
            {props.children}
        </button>
    )
}
export default Button