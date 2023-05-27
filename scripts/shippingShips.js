import { getShippingShips } from "./database.js";
import { getHaulers } from "./database.js";

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.dataset.type === "shipping") {
            let haulerId = parseInt(itemClicked.dataset.haulerid)
            let shippingShipId = parseInt(itemClicked.dataset.id)
            let haulingShip = { name :"Incorrect" }
            let shippinShip = { name: "Incorrect" }
            const allShippingShips = getShippingShips()
            for (const ship of allShippingShips) {
                if (shippingShipId === ship.id) {
                    shippinShip.name = ship.name
                }
            }
            const allHaulers = getHaulers()
            for (const hauler of allHaulers) {
                if (hauler.id === haulerId) {
                    haulingShip.name = hauler.name
                }
            }
            window.alert(`${shippinShip.name} is being hauled by ${haulingShip.name}`)
        }
    }
)

export const shippingShipList = () => {
    const allShippingShips = getShippingShips()

    let shippingShipHTML = "<ul>"

    for (const ship of allShippingShips) {
        shippingShipHTML += `<li data-type="shipping" data-id="${ship.id}"
        data-haulerId="${ship.haulerId}">${ship.name}`
    }

    shippingShipHTML += "</ul>"

    return shippingShipHTML
}