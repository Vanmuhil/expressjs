const express = require('express')
const bodyParser = require('body-parser')
const staffModel = require('../model/staffModel')
const router = express.Router()
router.use(bodyParser.json())


router.get('/', (req, res) => {
    res.send('Staff Page')
})

router.post('/post', (req, res) => {
    console.log(req.body);
    const newStaff = new staffModel(req.body)
    newStaff.save()
        .then(response => console.log(response))
        .catch(err => console.log(err))
    res.send("Staff Posting Page")
})

// To get the values from database fully
router.get('/get', (req,res) => {
    staffModel.find()
        .then(response => res.send(response))
        .catch(err => console.log(err)
        )
})

// To get the values from db based on id
router.get('/get/:id', (req,res) => {
    staffModel.findById(req.params.id)
        .then(response => res.send(response))
        .catch(err => console.log(err))
})


// To update the value
router.put('/update/:id', (req, res) => {
    staffModel.findByIdAndUpdate(req.params.id, req.body)
        .then(response => console.log(response))
        .catch(err => console.log(err))
    res.send("staff updated page")
})


// Delete the values
router.delete('/delete/:id', (req, res) => {
    staffModel.findByIdAndDelete(req.params.id)
        .then(response => console.log(response))
        .catch(err => console.log(err))
    res.send("Deleted page")
})

module.exports = router