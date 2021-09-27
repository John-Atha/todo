const Task = require('../models/task');
const express = require('express');
const router = express.Router();

const ObjectId = require('mongoose').Types.ObjectId;

router.post('/', async (req, res) => {
    console.log('Tried to post a new task, from the object:');
    try {
        const title = req.body.title;
        const tasks = await Task.find();
        for (let task of tasks) {
            if (task.title === title) {
                return res.status(400).send(`Sorry, title  ${title} already exists.`);
            }
        }
        const task = await new Task(req.body).save();
        res.send(task);
    }
    catch (error) {
        console.log(error);
        res.status(400).send("Sorry, we could not create the new task.");
    }
});

router.get('/', async (req, res) => {
    console.log('Asked for all the tasks.');
    try {
        const tasks = await Task.find();
        res.send(tasks);
    }
    catch (error) {
        res.send(error);
    }
});

router.get('/:id', async(req, res) => {
    console.log(`Asked for the task ${req.params.id}`);
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).send('Invalid id.');
    }
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).send(`Task '${req.params.id}' was not found.`)
        }
        return res.send(task);
    }
    catch (error) {
        return res.send(error);
    }
});

router.put('/:id', async (req, res) => {
    console.log(`Asked to update the task ${req.params.id}`);
    res.end('OK');
});

router.delete('/:id', async (req, res) => {
    console.log(`Asked to delete the task ${req.params.id}`);
    res.end('OK');
});

module.exports = router;
