// import functions and grab DOM elements
import lamps from './data/lamps.js';
import { renderLamp } from './renderlamp.js';
// initialize state
const lampUl = document.getElementById('lavalamps');
for (let lamp of lamps) {
    const lampLi = renderLamp(lamp);
    lampUl.appendChild(lampLi);
}

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
