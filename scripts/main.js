import { haulerList } from "./haulers.js";
import { shippingShipList } from "./shippingShips.js";
import { dockList } from "./docks.js";

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Hauler List</h1>
<article class="details">
    <section class="detail--column list details__cities">
    <h2>Haulers</h2>
    ${haulerList()}
    </section>
    <section class="detail--column list details__cities">
        <h2>Shipping Ships</h2>
        ${shippingShipList()}
    </section>
    <section class="detail--column list details__cities">
        <h3>Docks</h3>
        ${dockList()}
    </section>
</article>`

mainContainer.innerHTML = applicationHTML