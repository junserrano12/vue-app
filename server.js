const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

port = process.env.PORT || 8081

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

app.put('/posts/:id', (req, res) => {

    res.send({

        success: true
    })
})

app.delete('/posts/:id', (req, res) => {
    res.send({
        success: true
    })
})

app.get('/post/:id', (req, res) => {
    res.send({
        success: true
    })
})

app.listen(port)
console.log('Server started on port ' + port)