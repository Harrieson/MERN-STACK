import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import { connectToDB } from './database.js';

const app = express();
connectToDB();
app.use(bodyParser.json({ extended: true, limit: '20mb'}));
app.use(bodyParser.urlencoded({extended: true, limit: '20mb'}));
app.use(cors());


app.get('/', (req, res) => {
    res.send(`API is running from port ${port}`)
})

const port = 5000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
