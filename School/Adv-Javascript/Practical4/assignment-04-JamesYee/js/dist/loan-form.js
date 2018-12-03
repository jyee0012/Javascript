function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

import Loan from "./loan.js";

var LoanForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LoanForm, _React$Component);

  function LoanForm(props) {
    var _this;

    _classCallCheck(this, LoanForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LoanForm).call(this, props)); // this.state = {value: ''};
    // bind handlers/methods

    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleReset = _this.handleReset.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_assertThisInitialized(_this))); // set state

    if (_this.props.loan) {
      _this.state = {
        title: _this.props.loan.title,
        principle: _this.props.loan.principle,
        rate: _this.props.loan.rate,
        term: _this.props.loan.term,
        payment: _this.props.loan.payment(),
        cost: _this.props.loan.cost(),
        currentLoan: _this.props.loan
      };
    } else {
      _this.state = {
        title: '',
        principle: 0.00,
        rate: 0.00,
        term: 0,
        payment: 0,
        cost: 0,
        currentLoan: false
      };
    }

    return _this;
  }

  _createClass(LoanForm, [{
    key: "handleSubmit",
    value: function handleSubmit(evt) {
      evt.preventDefault();
      console.log("Submit...");

      if (!this.state.currentLoan) {
        this.state.currentLoan = new Loan();
        this.props.submitListener(this.state.currentLoan);
      }

      this.state.currentLoan.set('title', this.state.title);
      this.state.currentLoan.set('principle', +this.state.principle);
      this.state.currentLoan.set('rate', +this.state.rate);
      this.state.currentLoan.set('term', +this.state.term);
      this.setState({
        payment: this.state.currentLoan.payment(),
        cost: this.state.currentLoan.cost()
      });
    }
  }, {
    key: "handleReset",
    value: function handleReset() {
      console.log("Ya clicked da booton!");
      this.setState({
        title: '',
        principle: 0.00,
        rate: 0.00,
        term: 0,
        payment: 0,
        cost: 0,
        currentLoan: false
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(evt) {
      console.log("YAAAAA changed ".concat(evt.target.id));
      var obj = {};
      obj[evt.target.getAttribute('name')] = evt.target.value;
      this.setState(obj);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement("h3", null, "Loan Entry"), React.createElement("form", null, React.createElement("div", {
        className: "form-group"
      }, React.createElement("input", {
        type: "text",
        className: "form-control",
        id: "loan-title",
        placeholder: "title",
        name: "title",
        value: this.state.title,
        onChange: this.handleChange
      })), React.createElement("div", {
        className: "input-group"
      }, React.createElement("span", {
        className: "input-group-addon"
      }, "$"), React.createElement("input", {
        type: "number",
        className: "form-control",
        id: "loan-principal",
        placeholder: "principal",
        name: "principle",
        "aria-label": "Amount (to the nearest dollar)",
        step: "1",
        value: this.state.principle,
        onChange: this.handleChange
      }), React.createElement("span", {
        className: "input-group-addon"
      }, ".00")), React.createElement("div", {
        className: "input-group"
      }, React.createElement("input", {
        type: "number",
        step: ".01",
        className: "form-control",
        id: "loan-rate",
        placeholder: "rate",
        name: "rate",
        "aria-label": "Rate (as a percent)",
        value: this.state.rate,
        onChange: this.handleChange
      }), React.createElement("span", {
        className: "input-group-addon"
      }, "%")), React.createElement("div", {
        className: "form-group"
      }, React.createElement("input", {
        type: "number",
        className: "form-control",
        id: "loan-term",
        placeholder: "term",
        name: "term",
        value: this.state.term,
        onChange: this.handleChange
      })), React.createElement("div", {
        className: "form-group"
      }, React.createElement("label", {
        htmlFor: "loan-payment"
      }, "Payment:"), React.createElement("span", {
        className: "loan-payment",
        id: "loan-payment"
      }, " $", this.state.payment, " "), React.createElement("label", {
        htmlFor: "loan-cost"
      }, "Cost:"), React.createElement("span", {
        className: "loan-cost  ",
        id: "loan-cost"
      }, " $", this.state.cost, " ")), React.createElement("button", {
        onClick: this.handleSubmit,
        type: "submit",
        className: "btn btn-default"
      }, "Add"), React.createElement("button", {
        onClick: this.handleReset,
        type: "reset",
        className: "btn btn-info"
      }, "Clear")));
    }
  }]);

  return LoanForm;
}(React.Component);

export default LoanForm;