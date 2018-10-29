const Loan = function () {
    this.title = '';
    this.principal = 0.0;
    this.rate = 0.0;
    this.term = 0;
};

Loan.prototype.get = function (attr) {
    return this[attr];
};

Loan.prototype.set = function (attr, value) {
    this[attr] = value;
};

Loan.prototype.payment = function () {
    return 100;
}

export default Loan