'use strict';

const DATA_TYPES = require('../data_types');

class Encoder {
    constructor() {}


    /**
     *
     **/
    int(number) {
        return this._DWORD(number);
    }


    /**
     *
     **/
    long(number) {
        return this._QWORD(number);
    }


    /**
     *
     **/
    string(str) {
        let payloadLength = Buffer.byteLength(str),
            buffer = this._buffer(payloadLength, DATA_TYPES.INT32_LEN + payloadLength, DATA_TYPES.INT32_LEN);

        buffer.write(str.toString(), DATA_TYPES.INT32_LEN, payloadLength);

        return buffer;
    }


    /**
     *
     **/
    boolean(flag) {
        let state = 0;

        if (true === flag) {
            state = 1;
        }

        return this.byte(state);
    }


    /**
     *
     **/
    byte(digit) {
        return this._buffer(digit, DATA_TYPES.BYTE_LEN);
    }


    /**
     *
     **/
    _DWORD(number) {
        return this._buffer(number, DATA_TYPES.INT32_LEN);
    }


    /**
     *
     **/
    _QWORD(number) {
        return this._buffer(number, DATA_TYPES.INT64_LEN);
    }


    /**
     *
     **/
    _buffer(number, len, position) {
        position = position || len; // default position is at the end of the buffer, unless is set for something else manually.

        let buffer = new Buffer(len);
        buffer.writeUIntBE(number.toString(), 0, position);

        return buffer;
    }
}

module.exports = new Encoder();