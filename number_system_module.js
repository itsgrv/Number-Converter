"use strict"
// start implementing all the functions

const dec_to_bin = (N) => {
    // N is given as a decimal number, convert it to the corresponding binary number.
    let ans = N.toString(2);
    // You should return the correct binary number.
    return ans
}
const bin_to_dec = (N) => {
    // N is given as a binary number, convert it to the corresponding decimal number.
    let ans=parseInt(N,2)
    // You should return the correct binary decimal.
    return ans
}

const dec_to_oct = (N) => {
    // N is given as a decimal number, convert it to the corresponding octal number.
    let oct = 0;
    let i = 0;
    while (N != 0) {
        oct += (N % 8) * Math.pow(10, i); // storing and reversing the remainder sequence
        N = parseInt(N / 8);
        i++;
    }  
    // You should return the correct octal number.
    return oct;
}
const oct_to_dec = (N) => {
    // N is given as a octal number, convert it to the corresponding decimal number.
     let ans=parseInt(N,8)
    // You should return the correct decimal number.
    return ans;
}
const dec_to_hex = (N) => {
    // N is given as a decimal number, convert it to the corresponding hexadecimal number.
    let hex = "";
    while (N != 0) {
        let rem = N % 16
        switch (rem) {
            case 10:
                hex += "A";
                break;
            case 11:
                hex += "B";
                break;
            case 12:
                hex += "C";
                break;
            case 13:
                hex += "D";
                break;
            case 14:
                hex += "E";
                break;
            case 15:
                hex += "F";
                break;
            default:
                hex += rem.toString();
                break;
        }
        N = parseInt(N / 16);
    }
    // You should return the correct hexadecimal number.
    return hex.split("").reverse().join(""); 
}

const hex_to_dec = (N) => {
    // N is given as a hexadecimal number, convert it to the corresponding decimal number.
    let ans=parseInt(N,16)
    // You should return the correct binary number.
    return ans
}
const bin_to_oct = (N) => {
    // N is given as a binary number, convert it to the corresponding octal number.
    // Implement this function using two step method
    N = bin_to_dec(N);
    // You should return the correct octal number.
    return dec_to_oct(N);
}
const bin_to_hex = (N) => {
    // N is given as a binary number, convert it to the corresponding hexadecimal number.
    // Implement this function using two step method
    N = bin_to_dec(N)
    // You should return the correct hexadecimal number.
    return dec_to_hex(N)
}
const oct_to_bin = (N) => {
    // N is given as a octal number, convert it to the corresponding binary number.
    // Implement this function using two step method
    N = oct_to_dec(N)
    // You should return the correct binary number.
    return dec_to_bin(N)
}
const oct_to_hex = (N) => {
    // N is given as a octal number, convert it to the corresponding hexadecimal number.
    // Implement this function using two step method
    N = oct_to_dec(N)
    // You should return the correct hexadecimal number.
    return dec_to_hex(N)
}
const hex_to_bin = (N) => {
    // N is given as a hexadecimal number, convert it to the corresponding binary number.
    // Implement this function using two step method
   N = hex_to_dec(N)
    // You should return the correct binary number.
    return dec_to_bin(N)
}
const hex_to_oct = (N) => {
    // N is given as a hexadecimal number, convert it to the corresponding octal number.
    // Implement this function using two step method
    N = hex_to_dec(N)
    // You should return the correct octal number.
    return dec_to_oct(N)
}















































