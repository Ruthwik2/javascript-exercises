const sumAll = function(a,b) {
    if(
        typeof(a)!=="number"||
        typeof(b)!=="number"||
        a<0||b<0||
        !Number.isInteger(a)||
        !Number.isInteger(b)
    ){
        return "ERROR";
    }
    if(b<a)[a,b]=[b,a];
    return (b*(b+1)-(a*(a-1)))/2;
};

// Do not edit below this line
module.exports = sumAll;
