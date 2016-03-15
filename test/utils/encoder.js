'use strict';

let chai = require('chai'),
    expect = chai.expect,
    sinon = require('sinon'),
    sinonChai = require('sinon-chai'),
    Encoder = require('./../../src/utils/encoder'),
    DATA_TYPES = require('./../../src/data_types');


chai.should();
chai.use(sinonChai);


describe('Encoder testing types', () => {
    beforeEach(() => {
    });


    it('true is true!', () => {
        expect(undefined).to.be.undefined;
    });

});