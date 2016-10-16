var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var expect = chai.expect;
var assert = chai.assertd;
var async = require('async');

chai.should();
chai.use(sinonChai);

var util = require("../../../lib/util");
var mocks = require('../../mocks');
var Loan = require('../../../lib/models/loans')();
var Client = require('../../../lib/models/clients')();
var <%= fileName %> = require("../../../lib/<%= fileName %>");

describe('::<%= fileName %>', function () {

    var extendedClient;
    var extendedLoan;
    var fakedFunction;

    beforeEach(function (done) {

        var loanObj = new Loan(util.clone(mocks.loanRecords.preVerifiedLoan));
        var clientObj = new Client(util.clone(mocks.clientRecords.withPersonalInformation));

        //fake out function
        fakedFunction = sinon.stub(<%= fileName %>, 'function');
        fakedFunction.yields(null, {success:true});
                
        async.parallel([
            function extendLoan(next) {
                Loan._extensionFn(loanObj, next);
            },
            function extendClient(next) {
                Client._extensionFn(clientObj, next);
            }
        ], function (err, results) {
            extendedLoan = results.extendLoan;
            extendedClient = results.extendClient;
            done();
        });
    });

    afterEach(function (done) {
        fakedFunction.restore();
        done();
    });

    describe('::<%= fileName %>::construct', function () {
        
        beforeEach(function (done) {
            done();
        });

        afterEach(function (done) {
            done();
        });
    });

});