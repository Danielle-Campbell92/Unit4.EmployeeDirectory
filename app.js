import express from "express"
const app = express()
import employees from "#db/employees"

app.route('/employees/random').get((req, res) => {
    const index = Math.floor(Math.random() * employees.length)
    const found = employees[index - 1]
    if(found){
        res.send(found)
    }else{
        res.status(404).send("Unable to find employee")
    }
})

app.route('/employees/:id').get((req, res) => {
    const id = Number(req.params.id)
    const found = employees.find(emp => emp.id === id)
    if(found){
        res.send(found)
    }else{
        res.status(404).send("Unable to find employee.")
    }
})


app.route('/employees').get((req, res) => {
    res.send(employees)
})


app.route('/').get((req, res) => {
    res.send("Hello employees!")
})



export default app