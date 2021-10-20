const express = require('express')
var cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

const port = 5000

app.get('/', (req, res) => {
    res.send('This is a node js project')
})

const users = [
    {id: 0, name: 'shabana', gmail: 'shabana@gmail.com', phone: '01644043487'},
    {id: 1, name: 'shabana2', gmail: 'shabana@gmail.com', phone: '01644043487'},
    {id: 2, name: 'shabana3', gmail: 'shabana@gmail.com', phone: '01644043487'},
    {id: 3, name: 'shabana4', gmail: 'shabana@gmail.com', phone: '01644043487'},
    {id: 4, name: 'shabana5', gmail: 'shabana@gmail.com', phone: '01644043487'},
    {id: 5, name: 'shabana6', gmail: 'shabana@gmail.com', phone: '01644043487'},
    {id: 6, name: 'shabana7', gmail: 'shabana@gmail.com', phone: '01644043487'},
    {id: 7, name: 'shabana8', gmail: 'shabana@gmail.com', phone: '01644043487'},
    {id: 8, name: 'shabana9', gmail: 'shabana@gmail.com', phone: '01644043487'},
    {id: 9, name: 'shabana10', gmail: 'shabana@gmail.com', phone: '01644043487'},
    {id: 10, name: 'shabana11', gmail: 'shabana@gmail.com', phone: '01644043487'}
] 

app.get('/users', (req, res) => {
    const search = req.query.search

    //use query parameter

    if(search){
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(searchResult)
    }else{
        res.send(users)
    }
   
})


app.post('/users', (req, res) => {
    const newUser = req.body
    newUser.id = users.length
    users.push(newUser)

    console.log('Hitting the post', req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user);
})

app.listen(port, () =>{
    console.log('listening to port', port);
})