export const transientState = new Map ()
    transientState.set("id", 0)
    transientState.set("metalId", 0)
    transientState.set("sizeId", 0)
    transientState.set("styleId", 0)
    transientState.set("jewelryId", 0)
    transientState.set("timeStamp", 0)
/*
export const transientState = {
    "id": 0,
    "metalId": 0,
    "sizeId": 0,
    "styleId": 0,
    "jewelryId": 0,
    "timeStamp": 0,
}
*/

// Functions to modify each property of transient state
export const setMetalChoice = (chosenMetal) => {
    transientState.set("metalId", chosenMetal)
    console.log(transientState)
    const customEvent = new CustomEvent("newOrderPlaced")
    document.dispatchEvent(customEvent)
}

export const setSizeChoice = (chosenSize) => {
    transientState.set("sizeId", chosenSize)
    console.log(transientState)
    const customEvent = new CustomEvent("newOrderPlaced")
    document.dispatchEvent(customEvent)
}

export const setStyleChoice = (chosenStyle) => {
    transientState.set("styleId", chosenStyle)
    console.log(transientState)
    const customEvent = new CustomEvent("newOrderPlaced")
    document.dispatchEvent(customEvent)
}

export const setJewelryChoice = (chosenJewelry) => {
    transientState.set("jewelryId", chosenJewelry)
    console.log(transientState)
}

// Function to convert transient state to permanent state
export const placeOrder = async () => {
    const transientStateObject = Object.fromEntries(transientState.entries())
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientStateObject)
    }

    const response = await fetch("http://localhost:8088/orders?_expand=metal&_expand=style&_expand=size", postOptions)
    
    const customEvent = new CustomEvent("newOrderPlaced")
    document.dispatchEvent(customEvent)
}