"use strict"


window.onload = function (event) {
    const locationselect = document.getElementById("location")
    locationselect.onchange = createactivitycard

    const typeselect = document.getElementById("type")
    typeselect.onchange = createactivitycard

    populateLocations(locationsArray, locationselect)
    populatetypes(parkTypesArray, typeselect)
}

function populateLocations(locationsArray, selectElement) {
    let html = "<option> By Location </option>"
    for (let index = 0; index < locationsArray.length; index += 1) {
        const currentlocation = locationsArray[index];
        html +=

            `<option value="${currentlocation}">${currentlocation}</option>`

    }


    selectElement.innerHTML = html
}
function populatetypes(parkTypesArray, selectElement) {
    let html = "<option> By Type </option>"
    for (let index = 0; index < parkTypesArray.length; index += 1) {
        const currenttype = parkTypesArray[index];
        html +=
            `<option value= "${currenttype}">${currenttype}</option>`
    }
    selectElement.innerHTML = html
}
function createactivitycard(event) {
    const activitycard = event.target.value
    let html = ""
    for (let index = 0; index < nationalParksArray.length; index += 1) {
        const location = nationalParksArray[index];

        if (location.State === activitycard) {
            html += `
                <div class="card">
                  <h5 class="card-header">${location.LocationName}</h5>
                  <div class="card-body">
                       <h5 class="card-title"> <em>${location.Address}</em></h5>
                       <p class="card-text">${location.City}</p>
                       <a href="#" class="btn btn-primary"> visit site </a>
                    </div>
                </div>
            `
        }  if (location.LocationName.includes(activitycard) === true) {
            html += `
            <div class="card">
             <h5 class="card-header">${location.LocationName}</h5>
              <div class="card-body">
                  <h5 class="card-title"> <em>${location.Address}</em></h5>
                   <p class="card-text">${location.City}</p>
                   <a href="#" class="btn btn-primary"> visit site </a>
                </div>
            </div>
        `
        
       }
       const resultdiv = document.getElementById("selectedtype")
       resultdiv.innerHTML = html
    }
}