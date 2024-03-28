
export class CurrentCommand {
    constructor() {
        this.currentDate = new Date();
        this.options = {
            d: this.getDate.bind(this),
            date: this.getDate.bind(this),
            m: this.getMonth.bind(this),
            month: this.getMonth.bind(this),
            y: this.getFullYear.bind(this),
            year: this.getFullYear.bind(this)
        };
    }

    getDate() {
        return this.currentDate.getDate()
    }

    getMonth() {
        return this.currentDate.getMonth() + 1;
    }

    getFullYear() {
        return this.currentDate.getFullYear()
    }
    execute(parameters) {
        const [ option ] = Object.keys(parameters)
        if (!option || !(option in this.options)) {
            console.log(new Date());
            return;
        }

        console.log(this.options[option]());
    }
}
