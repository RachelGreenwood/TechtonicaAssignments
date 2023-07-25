let colorCh = document.querySelector('ol');

    colorCh.addEventListener('click', function onClick(event) {
        console.log(event.target);
      event.target.style.color = 'white';
    });

    