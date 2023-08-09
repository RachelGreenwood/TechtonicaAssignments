// Make a web page where you can flip a coin and it comes up heads 50% of the time and tails the other 50%.

// Flips coin and gives heads/tails 50% of the time each
function coinFlip() {
    let flip = Math.floor(Math.random());
    if (flip < 0.5) {
        return "Heads";
    } else {
        return "Tails";
    }
}

console.log(coinFlip());