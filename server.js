const express = require('express')
const http = require('http');
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const fs = require('fs')
const path = require('path')

const app = express()
const server = http.createServer(app)

const port = process.env.PORT || 81

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
app.use(express.static('dist'));

app.get('/', function(req, res) {
    res.sendFile( path.join (__dirname, '/dist/index.html'), function(err) {
        if (err) return res.status(500).send(err)
    })
})

app.post('/api/add_post', (req, res) => {
    var title = req.body.title;
    var description = req.body.description;
    var data = {
        title: title,
        description: description
    }

    res.send({
        data: data,
        success: true
    })
})

app.get('/api/posts', (req, res) => {
    res.send([
        {
            title: "my title 3",
            description: "my description"
        }
    ])
})

app.get('/api/clients', (req, res) => {
    var json = getConfig('clientinformations.json');
    res.send(json)
})

server.on('error', function(e) {
    console.log("error")
})

server.listen(port)
console.log('Server started on port ' + port)

/*FUNCTIONS*/
function readJsonFileSync(filepath, encoding){

    if (typeof (encoding) == 'undefined'){
        encoding = 'utf8';
    }
    var file = fs.readFileSync(filepath, encoding);
    return JSON.parse(file);
}

function getConfig(file){

    var filepath = __dirname + '/api/' + file;
    return readJsonFileSync(filepath);
}