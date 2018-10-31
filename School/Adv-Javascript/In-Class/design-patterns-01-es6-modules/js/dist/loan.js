var Loan = function Loan(attrs) {
  this.title = '';
  this.principal = 0.0;
  this.rate = 0.0;
  this.term = 0;

  if (attrs) {
    for (var attr in attrs) {
      this[attr] = attrs[attr];
    }
  }
};

Loan.prototype.get = function (attr) {
  return this[attr];
};

Loan.prototype.set = function (attr, value) {
  this[attr] = value;
};

Loan.prototype.payment = function () {
  return 100;
};

export default Loan;