import { placeOrder } from "./TransientState.js"

export const OrderButton = () => {
    
    document.addEventListener("click", handleOrderButtonClick)

    return "<div><button id='placeOrder'>Place Order</button></div>"
    
}

const handleOrderButtonClick = (clickEvent) => {
    if (clickEvent.target.id === "placeOrder") {
            placeOrder()
        }
    }

