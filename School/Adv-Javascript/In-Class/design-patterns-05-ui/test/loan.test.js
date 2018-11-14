import Loan from '../js/dist/loan';
import {expect} from 'chai';
import sinon from 'sinon';

// var expect = require('chai').expect;
let loan = null;
describe('Test', function () {
    beforeEach(function () {
        loan = new Loan();
    });
    describe('#Loan() constructor', function () {
        context('when called without arugments', function () {

            it('should initialize default property title', function () {
                expect(loan.title).to.be.a('string');
                expect(loan.title).to.equal('');
            });
            it('should initialize default property principal to 0.0', function() {
                expect(loan.principal).to.be.a('number');
                expect(loan.principal).to.equal(0);
            });

        });
        context('when called with arguments', function () {
            it('should initialize all desired properties', function () {
                loan = new Loan({
                    title: 'Title',
                    principal: 1000,
                    rate: 0.1,
                    term: 1
                });
                expect(loan.title).to.equal('Title');
                // TODO: assertions for remaining props
            });
        });
        describe('#set()', function () {
            it('should set the desired property on the loan', function () {
                loan.set('term', 1);
                expect(loan.term).to.equal(1);
            });
            it('should trigger \'change\' event', function () {
                // how can we test this? .. later
                // let triggerSpy = sinon.stub(loan, 'trigger');
                let triggerSpy = loan.trigger = sinon.spy();
                loan.set('term', 1);
                expect(triggerSpy.calledWith('change')).to.equal(true);
            });
        });
        describe('#get()', function () {
            it('should get the desired property from the loan', function () {
                loan.term = 1
                expect(loan.get('term')).to.equal(1);
            });
        });
    });
});