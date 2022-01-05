var MongoClient = require('mongodb').MongoClient;

var demoPerson = { name: 'Abdulloh', lastName: 'Musayev' };
var findKey = { name: 'Abdulloh' };

MongoClient.connect('mongodb://localhost/?directConnection=true&serverSelectionTimeoutMS=2000', function (err, client) {
  if (err) throw err;
  console.log('connected to database');

  var db = client.db('demo');
  var collection = db.collection('people');

  collection.insert(demoPerson, function (err, results) {
    demoPerson.lastName = 'Mirziyoyev';
    // TypeError: collection.save is not a function
    collection.save(demoPerson, function (err, results) {
      console.log('Updated');
      collection.find(findKey).toArray(function (err, results) {
        console.log(results);

        // cleanup
        collection.drop(function () { db.close(); });
      });
    });
  });
});
