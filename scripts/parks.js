"use strict"


window.onload = function(event){
    const locationselect = document.getElementById("location")
    locationselect.onchange= createactivitycard


    populateLocations(locationsArray,locationselect)
}

function populateLocations(locationsArray,selectElement){
    let html = "<option>choose one</option>"
    for (let index = 0; index < locationsArray.length; index += 1) {
        const currentlocation = locationsArray[index];
        html +=

            `<option value="${currentlocation}">${currentlocation}</option>`
           
    }


    selectElement.innerHTML = html
    



} function createactivitycard(event) {
    const activitycard = event.target.value
    let html = ""
    for (let index = 0; index < nationalParksArray.length; index += 1) {
        const location = nationalParksArray[index];

        if (activitycard === location.State) {
            html += `
                <div class="card">
                  <h5 class="card-header">${location}</h5>
                  <div class="card-body">
                       <h5 class="card-title">Where? <em>${location}</em></h5>
                       <p class="card-text">${location}</p>
                       <img src="/data/images/${location}" alt="image">
                     
                    </div>
                </div>
            `
           

        }
        const resultdiv = document.getElementById("selectedlocation")
        resultdiv.innerHTML = html
    }
}
