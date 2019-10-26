export class Event {
    name: string;
    category: string;
    location: string;
    date:string;
    hide:boolean;
    static isUser:boolean;

    constructor(name: string, category: string,location:string,date:string) {
      this.name = name;
      this.category = category;
      this.location = location;
      this.date = date;
    }
  
    toggle() {
      this.hide = !this.hide;
    }
  }