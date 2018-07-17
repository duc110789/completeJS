var day = new Date('February 28, 2015');
var dayMonth = day.getMonth();
var dayYear = day.getFullYear();
// console.log(dayYear);
var list31 = ['Jan', 'Mar', 'May', 'Jul', 'Sep', 'Oct', 'Dec'];
var list30 = ['Apr', 'Jun', 'Aug', 'Nov'];
var listFeb = ['Feb'];
var listMonth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'Oct', 'Dec']
var today = day.getDate();
var tomorrow = today + 1;

// Case1: the month has 31 days
if (list31.indexOf(listMonth[dayMonth]) >= 0) {
    if (tomorrow > 31) {
        tomorrow = tomorrow - 31;
        console.log("Tomorrow is: " + tomorrow);
    }
    else {
        console.log("Tomorrow is: " + tomorrow);
    }
}
// Case2: The month only has 30 days
else if (list30.indexOf(listMonth[dayMonth]) >= 0) {
    if (tomorrow > 30) {
        tomorrow = tomorrow - 30;
        console.log("Tomorrow is: " + tomorrow);
    } 
    else {
        console.log("Tomorrow is: " + tomorrow);
    }
}
else if (listFeb.indexOf(listMonth[dayMonth]) >= 0) {
    if ((dayYear % 4 === 0 && dayYear % 100 !== 0 & dayYear % 400 !== 0) || (dayYear % 100 === 0 && dayYear % 400 === 0)) {
        if (tomorrow > 29) {
            tomorrow = tomorrow - 29;
            
            console.log("Tomorrow is: " + tomorrow);
        }
        else {
            console.log("Tomorrow is: " + tomorrow);
        }
    }
    else {
        if (tomorrow > 28) {
            tomorrow = tomorrow - 28;
            console.log("Tomorrow is: " + tomorrow);
        }
        else {
            console.log("Tomorrow is: " + tomorrow);
        }
    }
}
else {
    console.log("Tomorrow is : " + tomorrow);
}
// console.log("Tomorrow is:" + tomorrow);