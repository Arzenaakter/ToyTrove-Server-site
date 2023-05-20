const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config()
const port = process.env.PORT || 5000;
app.use(cors())
app.use(express.json())

// mongodb
// ToyTrove
// TlmQeNJRmIzPGdF6

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.untmfwa.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();


const ToyCollection = client.db('ToyTroveDB').collection('AllToys')
const BestCollection = client.db('ToyTroveDB').collection('bestSelling')

// get data
app.get('/allToys', async(req,res)=>{

    const result = await ToyCollection.find().limit(20).toArray();
    // const cursor =ToyCollection.find()

    // const result = await cursor.toArray()
    res.send(result)
})


// best selling data
app.get('/bestSelling', async(req,res)=>{
  const result = await BestCollection.find().toArray();
  res.send(result)

})




// indexing for implement search by toy name
const indexkeys = {toyName: 1}
const indexOptions={ name : 'ToyName'}
const result = await ToyCollection.createIndex(indexkeys,indexOptions);


app.get('/toyNameSearch/:text', async(req,res)=>{
    const searchName = req.params.text;
    const result = await ToyCollection.find({
        $or:[
            {toyName: {$regex : searchName, $options: 'i'}}
        ]
    }).toArray()
    res.send(result)
})






//  get data by id
app.get('/allToys/:id', async(req,res)=>{
    const id = req.params.id;
    const query ={_id: new ObjectId(id)}
    const result = await ToyCollection.findOne(query)
    res.send(result)
})

// get data by email
app.get('/myToys/:email', async(req,res)=>{

    const result = await ToyCollection.find({sellerEmail:req.params.email}).toArray()
    res.send(result)
})





// post data all toys
app.post('/allToys', async(req,res)=>{
    const toy = req.body;
  
    const result = await ToyCollection.insertOne(toy);
    res.send(result)
})

// myToy update
app.put('/allToys/:id',async(req,res)=>{
   
    const id = req.params.id;
    const toyInfo = req.body;
   const filter = {_id: new ObjectId(id)};
   const options = {upsert:true}

   const updatedToyInfo = {
    $set:{
        toyName: toyInfo.toyName,
     toyPhoto: toyInfo.toyPhoto,
     price :toyInfo.price,
     rating:toyInfo.rating,
     quantity: toyInfo.quantity,
     description:toyInfo.description,
     subCategory: toyInfo.subCategory
        
    }
   }
   const result = await ToyCollection.updateOne(filter,updatedToyInfo,options)
   res.send(result)
  


})


// delete


app.delete('/allToys/:id', async(req,res)=>{
    const id = req.params.id;
    const query ={ _id : new ObjectId(id) }
    const result = await ToyCollection.deleteOne(query);
    res.send(result)

  })







    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);





// 
app.get('/',(req,res)=>{
    res.send("ToyTrove is running");
});

app.listen(port,()=>{
    console.log(`ToyTrove is running on port ${port}`);
})