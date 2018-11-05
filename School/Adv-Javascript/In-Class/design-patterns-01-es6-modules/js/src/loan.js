const Loan = function (attrs) {
    this.title = '';
    this.principal = 0.0;
    this.rate = 0.0;
    this.term = 0;
    if (attrs) {
        for (let attr in attrs) {
            this[attr] = attrs[attr];
        }
    }
};

Loan.prototype.get = function (attr) {
    return this[attr];
};

Loan.prototype.set = function (attr, value) {
    this[attr] = value;
    this.trigger('change');
};

Loan.prototype.payment = function () {
    return 100;
}

export default Loan