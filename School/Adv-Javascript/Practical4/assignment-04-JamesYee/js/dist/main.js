import Events from './events.js';
import Loan from './loan.js';
import LoanList from './loan-list.js';
import LoanForm from './loan-form.js'; // Connect the UI to the data.
// There are three actions to consider:
// a) the user creates a new loan by filling the form and clicking 'Add'
// b) the user chooses to view/edit an existing loan by clicking on one in the list
// c) the user chooses to clear the form by clicking 'Clear'
// 
// We can use the submit button to determine whether a new Loan should be created or
// an existing Loan should be updated by changing/checking the current innerHTML of the button
// (e.g. display Add to create and Save to make changes)

var loans = [],
    // array to store Loan objects
prop; // used to mixin observer support into loans array
// add observable support to the loans array

for (var _prop in Events.prototype) {
  loans[_prop] = Events.prototype[_prop];
} // update the push method of the loans array so that it now triggers a 'change' event


loans.push = function (loan) {
  var _this = this;

  // set the index for this newly added loan so that it can be tracked in the loans array
  loan.set('idx', this.length); // push the loan onto the array

  Array.prototype.push.call(this, loan); // update listeners that the array has been modified

  loan.on('change', function () {
    _this.trigger('change');
  });
};

var addLoan = function addLoan(loan) {
  loans.push(loan);
};

var loadLoan = function loadLoan(loanIdx) {
  console.log("load the ".concat(loanIdx, " loan"));
  ReactDOM.render(React.createElement(LoanForm, {
    loan: loans[loanIdx],
    submitListener: addLoan
  }), formRenderDOM);
}; // window.loans = loans;
// window.Loan = Loan;


var listRenderDOM = document.querySelector('.loan-display');
ReactDOM.render(React.createElement(LoanList, {
  loans: loans,
  clickListener: loadLoan
}), listRenderDOM);
var formRenderDOM = document.querySelector('.loan-control');
ReactDOM.render(React.createElement(LoanForm, {
  submitListener: addLoan
}), formRenderDOM);