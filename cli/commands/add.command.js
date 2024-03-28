

export class AddCommand {
    constructor() {
        this.currentDate = new Date();
        this.options = {
            d: this.setFutureDate.bind(this),
            date: this.setFutureDate.bind(this),
            m: this.setFutureMonth.bind(this),
            month: this.setFutureMonth.bind(this),
            y: this.setFutureYear.bind(this),
            year: this.setFutureYear.bind(this)
        };
    }

    setFutureDate(value){
        this.currentDate.setDate(this.currentDate.getDate() + value);
    }

    setFutureMonth(value){
        this.currentDate.setMonth(this.currentDate.getMonth() + value);
    }

    setFutureYear(value){
        this.currentDate.setFullYear(this.currentDate.getFullYear() + value);
    }

   execute(parameter) {
       const [[option, value]] = Object.entries(parameter);
       this.options[option](value);
       console.log(this.currentDate);
    }
}
