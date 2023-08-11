// Make a web page where you can flip a coin and it comes up heads 50% of the time and tails the other 50%.

// Flips coin and gives heads/tails 50% of the time each
function coinFlip() {
    let flip = Math.random();
    if (flip < 0.5) {
        return "Heads";
    } else {
        return "Tails";
    }
}


// Creates elements in the DOM
let container = document.getElementById('coin-flip');
container.innerText = "How many coins do you want to flip?"

let input = document.createElement('input');
input.setAttribute('type', 'number');
container.appendChild(input);

let button = document.createElement('button');
button.innerHTML = "Flip";
container.appendChild(button);

let text = document.createElement('div');
container.appendChild(text);

// When button is clicked, flip coin(s)
button.addEventListener('click', (event) => {
    let coinNum = input.value;
    if (coinNum > 0) {
        let coinStack = [];
        for (let i = 0; i < coinNum; i++) {
            coinStack.push(coinFlip())
        }
        text.innerText = coinStack.join(", ");
        console.log(coinFlip());
    } else {
        text.innerText = "Please enter a valid number";
    }
})