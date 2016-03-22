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
    STRING0: 12345, // hex: 000000053132333435
    STRING1: '8.000.0',
    STRING2: '479c0d5c25808c8bb37bc3972e4d1624',

    BOOL_TRUE: true,
    BOOL_FALSE: false,

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


describe('Strings', () => {
    beforeEach(() => {
    });


    it('Strings Encoding', () => {
        let INPUT = TEXT.STRING0.toString();

        let str = Encoder.string(INPUT), // encode input
            len = Buffer.byteLength(INPUT); // byte length of the input

        let encodedLen = str.readUIntBE(0, DATA_TYPES.INT32_LEN), // reads length
            encodedString = str.slice(DATA_TYPES.INT32_LEN, DATA_TYPES.INT32_LEN + encodedLen); // offset, jump above the str len and get the buffer off that.

        expect(INPUT.length + DATA_TYPES.INT32_LEN).to.equal(str.length); // verifies the buffer size created is correct, 4 bytes for the len and the actual length of the string.
        expect(len).to.equal(encodedLen); // encoded and decoded string length are eqaul.
        expect('000000053132333435').to.equal(str.toString('hex')); // hex value is correct for the payload.
        expect(INPUT).to.equal(encodedString.toString()); // verify the decoded eq to the original input.
    });



});