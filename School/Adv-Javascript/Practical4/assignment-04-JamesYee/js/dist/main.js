function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

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

var App =
/*#__PURE__*/
function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));
    _this.state = {
      loans: [],
      currentLoan: new Loan()
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleLoad = _this.handleLoad.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleAdd = _this.handleAdd.bind(_assertThisInitialized(_assertThisInitialized(_this)));

    for (var prop in Events.prototype) {
      loans[prop] = Events.prototype[prop];
    }

    return _this;
  }

  _createClass(App, [{
    key: "handleChange",
    value: function handleChange() {
      this.forceUpdate();
    }
  }, {
    key: "handleLoad",
    value: function handleLoad(loanIdx) {
      // finish
      this.state.currentLoan = this.state.loans[loanIdx];
    }
  }, {
    key: "handleAdd",
    value: function handleAdd(loan) {
      // finish
      console.log(loan);
      console.log(this.state.loans); // this.state.loans.push = function (loan) {
      //     loan.set('idx', this.length);
      //     Array.prototype.push.call(this, loan);
      //     loan.on('change', () => {
      //         this.trigger('change');        
      //     })
      // }
      // this.state.loans.push(loan);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", {
        className: "container"
      }, React.createElement("div", {
        className: "row"
      }, React.createElement("div", {
        className: "col-sm-6 col-xs-12 loan-control"
      }, React.createElement(LoanForm, {
        loan: this.state.currentLoan,
        submitListener: this.handleAdd
      })), React.createElement("div", {
        className: "col-sm-6 col-xs-12 loan-display"
      }, React.createElement(LoanList, {
        loans: this.state.loans,
        clickListener: this.handleLoad
      }))));
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.querySelector('main')); // window.loans = loans;
// window.Loan = Loan;
// let listRenderDOM = document.querySelector('.loan-display');
// let formRenderDOM = document.querySelector('.loan-control');
// ReactDOM.render(<LoanList loans={loans} clickListener={loadLoan}/>,listRenderDOM);
// ReactDOM.render(<LoanForm submitListener={addLoan}/>,formRenderDOM);