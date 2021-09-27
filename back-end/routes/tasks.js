const Task = require('../models/task');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    console.log('Tried to post a new task, from the object:');
    console.log(req.body);
    res.end('OK');
});

router.get('/', async (req, res) => {
    console.log('Asked for all the tasks.');
    res.end('OK');
});

router.get('/:id', async(req, res) => {
    console.log(`Asked for the task ${req.params.id}`);
    res.end('OK');
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
