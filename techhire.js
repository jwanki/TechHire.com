var MongoClient = require('mongodb').MongoClient;

var uri = "mongodb+srv://jwanki1:gfdovo456@cluster0-w8rzc.mongodb.net/test?retryWrites=true&w=majority";
MongoClient.connect(uri,{ useNewUrlParser: true }, function(err, client) {
    const collection = client.db("techhire").collection("userprofile");
    console.log("connected");
    // perform actions on the collection object

    var ins = {fname:'Boom',lname:'Jrs',dob:'09/27/1991',occupation:'IT guy',experience:'Web Development',education:'M.S. AIT at TU',skills:'HTML and CSS'};

    collection.insertOne(ins,function(err,res){
    console.log("data inserted");
    });

    client.close();
});