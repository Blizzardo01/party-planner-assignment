let selected_party;
let party_list = [];


async function getPartyList() {
    try {
    const api = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/2605-ftb-et-web-ft/events`;
    const response = await fetch(api);

    if (!response.ok) {
        throw new Error(`http error, events could not be received: status: ${response.status}`);
    }
    const { data } = await response.json(); 
    party_list = data;
    } catch (error) {
        
    }
}


function getPartyItem(id) {
    selected_party = party_list.find((party) => party.id === id);
}


function upcomingPartyList() {
    const container = document.createElement("section");
    const list = document.createElement("ul");

    try {
        getPartyList();
    }
    catch (error) {
        console.error("Unable to present event list: ", error);
    }


    for (const party of party_list) {
        partyListItem(party, list);
    }

    container.append(list);


    return container;
}


function partyListItem(party, list) {
    const item = document.createElement("li");
    item.textContent = party.name;
    list.append(item);

    item.addEventListener("click", () => {
        getPartyItem(party.id);
        render();
    })

    return item;
}


function selectedPartyDetails() {
    if (!selected_party) {
        const p = document.createElement("p");
        p.textContent = "Please select an event to learn more."
        return p;
    } else {
    const container = document.createElement("section");
    const name_id = document.createElement("h1");
    const date = document.createElement("p");
    const actual_date = new Date(selected_party.date);
    const location = document.createElement("p");
    const description = document.createElement("p");

    name_id.textContent = selected_party.name;
    date.textContent = actual_date.toLocaleDateString();
    location.textContent = selected_party.location;
    description.textContent = selected_party.description;

    container.append(name_id, date, location, description);

    return container;
    }

}


function render() {
    const app = document.querySelector("#app");
    app.innerHTML = `
    <main>
    <h1>Upcoming Parties</h1>
    <PartyList></PartyList>
    <h1>Party Details</h1>
    <PartyDetails></PartyDetails>
    </main>
    `;
    app.querySelector("PartyList").replaceWith(upcomingPartyList()); //look into
    app.querySelector("PartyDetails").replaceWith(selectedPartyDetails());

}

async function init() {
    await getPartyList();
    render();    
}

init();