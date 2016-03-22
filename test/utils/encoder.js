'use strict';

let chai = require('chai'),
    expect = chai.expect,
    sinon = require('sinon'),
    sinonChai = require('sinon-chai'),
    Encoder = require('./../../src/utils/encoder'),
    DATA_TYPES = require('./../../src/data_types');


chai.should();
chai.use(sinonChai);


const TEXT = {
    BOOL_TRUE: true,
    BOOL_FALSE: false,
    
    STRING1: '8.000.0',
    STRING2: '08f60ae5cf4500ccc86a0601c34855ce',
    
    BYTE0: 0,
    BYTE1: 1,
    BYTE5: 5,
    BYTE9: 9,
    
    
    INT1: 12345678,
    INT2: 1234,
    INT3: 9999,
    
    LONG1: 12345678012345678,
    LONG2: 11111111111111111,
    LONG3: 1111,
    LONG4: 9999
};


describe('Encoder testing types', () => {
    beforeEach(() => {
    });


    it('true is true!', () => {
        expect(undefined).to.be.undefined;
    });

});