import { getDocks } from "./database.js";
import { getHaulers } from "./database.js";

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.dataset.type === "dock") {
            let dockId = parseInt(itemClicked.dataset.id)
            let allHaulers = getHaulers()
            let allDocks = getDocks()
            let haulerName = { name :""}
            let dockLocation = { location:"Incorrect"}
            let x = 0;
            for (const hauler of allHaulers) {
                if (dockId === hauler.dockId) {
                    x++
                    if (x > 1) {
                        haulerName.name += hauler.name
                    } else if (x === 1 ) {
                        haulerName.name = hauler.name
                    }
                }
            }
            for (const dock of allDocks) {
                if (dockId === dock.id) {
                    dockLocation.location = dock.location
                }
            }
            if (haulerName.name !== "") {
                window.alert(`The ${dockLocation.location} dock is currently unloading ${haulerName.name}`)
            } else if (haulerName.name === "") {
                window.alert(`The ${dockLocation.location} dock is currently unloading nothing.`)
            }
        }
    }
)

export const dockList = () => {
    const allDocks = getDocks()

    let docksHTML = "<ul>"

    for (const dock of allDocks) {
        docksHTML += `<li data-type="dock" data-id="${dock.id}">
        ${dock.location} can hold ${dock.volume} million tons
        of cargo</li>`
    }

    docksHTML += "</ul>"

    return docksHTML
} 