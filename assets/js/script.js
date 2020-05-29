// Id -- use # as the reference
// initNum, modNum, singleNum, addition, multiplication, power, factorial, fibonacci
// Classes -- use . as the reference
// buttonReact
// Function Lane!

function add(x, y) {
    x = Number(x);
    y = Number(y);
    return (x) + (y);
}
function multiply(x, y) {
    x = Number(x);
    y = Number(y);
    let total = 0;
    for (let i = 0; i < y; i++) {
        total = add(total, x);
    }
    return total;
}
function power(x, y) {
    x = Number(x);
    y = Number(y);
    let total = 1;
    for (let i = 0; i < y; i++) {
        total = multiply(total, x);
    }
    return total;
}

function factorial(x) {
    x = Number(x);
    if (x < 0) {
        return "not possible for this number."
    }
    if (x === 0) {
        return 1;
    }
    let total = 1;
    for (let i = x; i > 0; i--) {
        total = multiply(total, i);
    }
    return total;
}

function fibonacci(x) {
    x = Number(x);
    if (x <= 0) {
        return "not possible for this number.";
    }
    if (x === 1) {
        return 0;
    }
    let t1 = 0;
    let t2 = 1;
    let total = 0;
    for (let i = 2; i < x; i++) {
        total = t1 + t2;
        t1 = t2;
        t2 = total;
    }
    return t2;
}

// End of Function Lane!

// Extra Work for Testing purposes:)


const addButton = document.querySelector("#addition");
const multiButton = document.querySelector("#multiplication");
const powerButton = document.querySelector("#power");
const factButton = document.querySelector("#factorial");
const fibButton = document.querySelector("#fibonacci");
const docReact = document.querySelector(".buttonReact");

addButton.addEventListener("click", function () {
    let reaction = 0;
    const initalNum = document.getElementById("initNum").value;
    const modifyNum = document.getElementById("modNum").value;
    reaction = add(initalNum, modifyNum);
    docReact.innerHTML = "Adding them together gets you " + reaction;
})
multiButton.addEventListener("click", function () {
    let reaction = 0;
    const initalNum = document.getElementById("initNum").value;
    const modifyNum = document.getElementById("modNum").value;
    reaction = multiply(initalNum, modifyNum);
    docReact.innerHTML = "Multiplying them together gets you " + reaction;
})
powerButton.addEventListener("click", function () {
    let reaction = 0;
    const initalNum = document.getElementById("initNum").value;
    const modifyNum = document.getElementById("modNum").value;
    reaction = power(initalNum, modifyNum);
    docReact.innerHTML = initalNum + " to the " + modifyNum + " is " + reaction;
})
factButton.addEventListener("click", function () {
    let reaction = 0;
    const aloneNum = document.getElementById("singleNum").value;
    reaction = factorial(aloneNum);
    docReact.innerHTML = "The Factorial is " + reaction;
})
fibButton.addEventListener("click", function () {
    let reaction = 0;
    const aloneNum = document.getElementById("singleNum").value;
    reaction = fibonacci(aloneNum);
    docReact.innerHTML = "The Fibonacci Sequence you want is " + reaction;
})