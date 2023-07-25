// Changes text color of step when step is clicked
let colorCh = document.querySelector('ol');

    colorCh.addEventListener('click', function onClick(event) {
        console.log(event.target);
      event.target.style.color = 'rgba(243, 240, 231, 0.945)';
    });

// Adds a Done button that adds a congratulatory message when clicked
let stepsDiv = document.querySelector('.steps');
let doneBtn = document.createElement('button');
doneBtn.innerHTML = "Done";
stepsDiv.appendChild(doneBtn);

doneBtn.addEventListener('click', function onClick(event) {
  let msg = document.createElement('p');
  msg.textContent = "Well done!";
  doneBtn.after(msg);
})