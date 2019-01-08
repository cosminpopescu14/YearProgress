const ProgressBar = require("./ProgressBar");
let getDayOfYear = require('./node_modules/date-fns/getDayOfYear')

const bar = new ProgressBar();

const total = 365;
let current = 0;
//let now = new Date().toJSON().slice(0,10).replace(/-/g,'/');
bar.init(total);

current = getDayOfYear(new Date())

bar.update(current);


/*function getDayOfYear() {
    let now = new Date();
    let start = new Date(now.getFullYear(), 0, 0);
    let diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
    let oneDay = 1000 * 60 * 60 * 24;

    let day = Math.ceil(diff / oneDay);

    return day
}*/


