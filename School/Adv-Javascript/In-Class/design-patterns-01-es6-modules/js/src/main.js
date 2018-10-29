// check package.json for the updates to babel options

// when using ES6 modules, must reference using relative paths and full file names

// import * as events from './events.js';
// import {helloWorld} from './events.js'; // where helloWorld is exported as a const/function only
import helloWorld from './events.js'; // where helloWorld is exported as a default

// events.helloWorld(); // for line 3
helloWorld();

import Loan from './loan.js';
let loan = [];
for (let i =0; i < 5; i++){
    loans[i] = new Loan();
}
window.loan  = loan;