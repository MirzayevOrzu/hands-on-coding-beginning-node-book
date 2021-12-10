function printableMessage() {
  var message = 'Assalomu alaykum';

  function setMessage(newMessage) {
    if (!newMessage) {
      throw new Error('New message cannot be empty');
    }
    message = newMessage;
  }

  function getMessage() {
    return message;
  }

  function printMessage() {
    console.log(message);
  }

  return {
    setMessage,
    getMessage,
    printMessage,
  }
}

// Pattern in use
var awesome1 = printableMessage();
awesome1.printMessage();   // Assalomu alaykum

var awesome2 = printableMessage();
awesome2.setMessage('Hello');
awesome2.printMessage();   // Hello

// Since we get a new object everytime we call the module function
// awesome1 is unaffected by awesome2
awesome1.printMessage();   // Assalomu alaykum
