const Express = require('express')
const router = Express.Router();
let validateJWT = require("../middleware/validate-jwt");
const { JournalModel } = require('../models');

router.get('/practice', validateJWT, (req,res) => {
    res.send('this is a practice route')
})

router.get('/about', (req,res) => {
    res.send('this is a about route')
})




/* 
Journal Create */

router.post("/create", validateJWT, async (req, res) => {
    const { title, date, entry } = req.body.journal
    const { id } = req.user;

    const journalEntry = {
        title,
        date,
        entry,
        owner: id
    }
    try {
        const newJournal = await JournalModel.create(journalEntry);
        res.status(200).json(newJournal);
    } catch (err) {
        res.status(500).json({ error: err })
    }
    JournalModel.create(journalEntry)
})



module.exports = router;