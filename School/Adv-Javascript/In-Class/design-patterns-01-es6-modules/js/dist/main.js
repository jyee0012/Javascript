// check package.json for the updates to babel options
// when using ES6 modules, must reference using relative paths and full file names
// import * as events from './events.js';
// import {helloWorld} from './events.js'; // where helloWorld is exported as a const/function only
// import helloWorld from './events.js'; // where helloWorld is exported as a default
// events.helloWorld(); // for line 3
// helloWorld();
import Events from './events.js';
import Loan from './loan.js';
var loans = [];

for (var i = 0; i < 5; i++) {
  loans[i] = new Loan();
}

window.loans = loans;