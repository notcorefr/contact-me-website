// Imports
import express from 'express';
import cors from 'cors';
import path, { join } from 'node:path'

// Defining Variables
const root = path.join(__dirname, '..');
const app = express();
const port = 3001;

const corsOptions = {
    origin: 'localhost:3001',
    optionsSuccessStatus: 200
}


// serving Static resources
app.use('/', express.static('public/home'))

app.get('/', (req, res) =>{
    res.sendFile(`${root}/public/home/index.html`);
}); 

// 404 Handling
app.get('*', function(req, res){
  res.status(404);
});


app.listen(port, ()=>{
    console.log(`Server Started On Port ${port} vist http://localhost:${port}`);
})
