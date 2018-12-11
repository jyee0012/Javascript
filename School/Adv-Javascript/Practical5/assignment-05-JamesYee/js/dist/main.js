import Events from './events.js';
import Loan from './loan.js';
import LoanForm from './loan-form.js';
import LoanList from './loan-list.js';
var formRenderDOM = document.querySelector('.loan-control'),
    listRenderDOM = document.querySelector('.loan-display'),
    loans = []; // array to store Loan objects
// add observable support to the loans array

for (var prop in Events.prototype) {
  loans[prop] = Events.prototype[prop];
}

loans.push = function (loan) {
  var _this = this;

  loan.set('idx', this.length); // listen to the loan for change events and then refire

  loan.on('change', function () {
    _this.trigger('change');
  });
  Array.prototype.push.call(this, loan);
  this.trigger('change');
};

var addLoan = function addLoan(loan) {
  loans.push(loan);
};

var loadLoan = function loadLoan(loanIdx) {
  console.log("Preparing to load loan #".concat(loanIdx)); //every time a loan is clicked, re-render the LoanForm as required

  ReactDOM.render(React.createElement(LoanForm, {
    loan: loans[loanIdx],
    loans: loans,
    submitListener: addLoan
  }), formRenderDOM);
}; // render the LoanForm and LoanList


ReactDOM.render(React.createElement(LoanList, {
  loans: loans,
  clickListener: loadLoan
}), listRenderDOM);
ReactDOM.render(React.createElement(LoanForm, {
  loans: loans,
  submitListener: addLoan
}), formRenderDOM); // FOR TESTING ONLY

window.loans = loans;
window.Loan = Loan;