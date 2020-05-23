const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
var assert = require('assert');

const url = 'mongodb+srv://Shivam:Shivam123@cluster0-vry4e.mongodb.net/test?retryWrites=true&w=majority';
const Mongo = new  MongoClient(url,{ useUnifiedTopology: true })
app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(express.static(__dirname))

app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname + '/addUserForm.html'))
});
app.post('/insert',function (req,res) {
    Mongo.connect(function (err,client) {
        var db= Mongo.db('userInfodb')
        const user = {
            FirstName:req.body.inputFirstName,
            LastName :req.body.inputLastName,
            Age:req.body.inputAge,
            Gender:req.body.inputGender,
            Image:req.body.image,
            Address:req.body.inputAddress,
    }

    db.collection('userInfo').insertOne(user,function (err,result) {
        assert.equal(null, err);
        console.log("added")
    })
        res.redirect('/')
})
})
app.get('/getdata', async  (req,res) => {
    const client = await Mongo.connect()
        .catch(err => { console.log(err); });
    if (!client) {
        return;
    }
        var db=  client.db('userInfodb')
        var cursor =    await db.collection('userInfo').find({}).toArray();
        res.send(cursor)
})
app.set( 'port', ( process.env.PORT || 5000 ));

// Start node server
app.listen( app.get( 'port' ), function() {
    console.log( 'Node server running on port http://localhost:' + app.get( 'port' ));
});
