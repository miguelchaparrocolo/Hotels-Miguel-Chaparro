const express = require('express');
const morgan = require('morgan') ;
const cors = require('cors');
require('dotoenv').config()

const {
    handleGetAllData,
    handleGetDataById,
    handleCreateData,
    handleUpdateData,
    handleDeleteData,
    handleGetInfo,
     } = require('./controlador');

const app = express();

    const port = process.env.PORT || 3001;

app.use(cors());

app.use(express.json());

app.use(morgan('dev'));



app.get('/', (req, res)=>{
    res.send('Hello world');
});

app.get('/api/hotels', handleGetAllData);

app.get('/api/info', handleGetInfo);

app.get('/api/hotels/:id', handleGetDataById);

app.post('/api/hotels', handleCreateData);

app.patch('/api/hotels/:id', handleUpdateData);

app.delete('/api/hotels/:id', handleDeleteData);


app.listen(port, () => {
    console.log(`Runing at http://localhost:${port}`);
});
