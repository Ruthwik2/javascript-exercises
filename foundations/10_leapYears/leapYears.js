const leapYears = function(year) {
    // is year divisible by 4
    if(year%4!==0){
        return false;
    }
    // is year divisible by 4,100 but not by 400
    else if(year%4===0&&year%100===0&&year%400!==0){
        return false;
        // return "year is not a leap year";
    }
    // is year divisible by 4 and 400
    else if(year%4===0&&year%100===0&&year%400===0){
        return true;
    }
    // is year divisible by 4 but not a multiple of 100
    else if(year%4===0&&year%100!==0){
        return true;
    }
    
};

// Do not edit below this line
module.exports = leapYears;
