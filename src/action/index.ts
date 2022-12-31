export const HAPPYBUTTONCLICKED = "happy button clicked"
export const SADBUTTONCLICKED = "sad button clicked"
export const CLEARBUTTONCLICKED = "clear button clicked"

export function happyButtonClicked(quantity:number) {
    console.log(`happy button clicked.`)
    return {
        type:HAPPYBUTTONCLICKED,
        payload:{
            intensity:quantity,
            when:new Date()
        },
    }
}
export function sadButtonClicked(quantity:number){
    console.log(`sad button clicked.`)
    return {
        type:SADBUTTONCLICKED,
        payload:{
            intensity:quantity,
            when:new Date()
        },
    }
}

export function clearButtonClicked(){
    console.log('clear button clicked.')
    return {
        type:CLEARBUTTONCLICKED,
    }
}