// Changes text color of step when step is clicked
let colorCh = document.querySelector('ol');

    colorCh.addEventListener('click', function onClick(event) {
        console.log(event.target);
      event.target.style.color = 'rgba(243, 240, 231, 0.945)';
    });

// Adds a Done button that adds a congratulatory message when clicked
let stepsDiv = document.querySelector('.steps');
let doneBtn = document.createElement('button');
let leftSide = document.querySelector(".left");
doneBtn.innerHTML = "Done";
stepsDiv.appendChild(doneBtn);

doneBtn.addEventListener('click', function onClick(event) {
  let msg = document.createElement('h2');
  msg.textContent = "Well done!";
  doneBtn.after(msg);
  leftSide.style = "padding-bottom: 120px";
})

// Adds a toggle feature to show or hide the other recipes section
let showHold = document.getElementById('other');
let showBtn = document.createElement('button');
showBtn.innerHTML = "Show";
showHold.appendChild(showBtn);

//Hide text
let otherText = document.getElementById('more');
otherText.style = "visibility: hidden";

showBtn.addEventListener('click', () => {
  if (otherText.style.visibility === "hidden") {
    otherText.style.visibility = "visible";
    showBtn.innerHTML = "Hide";
  } else {
    otherText.style.visibility = "hidden";
    showBtn.innerHTML = "Show";
  }
})