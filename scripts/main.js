import { MetalOptions } from './Metals.js'
import { OrderButton } from './PlaceOrder.js'
import { SizeOptions } from './Sizes.js'
import { StyleOptions } from './Styles.js'
import { Orders } from './PlacedOrders.js'
import { JewelryOptions } from './Jewelry.js'

const render = async () => {
    const metalOptionsHTML = await MetalOptions()
    const styleOptionsHTML = await StyleOptions()
    const sizeOptionsHTML = await SizeOptions()
    const buttonHTML = await OrderButton()
    const ordersHTML = await Orders()
    const jewelryHTML = await JewelryOptions()

    const composedHTML = `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals options">
                <h2>Metals</h2>
                ${metalOptionsHTML}
            </section>

            <section class="choices__sizes options">
                <h2>Sizes</h2>
                ${sizeOptionsHTML}
            </section>

            <section class="choices__styles options">
                <h2>Styles</h2>
                ${styleOptionsHTML}
            </section>
        </article>
        <article>
            <section class="choices__jewelry--options">
                ${jewelryHTML}
            </section>
        </article>

        <article class="order">
        ${buttonHTML}
        </article> 

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>

        </article>
        ${ordersHTML}
    `

    container.innerHTML = composedHTML
    console.log("The HTML has been regenerated")
    
}

document.addEventListener("newOrderPlaced", render)

render()