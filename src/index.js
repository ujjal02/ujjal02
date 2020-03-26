const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.port || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () =>{
    console.log("Website is up on port ",port)
})

const jwt = require('jsonwebtoken')

const myFunction = async () => {
    const token = jwt.sign({_id:'abc123'}, 'thisismynewcourse', {expiresIn: '15 seconds'})
    console.log(token)
    const data = jwt.verify(token, 'thisismynewcourse')
    console.log(data)
}

myFunction()