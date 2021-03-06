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

    BOOL0: false,
    BOOL1: true,

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
    [TEXT.STRING0, TEXT.STRING1, TEXT.STRING2].forEach(INPUT => {
        it(INPUT + ' String Encoding', () => {
            INPUT = INPUT.toString();

            let str = Encoder.string(INPUT), // encode input
                len = Buffer.byteLength(INPUT); // byte length of the input

            let encodedLen = str.readUIntBE(0, DATA_TYPES.INT32_LEN), // reads length
                encodedString = str.slice(DATA_TYPES.INT32_LEN, DATA_TYPES.INT32_LEN + encodedLen); // offset, jump above the str len and get the buffer off that.

            expect(INPUT.length + DATA_TYPES.INT32_LEN).to.equal(str.length); // verifies the buffer size created is correct, 4 bytes for the len and the actual length of the string.
            expect(len).to.equal(encodedLen); // encoded and decoded string length are eqaul.
            expect(INPUT).to.equal(encodedString.toString()); // verify the decoded eq to the original input.
        });
    });
});


describe('INTs', () => {
    [TEXT.INT1, TEXT.INT2, TEXT.INT3].forEach(INPUT => {
        it(INPUT + ' Numbers Encoding', () => {
            let str = Encoder.int(INPUT), // encode input
                len = Buffer.byteLength(INPUT); // byte length of the input

            let encodedInt = str.readUIntBE(0, DATA_TYPES.INT32_LEN);

            expect(INPUT.length).to.equal(encodedInt.length); // encoded and decoded string length are eqaul.
            expect(INPUT).to.equal(Number(encodedInt.toString())); // verify the decoded eq to the original input.
        });
    });
});


describe('LONGs', () => {
    [TEXT.LONG1, TEXT.LONG2, TEXT.LONG3, TEXT.LONG4].forEach(INPUT => {
        it(INPUT + ' Long Numbers Encoding', () => {
            let str = Encoder.long(INPUT), // encode input
                len = Buffer.byteLength(INPUT); // byte length of the input

            let encodedLong = str.readUIntBE(0, DATA_TYPES.INT64_LEN);

            expect(INPUT.length).to.equal(encodedLong.length); // encoded and decoded string length are eqaul.
            expect(INPUT).to.equal(Number(encodedLong.toString())); // verify the decoded eq to the original input.
        });
    });
});


describe('BOOLEANs', () => {
    [TEXT.BOOL0, TEXT.BOOL1].forEach(INPUT => {
        it(INPUT + ' Boolean Encoding', () => {
            let str = Encoder.boolean(INPUT), // encode input
                len = Buffer.byteLength(INPUT); // byte length of the input

            let encodedBoolean = str.readUIntBE(0, DATA_TYPES.BYTE_LEN);

            expect(INPUT.length).to.equal(encodedBoolean.length); // encoded and decoded string length are eqaul.
            expect(INPUT).to.equal(Boolean(Number(encodedBoolean.toString()))); // verify the decoded eq to the original input.
        });
    });
});


describe('BYTEs', () => {
    [TEXT.BYTE0, TEXT.BYTE1, TEXT.BYTE5, TEXT.BYTE9].forEach(INPUT => {
        it(INPUT + ' Bytes Encoding', () => {
            let str = Encoder.byte(INPUT), // encode input
                len = Buffer.byteLength(INPUT); // byte length of the input

            let encodedByte = str.readUIntBE(0, DATA_TYPES.BYTE_LEN);

            expect(INPUT.length).to.equal(encodedByte.length); // encoded and decoded string length are eqaul.
            expect(INPUT).to.equal(Number(encodedByte.toString())); // verify the decoded eq to the original input.
        });
    });
});