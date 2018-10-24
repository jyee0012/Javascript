// check package.json for the updates to babel options
import Loan from './loan.js';

let l = new Loan(); // create a new instance of Loan

console.log(l); // log for exploration

// by default, modules do not reveal variables, so the following is necessary for exposing l
window.l = l;