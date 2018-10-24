// basic constructor function
const Loan = function (attrs) {
    // used to mixin initial attributes
    let attr;

    this.title = '';
    this.principal = 0.0;
    this.rate = 0.0;
    this.term = 0;

    // mixin in initial attributes, if present
    if (attrs) {
        for (attr in attrs) {
            this[attr] = attrs[attr];
        }
    }

    // get and set as functions to add control (e.g. validation checks)
    this.set = function (attr, value) {
        this[attr] = value;
    };

    this.get = function (attr) {
        return this[attr];
    };

    // calculate the monthly payment for a loan
    this.payment = function () {
        // + operator is used to typecast to a number
        return +((this.principal * this.rate / 12) / (1 - Math.pow(1 + this.rate / 12, -this.term * 12))).toFixed(2);
    };
};

// export Loan for global useage
export default Loan;