import Events from './events.js';
import Loan from './loan.js';
import LoanList from './loan-list.js';
import LoanForm from './loan-form.js';

// Connect the UI to the data.
// There are three actions to consider:
// a) the user creates a new loan by filling the form and clicking 'Add'
// b) the user chooses to view/edit an existing loan by clicking on one in the list
// c) the user chooses to clear the form by clicking 'Clear'
// 
// We can use the submit button to determine whether a new Loan should be created or
// an existing Loan should be updated by changing/checking the current innerHTML of the button
// (e.g. display Add to create and Save to make changes)

// let loans = [], // array to store Loan objects
//     prop; // used to mixin observer support into loans array


// // add observable support to the loans array
// for (let prop in Events.prototype) {
//     loans[prop] = Events.prototype[prop];
// }

// // update the push method of the loans array so that it now triggers a 'change' event
// loans.push = function (loan) {
//     // set the index for this newly added loan so that it can be tracked in the loans array
//     loan.set('idx', this.length);
//     // push the loan onto the array
//     Array.prototype.push.call(this, loan);
//     // update listeners that the array has been modified
//     loan.on('change', () => {
//         this.trigger('change');        
//     })
// }


// const addLoan = (loan) => {
//     loans.push(loan);
// }
// const loadLoan = (loanIdx) => {
//     console.log(`load the ${loanIdx} loan`);
//     ReactDOM.render(<LoanForm loan={loans[loanIdx]} submitListener={addLoan}/>, formRenderDOM);
// }
class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loans: [],
            currentLoan: new Loan()
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleLoad = this.handleLoad.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        for (let prop in Events.prototype) {
            loans[prop] = Events.prototype[prop];
        }
    }
    handleChange() {
        this.forceUpdate();
    }
    handleLoad (loanIdx) {
        // finish
        this.state.currentLoan = this.state.loans[loanIdx]; 
    }
    handleAdd (loan) {
        // finish
        console.log(loan);
        console.log(this.state.loans);
        // this.state.loans.push = function (loan) {
        //     loan.set('idx', this.length);
        //     Array.prototype.push.call(this, loan);
        //     loan.on('change', () => {
        //         this.trigger('change');        
        //     })
        // }
        // this.state.loans.push(loan);
    };
    render() {
        
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-xs-12 loan-control">
                        <LoanForm loan={this.state.currentLoan} submitListener={this.handleAdd}/>
                    </div>
                    <div className="col-sm-6 col-xs-12 loan-display">
                        <LoanList loans={this.state.loans} clickListener={this.handleLoad}/>
                    </div>
                </div>
            </div>
        );
    }
}
ReactDOM.render(<App/>, document.querySelector('main'));
// window.loans = loans;
// window.Loan = Loan;

// let listRenderDOM = document.querySelector('.loan-display');
// let formRenderDOM = document.querySelector('.loan-control');
// ReactDOM.render(<LoanList loans={loans} clickListener={loadLoan}/>,listRenderDOM);
// ReactDOM.render(<LoanForm submitListener={addLoan}/>,formRenderDOM);
