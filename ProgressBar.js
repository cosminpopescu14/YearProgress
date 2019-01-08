const { bgGreen } = require("chalk");
let readline = require("readline");

module.exports = class ProgressBar {

    constructor() {
        this.total;
        this.current;
        this.barLength = process.stdout.columns - 30;
    }

    init(total) {
        this.total = total;
        this.current = 0;
        this.update(this.current);
    }

    update(current) {
        this.current = current;
        const currentProgress = this.current / this.total;
        this.draw(currentProgress);
    }

    draw(currentProgress) {
        const filledBarLength = (currentProgress * this.barLength).toFixed(0);
        const emptyBarLength = this.barLength - filledBarLength;
        const filledBar = this.getBar(filledBarLength, " ", bgGreen);
        const emptyBar = this.getBar(emptyBarLength, "-");
        const percentageProgress = (currentProgress * 100).toFixed(2);

        readline.clearLine(process.stdout);
        readline.cursorTo(process.stdout, 0);

        process.stdout.write(`Current year progress: [${filledBar}${emptyBar}] | ${percentageProgress}%`);
    }

    getBar(length, char, color = a => a) {
        let str = "";

        for (let index = 0; index < length; index++) {
            str += char;           
        }

        return color(str);
    }

}

