const express = require('express');

const app = express()


app.use(express.json()) // use() use in middlewere data 

app.use((req,res,next)=>{
    console.log("I am custom middlewere")
    next()
})

let courses = [
    { id: 1, name: 'c++' },
    { id: 2, name: 'Javascript' },
    { id: 3, name: 'Java' }
]

app.get('/', (req, res) => {
    res.send("hello from express")
})
app.get('/courses',(req,res)=>{
    res.send(courses)
})

app.get('/contact', (req, res) => {
    res.send(" Contact system ")
}) // get() method is use to read data from a resources 


app.get('/courses/:name', (req, res) => {
    let course = courses.find(course => course.name === req.params.name)
    if (!course) res.status(404).send('This course does not exist')
    res.send(course)
})

app.post('/courses', (req, res) => {
    const course = {
        id: courses.length + 1,
        name : req.body.name
    }
      courses.push(course)
      res.send(course)
}) // post () is use to send data


app.put('/courses/:name',(req,res)=>{
    let course = courses.find(course => course.name === req.params.name)
    if(!course)res.status(404).send('tis course not available')

        course.name=req.body.name
        res.send(course)
    }) //put() update already existing entrys


app.delete('/courses/:name' , (req,res)=>{
    let updateCourse = courses.filter(course => course.name !== req.params.name)
    courses=updateCourse
    res.send(courses)
})


const port = process.env.PORT || 3000  // Dynamic port

app.listen(port, () => console.log(`port is running on ${port} `))
