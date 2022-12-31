type TrackerInputProps = {
    quantity:number,
    handleQuantity:(e:any)=>any,
    className:string,
}

const TrackerInput = (props:TrackerInputProps) => {
    return (
        <input 
            type="number"
            className={"border rounded indent-2 text-secondary-200 "+props.className}
            placeholder="quantity"
            value={props.quantity}
            onChange={(e)=>props.handleQuantity(e)}
        />
    )
}
export default TrackerInput