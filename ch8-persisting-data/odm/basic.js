var mongoose = require('mongoose');

// Define a schema
var bookSchema = new mongoose.Schema({ name: 'string', author: 'string', pages: 'number' });
bookSchema.methods.about = function () { console.log(this.name, ' is ', this.pages, 'pages long') }

// Compile it into a model
var Book = mongoose.model('Book', bookSchema);

mongoose.connect('mongodb://localhost/demo');
var db = mongoose.connection;
db.once('open', function callback() {
  console.log('connected');

  // Use the model
  var book1 = new Book({ name: 'Куркма', author: 'Жавлон Жовлиев', pages: 362 });
  book1.about();

  book1.save(function (err) {

    Book.findOne({ name: 'Куркма' }).exec(function (err, book) {

      // We get a model instance all setup and ready!
      book.about();

      db.collection('books').drop(function () { db.close(); });
    })
  });
});