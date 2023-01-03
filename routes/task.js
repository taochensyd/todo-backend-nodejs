const { Router, application } = require('express');
const db = require('../Database/Database');
const router = Router();

// CURD Operation
// Read
router.get('/getAllTaskById/:id', (req, res) => {
    try {
        let sql = `SELECT * FROM TodoTask WHERE UserID=${req.params.id};`
        db.query(sql, (err, rows) => {
            console.log(rows);
            res.send(rows);
        });
    } catch (error) {
        console.log(error);
    }
})

// Create
router.post('/createNewTask', (req, res) => {
    // current timestamp in milliseconds
    let ts = Date.now();

    let date_ob = new Date(ts);
    let date = date_ob.getDate();
    let month = date_ob.getMonth() + 1;
    let year = date_ob.getFullYear();

    // prints date & time in YYYY-MM-DD format
    let currentDate = date + "-" + month + "-" + year;

    try {
        let sql = `INSERT INTO TodoTask (
            UserID,
            Title,
            TaskDescription,
            StartDate,
            isCompleted
        )
    VALUES (
            ${req.body.UserID},
            "${req.body.Title}",
            "${req.body.TaskDescription}",
            "${currentDate}",
            ${req.body.isCompleted}
        );`
        db.query(sql, (err, rows) => {
            console.log(sql);
            console.log(rows);
            res.send(rows);
        });


        /*
        If Success, it will return following:

        ResultSetHeader {
            fieldCount: 0,
            affectedRows: 1,
            insertId: 3,
            info: '',
            serverStatus: 2,
            warningStatus: 0
        }

        */
    } catch (err) {
        console.log(err);
    }
})

router.patch('/updateTaskTitle', (req, res) => {
    let sql = `UPDATE TodoTask
    SET Title = "${req.body.Title}"
    WHERE TaskID=${req.body.TaskID};`;

    try {
        db.query(sql, (err, rows) => {
            console.log(sql);
            console.log(rows);
            res.send(rows);
        });
    } catch (err) {
        console.log(err);
    }
})


router.patch('/updateTaskDescription', (req, res) => {
    let sql = `UPDATE TodoTask
    SET TaskDescription = "${req.body.TaskDescription}"
    WHERE TaskID=${req.body.TaskID};`;
    try {
        db.query(sql, (err, rows) => {
            console.log(sql);
            console.log(rows);
            res.send(rows);
        });
    } catch (err) {
        console.log(err);
    }
})

router.patch('/updateisCompleted', (req, res) => {
    let sql = `UPDATE TodoTask
    SET isCompleted = ${req.body.isCompleted}
    WHERE TaskID=${req.body.TaskID};`;
    try {
        db.query(sql, (err, rows) => {
            console.log(sql);
            console.log(rows);
            res.send(rows);
        });
    } catch (err) {
        console.log(err);
    }
})

router.delete('/deleteTaskById/:id', (req, res) => {
    let sql = `DELETE FROM TodoTask WHERE TaskId=${req.params.id};`
    try {
        db.query(sql, (err, rows) => {
            console.log(sql);
            console.log(rows);
            res.send(rows);
        });
    } catch (error) {
        console.log(error);
    }
})


module.exports = router;