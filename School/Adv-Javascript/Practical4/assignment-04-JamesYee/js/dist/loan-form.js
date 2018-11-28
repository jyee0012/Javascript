function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var LoanForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LoanForm, _React$Component);

  function LoanForm(props) {
    _classCallCheck(this, LoanForm);

    return _possibleConstructorReturn(this, _getPrototypeOf(LoanForm).call(this, props)); // bind handlers/methods
    // set state
  }

  _createClass(LoanForm, [{
    key: "handleSubmit",
    value: function handleSubmit(evt) {
      evt.preventDefault();
      console.log("Submit...");
    }
  }, {
    key: "handleReset",
    value: function handleReset() {
      console.log("Ya clicked da booton!");
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
        placeholder: "title"
      })), React.createElement("div", {
        className: "input-group"
      }, React.createElement("span", {
        className: "input-group-addon"
      }, "$"), React.createElement("input", {
        type: "number",
        className: "form-control",
        id: "loan-principal",
        placeholder: "principal",
        "aria-label": "Amount (to the nearest dollar)",
        step: "1"
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
        "aria-label": "Rate (as a percent)"
      }), React.createElement("span", {
        className: "input-group-addon"
      }, "%")), React.createElement("div", {
        className: "form-group"
      }, React.createElement("input", {
        type: "number",
        className: "form-control",
        id: "loan-term",
        placeholder: "term"
      })), React.createElement("div", {
        className: "form-group"
      }, React.createElement("label", {
        htmlFor: "loan-payment"
      }, "Payment"), React.createElement("span", {
        className: "loan-payment",
        id: "loan-payment"
      }, "$0.00"), React.createElement("label", {
        htmlFor: "loan-cost"
      }, "Cost"), React.createElement("span", {
        className: "loan-cost  ",
        id: "loan-cost"
      }, "$0.00")), React.createElement("button", {
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