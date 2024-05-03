"use strict"

/*
    - An ice cream cone or cup with one scoop costs $2.25
    
        - Each additional scoop of ice cream is $1.25

    - ONLY THE CUPS CAN HAVE THE TOPPINGS. Meaning that i will 
      need to hide and show the topping section when the radio 
      buttons for cone and cup are clicked.




*/
console.log("hello?.. are you there?")

window.onload = function () {

    let theForm = document.querySelector("#theForm");

    theForm.addEventListener("submit", calcIceCreamFees);
}

function calcIceCreamFees(event) {
    // this will prevent the form submitting and refreshing the page
    event.preventDefault();


    let baseCost = 2.25;

    let theForm = event.target();

    let numScoops = parseInt(theForm.numScoops.value);

    let totalCost = baseCost + numScoops * 1.25;



    if (theForm.coneOrCup === "cup") {




        // this will handle the toppings cost
        let optionsCost = 0;
        if (theForm.sprinkles.checked) {
            optionsCost += .50;
        }

        if (theForm.whippedCream.checked) {
            optionsCost += .25;
        }

        if (theForm.hotFudge.checked) {
            optionsCost += 1.25;
        }

        if (theForm.cherry.checked) {
            optionsCost += .25;
        }

    }

}