const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();

app.use( bodyParser.json() );
app.use(cors())

const fakeData = [
    {
        name: 'dog',
        furry: true
    },
    {
        name: 'lizard',
        furry: false
    }
]

const moreData = ['luke', 'ashton']

//ENDPOINTS
app.get('/api/animals', (req, res) => {
    res.send(fakeData)
})

app.get('/api/names', (req, res) => {
    res.send(moreData)
})




const port = 4000;
app.listen( port, () => { console.log(`Server listening on port ${port}`); } );

