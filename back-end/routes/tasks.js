const Task = require('../models/task');
const express = require('express');
const router = express.Router();

const ObjectId = require('mongoose').Types.ObjectId;

router.post('/', async (req, res) => {
    
    console.log('Tried to post a new task, from the object:');
    const title = req.body.title;
    const sameTitleTask = await Task.findOne( { title });
    if (sameTitleTask) {
        return res.status(400).send(`Sorry, title '${title}' already exists.`);
    }
    const task = await new Task(req.body).save();
    res.send(task);

});

router.get('/', async (req, res) => {

    console.log('Asked for all the tasks.');
    const tasks = await Task.find();
    res.send(tasks);

});

router.get('/:id', async(req, res) => {

    console.log(`Asked for the task ${req.params.id}`);
    
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).send('Invalid id.');
    }

    const task = await Task.findById(req.params.id);
    if (!task) {
        return res.status(404).send(`Task '${req.params.id}' was not found.`)
    }
    return res.send(task);

});

router.put('/:id', async (req, res) => {

    console.log(`Asked to update the task ${req.params.id}`);
    
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).send('Invalid id.');
    }

    if (req.body.title) {
        const title = req.body.title;
        const same_title_task = await Task.findOne({ title });
        console.log(same_title_task);
        if (same_title_task && same_title_task._id.toString()!=req.params.id) {
            return res.status(400).send(`Sorry, title '${title}' already exists.`);
        }    
    }

    const task = await Task.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true },
    );
    return res.send(task);

});

router.delete('/:id', async (req, res) => {
    
    console.log(`Asked to delete the task ${req.params.id}`);
    
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).send('Invalid id.');
    }

    const task = await Task.findById(req.params.id);
    if (!task) {
        return res.status(404).send(`Task '${req.params.id}' was not found.`)
    }
    
    const deleted = await Task.findByIdAndDelete(req.params.id);
    res.send(deleted);

});

module.exports = router;
