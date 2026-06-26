let selected_party;
const party_list = [];


const getPartyList = (partyList) => {
    try {
    const api = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/2605-ftb-et-web-ft/events`
    const response = fetch(api);
    console.log(response);  
    } catch (error) {

    }



}


function getPartyItem() {

}


function upcomingPartyList() {
    const container = document.createElement("section");
    const list = document.createElement("ul");

    getPartyList();

    return container;


    
}


function partyListItem() {
    const item = document.createElement("li");
}


function selectedPartyDetails() {

}


function render() {
    const app = document.querySelector("#app");
    app.innerHTML = `
    <main>
    <PartyList></PartyList>
    <PartyDetails></PartyDetails>
    </main>
    `;

    app.querySelector("PartyList").replaceWith(upcomingPartyList()); //look into
    app.querySelector("PartyDetails").replaceWith(selectedPartyDetails());

}

function init() {
    getPartyList();
    render();    
}

init();