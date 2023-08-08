// Make a web page where you can flip a coin and it comes up heads 50% of the time and tails the other 50%.

// Make a function with no parameters
// Use Math.random() to get 50%
    // Make sure it's a full number
    // Math.round(Math.random() * 99) + 1;
// For the bottom 50%, return heads
    // 0 => 50
// For the upper 50%, return tails
    // 51 => 100

function coinFlip() {
    let flip = Math.floor(Math.random());
    if (flip < 0.5) {
        return "Heads";
    } else {
        return "Tails";
    }
}

console.log(coinFlip());