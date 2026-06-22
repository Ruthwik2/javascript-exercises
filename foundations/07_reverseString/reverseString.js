// strings are immutable so doing this will not change string
const reverseString = function(string) {
    return string.split('');
            string.reverse();
            string.join("");
};

// Do not edit below this line
module.exports = reverseString;
