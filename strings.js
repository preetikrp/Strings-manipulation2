console.log("Hi Js");
var input = document.getElementById("input");
var button = document.getElementById("btn");
var output = document.getElementById("output");
var output1 = document.getElementById("output1");
var output2 = document.getElementById("output2");
var output3 = document.getElementById("output3");

button.addEventListener("click", reversal);
button.addEventListener("click", alphabits);
button.addEventListener("click", palindrome);

function reversal() {
    if (isNaN(input.value)) {
        var ipt = input.value;
        var splited = ipt.split("").reverse("").join("");
        output.innerHTML = splited;
    } else {
        alert("Its not a number");
    }

}

function alphabits() {
    if (isNaN(input.value))
 {
        var val = input.value;
        var alpha = val.split("").sort("").join("");
        output1.innerHTML = alpha;
    } else {
        alert("Its not a number");
    }

}

function palindrome() {
    if (isNaN(input.value)) {
        var pal = input.value;
        var palin = pal.split("").reverse("").join("");
        if (palin == palin) {
            output2.innerHTML = "Its a palindrome";
        } else {
            output2.innerHTML = "Its not a palindrome";
        }
    }
};
