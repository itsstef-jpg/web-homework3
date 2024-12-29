// selecting the 'main' tag to append the divs to
const main = document.querySelector('main');

// function for generating the divs 
function makeDivs(start, end, fizz, buzz) {
    // clear divs, so you don't generate more next to existing ones
    clearDivs();
  
    // loopty loop
    for (let i = start; i <= end; i++) {
      // create div
      const div = document.createElement('div');
      // name div
      div.id = `boxy${i}`;

  // fizzbuzz logic
  //if reminder of dividing i === 0  
  if (i % 3 === 0 && i % 5 === 0) {
    div.className = 'fizzbuzz';
    div.innerText = `${i} \n FizzBuzz `;
  } else if (i % 3 === 0) {
    div.className = 'fizz';
    div.innerText = `${i} \n Fizz`;
  } else if (i % 5 === 0) {
    div.className = 'buzz';
    div.innerText = `${i} \n Buzz`;
  } else {
    div.className = 'none';
    div.innerText = i;
  }

  // append div to main
  main.appendChild(div);
    }
}

// function to clear all generated divs
function clearDivs() {
    while (main.firstChild) {
      main.removeChild(main.firstChild);
    }
  }
  
        // Controls time!
  // gotta start with a div to hold all the controls
  const controls = document.createElement('div');
  controls.id = 'controls';
  
  // starting value preceding text:
  const startText = document.createElement('p');
  startText.innerText = 'Starting Value: ';
  // starting value input:
  const startInput = document.createElement('input');
  startInput.type = 'number';
  startInput.value = 1;
  startInput.placeholder = 'Starting Value';
  
  // ending value preceding text:
  const endText = document.createElement('p');
  endText.innerText = 'Ending Value: ';
  // ending value input:
  const endInput = document.createElement('input');
  endInput.type = 'number';
  endInput.value = 100;
  endInput.placeholder = 'Ending Value';
  
  // fizz value preceding text:
  const fizzText = document.createElement('p');
  fizzText.innerText = 'Fizz Value: ';
  // fizz value input:
  const fizzInput = document.createElement('input');
  fizzInput.type = 'number';
  fizzInput.value = 3;
  fizzInput.placeholder = 'Fizz Value';
  
  // buzz value preceding text:
  const buzzText = document.createElement('p');
  buzzText.innerText = 'Buzz Value: ';
  // buzz value input:
  const buzzInput = document.createElement('input');
  buzzInput.type = 'number';
  buzzInput.value = 5;
  buzzInput.placeholder = 'Buzz Value';
  
        // Buttons!
  // so parseInt is a fun thing where it will take a string and convert it to a number
  // so I'm making sure that the input values are whole numbers even if the user types in a decimal
  // and if the user types in a string, it will default to the respective values
  // neat!

  // this is where all values are taken from the inputs and passed to the makeDivs function
  const generateButton = document.createElement('button');
  generateButton.innerText = 'Generate Divs';
  generateButton.onclick = () => {
    const start = parseInt(startInput.value) || 1;
    const end = parseInt(endInput.value) || 100;
    const fizz = parseInt(fizzInput.value) || 3;
    const buzz = parseInt(buzzInput.value) || 5;
    makeDivs(start, end, fizz, buzz);
  };
  
  // clear divs button
  const clearButton = document.createElement('button');
  clearButton.innerText = 'Clear Divs';
  clearButton.onclick = clearDivs;
  


// gotta now add all the controls stuff to the controls div
controls.append(startText, startInput, endText, endInput, fizzText, fizzInput, buzzText, buzzInput, generateButton, clearButton);

// so I want to make sure the controls are above the main section
main.parentNode.insertBefore(controls, main);

//and that's it folks!