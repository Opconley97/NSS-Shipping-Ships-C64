const database = {
    docks: [
        { id: 1, location: "Shanghai, China", volume: "43.5" },
        { id: 2, location: "Busan, South Korea", volume: "21.6" },
        { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35" },
        { id: 4, location: "Antwerp, Belgium", volume: "12.04" }
    ],
    haulers: [
        { id: 1, name: "Pioneering Spirit", dockId: 1 },
        { id: 2, name: "Boaty McBoatface", dockId: 1 },
        { id: 3, name: "I Haul Cargo Ships", dockId: 3 },
        { id: 4, name: "Big Time Hauler", dockId: 4 }
        
    ],
    shippingShips: [
        { id: 1, name: "Ever Ace", haulerId: 1 },
        { id: 2, name: "Nissei Maru", haulerId: 1 },
        { id: 3, name: "HMM Rotterdam", haulerId: 3 },
        { id: 4, name: "Taylor Swift", haulerId: 4 },
        { id: 5, name: "Neil Peart", haulerId: 1 },
        { id: 6, name: "Celebrity", haulerId: 3 },
        { id: 7, name: "Steve Harvey", haulerId: 3 },
    ]
}


export const getDocks = () => {
    return database.docks.map(dock => ({...dock}))
}

export const getHaulers = () => {
    return database.haulers.map(hauler => ({...hauler}))
}  

export const getShippingShips = () => {
    return database.shippingShips.map(ship => ({...ship}))
}