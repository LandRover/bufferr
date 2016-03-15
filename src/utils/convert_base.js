'use strict';

class ConvertBase {
    constructor() {}
    
    /**
     * binary to decimal
     */
    bin2dec(number) {
        return this._convert(number, 2, 10);
    }
    
    /**
     * binary to hexadecimal
     */
    bin2hex(number) {
        return this._convert(number, 2, 16);
    }
    
    
    /**
     * decimal to binary
     */
    dec2bin(number) {
        return this._convert(number, 10, 2);
    }


    /**
     * decimal to hexadecimal
     */
    dec2hex(number) {
        return this._convert(number, 10, 16);
    }


    /**
     * decimal to hexadecimal
     */
    hex2bin(number) {
        return this._convert(number, 16, 2);
    }
    
    /**
     * hexadecimal to decimal
     */
    hex2dec(number) {
        return this._convert(number, 16, 10);
    }
    
    
    _convert(number, base, to) {
        return parseInt(number, base).toString(to);
    };
}

module.exports = new ConvertBase();