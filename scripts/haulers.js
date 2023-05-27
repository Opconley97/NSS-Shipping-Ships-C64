import { getHaulers } from "./database.js";
import { getShippingShips } from "./database.js";

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.dataset.type === "hauler") {
            let haulerId = parseInt(itemClicked.dataset.id)
            const allShippingShips = getShippingShips()
            let x = 0
            for (const ships of allShippingShips) {
                if (haulerId === ships.haulerId) {
                    x ++
                }
            }
            if (x > 1) {
                window.alert(`This hauler is carrying ${x} shipping ships.`)
            } else if (x === 1) {
                window.alert(`This hauler is carrying ${x} shipping ship`)
            } else if (x === 0) {
                window.alert(`This hauler is not carrying a shipping ship`)
            }
        }
    }
)

export const haulerList = () => {
    const allHaulers = getHaulers();

    let haulerHTML = "<ul>"

    for (const hauler of allHaulers) {
        haulerHTML += `<li data-type="hauler" data-id="${hauler.id}">${hauler.name}</li>`
    }

    haulerHTML += "</ul>"

    return haulerHTML
}