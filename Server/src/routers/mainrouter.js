const express = require('express')
const mainmodel = require('../models/mainmodel')
const mainrouter = express.Router()

mainrouter.post('/addtask', async (req, res) => {
    try {
        console.log(req.body);
        const { tittle, date, time, status } = req.body
        if (tittle && date && time && status) {


            const oldtask = await mainmodel.findOne({ tittle: tittle })
            if (oldtask) {
                return res.status(400).json({
                    success: false,
                    error: true,
                    message: 'tittle already exists',
                    oldtask: oldtask
                })
            }

            const final = await mainmodel({ tittle, date, time, status }).save()
            if (final) {
                return res.status(200).json({
                    success: true,
                    error: false,
                    details: tittle,
                    message: 'Task added'
                })
            }
        } else {
            return res.status(400).json({
                success: false,
                error: true,
                message: 'All fields are not filled'
            })
        }

    } catch (error) {
        return res.status(400).json({
            success: false,
            error: true,
            message: 'Something went wrong'
        })
    }
})

mainrouter.get('/deletetask/:_id', async (req, res) => {
    try {
        const id = req.params._id;

        const details = await mainmodel.findOne({ _id: id })
        const data = await mainmodel.deleteOne({ _id: id })
        if (data.deletedCount == 1) {
            return res.status(200).json({
                success: true,
                error: false,
                message: `${details.tittle} task deleted`,
            })
        } else {
            return res.status(400).json({
                success: false,
                error: true,
                message: 'task not found'
            })
        }
    } catch (error) {
        return res.status(400).json({
            success: false,
            error: true,
            message: 'something went wrong'
        })

    }
})

mainrouter.post('/edittask/:_id', async (req, res) => {
    try {
        const id = req.params._id
        const { tittle, date, time, status } = req.body
        const data = await mainmodel.updateOne({ _id: id }, { $set: { tittle, date, time, status } })
        console.log(data);
        if (data.modifiedCount == 1) {
            return res.status(200).json({
                success: true,
                error: false,
                message: 'updated'

            })
        } else {
            return res.status(400).json({
                success: false,
                error: true,
                message: 'not updated'
            })
        }
    }
    catch (error) {
        return res.status(400).json({
            success: false,
            error: true,
            message: 'something went wrong'
        })
    }
})

mainrouter.get('/viewtasks', async (req, res) => {
    try {
        const data = await mainmodel.find()
        if (data) {
            return res.status(200).json({
                success: true,
                error: false,
                details: data,
                message: 'viewing all tasks'
            })
        } else {
            return res.status(400).json({
                success: false,
                error: true,
                message: 'no task found'
            })
        }
    } catch (error) {
        return res.status(400).json({
            success: false,
            error: true,
            data: error,
            message: "something went wrong"
        })
    }
})

mainrouter.get('/viewsingletask/:_id', async (req, res) => {
    try {
        const id = req.params._id;

        const data = await mainmodel.findOne({ _id: id })
        if (data) {
            return res.status(200).json({
                success: true,
                error: false,
                details: data,
                message: 'viewing single task'
            })
        } else {
            return res.status(400).json({
                success: false,
                error: true,
                message: 'task not found'
            })
        }


    } catch (error) {
        return res.status(400).json({
            success: false,
            error: true,
            details: error,
            message: 'something went wrong'
        })

    }
})

mainrouter.get('/status/:Incomplete', async (req, res) => {
    try {
        const status = req.params.Incomplete
        const data = await mainmodel.find({ status: status })
        if (data) {
            return res.status(200).json({
                success: true,
                error: false,
                details: data,
                message: 'viewing Incomplete tasks'
            })
        } else {
            return res.status(400).json({
                success: false,
                error: true,
                message: 'no Incomplete tasks'
            })
        }
    } catch (error) {
        return res.status(400).json({
            success: false,
            error: true,
            data: error,
            message: "something went wrong"
        })
    }
})

mainrouter.get('/status/:Completed', async (req, res) => {
    try {
        const status = req.params.Completed
        const data = await mainmodel.find({ status: status })
        if (data) {
            return res.status(200).json({
                success: true,
                error: false,
                details: data,
                message: 'viewing Completed tasks'
            })
        } else {
            return res.status(400).json({
                success: false,
                error: true,
                message: 'no Completed tasks'
            })
        }
    } catch (error) {
        return res.status(400).json({
            success: false,
            error: true,
            data: error,
            message: "something went wrong"
        })
    }
})

mainrouter.get('/status/:Inprogress', async (req, res) => {
    try {
        const status = req.params.Inprogress
        const data = await mainmodel.find({ status: status })
        if (data) {
            return res.status(200).json({
                success: true,
                error: false,
                details: data,
                message: 'viewing Inprogress tasks'
            })
        } else {
            return res.status(400).json({
                success: false,
                error: true,
                message: 'no Inprogress tasks'
            })
        }
    } catch (error) {
        return res.status(400).json({
            success: false,
            error: true,
            data: error,
            message: "something went wrong"
        })
    }
})

// mainrouter.post('/editstatus/:id', async (req, res) => {
//     try {
//         const id = req.params.id
//         const { status } = req.body
//         const data = await mainmodel.updateOne({ _id: id }, { $set: { status } })
//         console.log(data);
//         if (data.modifiedCount == 1) {
//             return res.status(200).json({
//                 success: true,
//                 error: false,
//                 message: 'Status updated'

//             })
//         } else {
//             return res.status(400).json({
//                 success: false,
//                 error: true,
//                 message: 'Status not updated'
//             })
//         }

//     } catch (error) {
//         return res.status(400).json({
//             success: false,
//             error: true,
//             message: 'something went wrong'
//         })
//     }
// })


module.exports = mainrouter