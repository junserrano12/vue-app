const express = require('express')
const http = require('http');
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
const server = http.createServer(app)

const port = process.env.PORT || 8081

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/posts', (req, res) => {
    res.send([
        {
            title: "my title 3",
            description: "my description"
        }
    ])
})

app.post('/add_post', (req, res) => {
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

server.on('error', function(e) {
    console.log("error")
})

server.listen(port)
console.log('Server started on port ' + port)