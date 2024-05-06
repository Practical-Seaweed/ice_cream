"use strict";

        window.onload = function () {

            let theForm = document.querySelector("#theForm");

            let numScoopsInput = document.querySelector("input[name='numScoops']");

            let coneOrCupRadios = document.querySelectorAll("input[name='coneOrCup']");

            theForm.addEventListener("submit", calcTotal);

            numScoopsInput.addEventListener("input", function () {
                let min = parseInt(this.min);
                let max = parseInt(this.max);
                let value = parseInt(this.value);

                if (value < min) {
                    this.value = min;
                } else if (value > max) {
                    this.value = max;
                }
            });

            coneOrCupRadios.forEach(function (radio) {
                radio.addEventListener("click", hideShowToppings);
            })

        }

        function calcTotal(event) {
            event.preventDefault()

            // this get data from form
            let theForm = event.target;

            // number of scoops
            let numScoops = parseInt(theForm.numScoops.value);
            // ice cream base price
            let iceCreamTotal = 2.25;

            if (numScoops > 1) {
                iceCreamTotal += (numScoops - 1) * 1.25;
            }
            // toppings
            if (theForm.coneOrCup.value === "cup") {

                if (theForm.sprinkles.checked) {
                    iceCreamTotal += .50;
                }

                if (theForm.whippedCream.checked) {
                    iceCreamTotal += .25;
                }

                if (theForm.hotFudge.checked) {
                    iceCreamTotal += 1.25;
                }

                if (theForm.cherry.checked) {
                    iceCreamTotal += .25;
                }
            }
            // additonal scoops price
            // the tax amount
            let taxAmount = iceCreamTotal * (7 / 100);
            // dont forget thee divv!!
            let message = `
            <div>Ice Cream Price: $${iceCreamTotal.toFixed(2)}</div>
            <div>Tax: $${taxAmount.toFixed(2)}</div>
            <div>Total Due: $${(iceCreamTotal + taxAmount).toFixed(2)}</div>
        `

            document.querySelector("#results").innerHTML = message;

        }

        // this should hide the topping when selecting cone hopefully. woooo it works ty google!!!
        function hideShowToppings(event) {

            let toppingsSect = document.querySelector("#toppings");

            if (event.target.value === "cup") {

                toppingsSect.style.display = "block";


            } else {
                toppingsSect.style.display = "none";
            }


        }