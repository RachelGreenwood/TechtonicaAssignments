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

console.log(coinFlip());


// Creates button in the DOM
let container = document.getElementById('coin-flip');
let button = document.createElement('button');
button.innerHTML = "Flip";
container.append(button);
let text = document.createElement('div');
container.append(text);

// When button is clicked, flip coin
button.addEventListener('click', (event) => {
    text.innerText = coinFlip();
})