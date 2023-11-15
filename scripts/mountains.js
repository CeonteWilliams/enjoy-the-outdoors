"use strict"
window.onload = function (_event) {


    const mountainSelect = document.getElementById("Mountains")
    mountainSelect.onchange = renderactivitycard

    populateMountains(mountainsArray, mountainSelect)



}

function populateMountains(mountainsArray, selectElement) {
    let html = "<option> Choose One </option>"
    for (let index = 0; index < mountainsArray.length; index += 1) {
        const currentMountain = mountainsArray[index];
        html +=

            `<option value="${currentMountain.name}">${currentMountain.name}</option>`
    }


    selectElement.innerHTML = html



}


function renderactivitycard(event) {
    const activitycard = event.target.value
    let html = ""
    for (let index = 0; index < mountainsArray.length; index += 1) {
        const mountain = mountainsArray[index];

        if (mountain.name === activitycard) {
            html += `
                <div class="card">
                  <h5 class="card-header">${mountain.name}</h5>
                  <div class="card-body">
                       <h5 class="card-title"> <em>${mountain.desc}</em></h5>
                       <p class="card-text">${mountain.elevation}</p>
                       <img src="/data/images/${mountain.img}" alt="image">
                     
                    </div>
                </div>
            `

        }
        const resultdiv = document.getElementById("selectedMountain")
        resultdiv.innerHTML = html
    }
}
