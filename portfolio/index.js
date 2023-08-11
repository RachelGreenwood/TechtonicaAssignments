// let music = document.querySelector('source');
// let text = document.getElementById('now-playing');
// let btn = document.createElement('button');
// btn.innerText = "Change";
// text.append(btn);
// text.append(music);

// document.addEventListener('click', (event) => {
//     music.src = '15 Solar Sailer.wav';
//     text.innerText = "Now Playing: Solar Sailer - Daft Punk";
// })
//Now Playing: Selino - Tim Kahn
// Dropdown menu for form
let states = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];

let list = document.getElementById('address');
    for (let i = 0; i < states.length; i++) {
        let option = document.createElement('option');
        option.innerHTML = (states[i]);
        option.value = (states[i]);
        list.append(option);
    }