// On-Load Start
window.onload = function () {
    console.log("Running!");

    let cardRow = document.querySelector(".workoutOverview");

    // Add Exercise Button Listener
    $("#addExercise").click(function () {
        // Creation of empty card element
        let cardElement = document.createElement("div");
        cardElement.classList.add("card");  // add class="card" to newly created div-box

        // setting new div-card-item to images partent class
        cardRow.appendChild(cardElement);

        let cardBodyElement = document.createElement("div");
        cardBodyElement.classList.add("card-body");
        cardElement.appendChild(cardBodyElement);
        cardBodyElement.innerHTML = 
            "<h5 class='card-title'>Card title</h5> "+
            "<form> " +
                "<div class='form-group'>" +
                    "<input type='exerciseName' class='form-control' id='nameInout' aria-describedby='emailHelp' placeholder='Enter Name of Exercise'>" +
                "</div>"
                "<div class='form-group'>" +
                    "<div class='input-group-prepend'>" +
                        "<span class='input-group-text' id='set-addon2'>1</span>" +
                        "<input type='text' class='form-control' placeholder='Weight' aria-label='set-two' aria-describedby='basic-addon1'>" +
                        "<select class='form-control' id='workoutType'>" +
                                "<option>kg</option>" +
                                "<option>lbs</option>" +
                       " </select>" +
                   " </div>";
    

        /* add the title to the card element
        let cardText = document.createElement("div");
        cardText.textContent = title;
        cardText.classList.add("bild-text");    // adding class bild-text to overlap on the card --> CSS-Styling
        // setting the card-title-text to the div-card-element
        cardElement.appendChild(cardText);
        */
    });
}