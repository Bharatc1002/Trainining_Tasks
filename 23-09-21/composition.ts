class Pushable {

    sendPushMessage() {
      console.log("Your file has been converted successfully.");
    }
  }
  
  class Converter {
  
    push;
  
    constructor() {
      this.push = new Pushable();
    }
  
    convert() {
      console.log("Converting...");
      return true;
    }
  }

  var c1 = new Converter();
  c1.convert();
  c1.push.sendPushMessage();