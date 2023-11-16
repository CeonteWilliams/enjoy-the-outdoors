# enjoy-the-outdoors

This is a an outdoors adventure information website built using HTML,CSS, and Javascript to show information about different mountains and national parks. It contains a homepage, National Parks Search page, and Mountains Information page. The features in the website were implemented using the Onchange function in Java script. The designs in this website were implemented using the select tag in HTML. CSS was also involved in this project to structure the webpage and fit my divs in the webpage, and make it more attractive.

Example of an interesting line of code:

` function renderactivitycard(event) {
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
        ## ![registration page](images/Screenshot%202023-10-12%20230245.png)
## ![home page](/data/images/adventure%20time%20home.png)
## ![parks page](/data/images/adventure%20time%20park%20page.png)
## ![mountains page](/data/images/adventure%20time%20mountains%20page.png)
## ![parks page pt 2](/data/images/adventure%20time%20parklocations%20pt2.png)
## ![parks page pt 2](/data/images/adventuretimemountainspt2.png)
