export const Orders = async () => {
    const fetchResponse = await fetch("http://localhost:8088/orders?_expand=metal&_expand=style&_expand=size&_expand=jewelry")
    const orders = await fetchResponse.json()

    let ordersHTML = ""

    const divStringArray = orders.map(
        (order) => {

            const orderPrice = order.metal.price + order.style.price + order.size.price
            const finalPrice = orderPrice * order.jewelry.priceModifier

            return `<section>
            Order #${order.id} cost $${finalPrice}
            </section>`
        }
    )

    ordersHTML += divStringArray.join("")

    return ordersHTML
}