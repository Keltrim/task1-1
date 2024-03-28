
export class SubCommand {
    constructor() {
        this.currentDate = new Date();
        this.options = {
            d: this.setPastDate.bind(this),
            date: this.setPastDate.bind(this),
            m: this.setPastMonth.bind(this),
            month: this.setPastMonth.bind(this),
            y: this.setPastYear.bind(this),
            year: this.setPastYear.bind(this)
        };
    }

    setPastDate(value){
        this.currentDate.setDate(this.currentDate.getDate() - value);
    }

    setPastMonth(value){
        this.currentDate.setMonth(this.currentDate.getMonth() - value);
    }

    setPastYear(value){
        this.currentDate.setFullYear(this.currentDate.getFullYear() - value);
    }

    execute(parameter) {
        const [ [option, value] ] = Object.entries(parameter);
        this.options[option](value);
        console.log(this.currentDate);
    }
}
