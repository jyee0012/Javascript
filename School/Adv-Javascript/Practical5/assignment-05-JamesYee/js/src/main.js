import Events from './events.js';
import Loan from './loan.js';
import LoanForm from './loan-form.js';
import LoanList from './loan-list.js';

let formRenderDOM = document.querySelector('.loan-control'),
    listRenderDOM = document.querySelector('.loan-display'),
    loans = []; // array to store Loan objects

// add observable support to the loans array
for (let prop in Events.prototype) {
    loans[prop] = Events.prototype[prop];
}

loans.push = function (loan) {
    loan.set('idx', this.length);
    // listen to the loan for change events and then refire
    loan.on('change', () => {
        this.trigger('change');
    });
    Array.prototype.push.call(this, loan);
    this.trigger('change');
}

const addLoan = (loan) => {
    loans.push(loan);
}

const loadLoan = (loanIdx) => {
    console.log(`Preparing to load loan #${loanIdx}`);
    //every time a loan is clicked, re-render the LoanForm as required
    ReactDOM.render(<LoanForm loan={loans[loanIdx]} loans={loans} submitListener={addLoan} />, formRenderDOM);    
}

// render the LoanForm and LoanList
ReactDOM.render(<LoanList loans={loans} clickListener={loadLoan}/>, listRenderDOM);
ReactDOM.render(<LoanForm loans={loans} submitListener={addLoan}/>, formRenderDOM);

// FOR TESTING ONLY
window.loans = loans;
window.Loan = Loan;
