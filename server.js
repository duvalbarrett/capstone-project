const axios = require('axios');
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "./public")));

const port = process.env.PORT || 4400;

const drugs = [

    {
        DESC: "DESC: Medication treatment for panic and anxiety disorders --------------------",
        ADMINISTRATION: "ADMINISTRATION: 1 pill once a day as needed ------------------------------------",
        EFFECTS: "EFFECTS: Drowsiness and dizziness"
    },
    {
        DESC: "DESC: Medication treatment for attention deficit hyperactivity disorder",
        ADMINISTRATION: "ADMINISTRATION: 1 pill once a day as needed -----------------------------------------",
        EFFECTS: "EFFECTS: Bladder pain"
    },
    {
        DESC: "DESC:  Medication treatment for attention deficit hyperactivity disorder",
        ADMINISTRATION: "ADMINISTRATION: 1 pill once a day as needed -------------------------------------",
        EFFECTS: "EFFECTS: Rapid heartbeat, chest pain"
    },
    {
        DESC: "DESC: Medication treatment for depression and anxiety disorder",
        ADMINISTRATION: "ADMINISTRATION: 1 pill once a day as needed ----------------------------------",
        EFFECTS: "EFFECTS: Loss in sexual arousal",
    },

    // heart
    {
        DESC: "DESC: Medication treatment to lower cholesterol and reduce heart attacks",
        ADMINISTRATION: "ADMINISTRATION: 1 or 2 pills a day",
        EFFECTS: "EFFECTS: Dizziness, rapid heartbeat"
    },
    {
        DESC: "DESC: Medication treatment used to treat heart failure and blood pressure",
        ADMINISTRATION: "ADMINISTRATION: 1 or 2 pills a day",
        EFFECTS: "EFFECTS: Chest discomfort"
    },
    {
        DESC: "DESC: Medication treatment that reduces the formation of blood clots",
        ADMINISTRATION: "ADMINISTRATION: 2 pills a day",
        EFFECTS: "EFFECTS: Blood in urine, chest pain"
    },
    {
        DESC: "DESC: Medication treatment to reduce heart attacks and strokes",
        ADMINISTRATION: "ADMINISTRATION: 1 pill once a day",
        EFFECTS: "EFFECTS: Joint pain or stiffness"
    },

    // lungs
    {
        DESC: "DESC: Medication treatment for asthma, COPD, and airway tightness",
        ADMINISTRATION: "ADMINISTRATION: Place solution into nebulizer for inhalation -------------",
        EFFECTS: "EFFECTS: Rapid heartbeat"
    },
    {
        DESC: "DESC: Medication treatment to relieve allergic nasal symptoms",
        ADMINISTRATION: "ADMINISTRATION: Place in to nostril and inhale --------------------------",
        EFFECTS: "EFFECTS: Headache, cough, fever",

    },
    {
        DESC: "DESC: Medication treatment that increases air flow in the lungs",
        ADMINISTRATION: "ADMINISTRATION; Inhale through the mouth ------------------------------------",
        EFFECTS: "EFFECTS: Shakiness in hands/legs",

    },
    {
        DESC: "DESC: Medication treatment for emergency allergic reactions",
        ADMINISTRATION: "ADMINISTRATION: Inject the pen into thigh until click heard ---------",
        EFFECTS: "EFFECTS: chest pain, dizziness",

    }

]


const drugsLookedAt= []

app.post(`/api/drugsLookedAt`, (req,res) => {
    if(req.body.name) {
        res.status(200).send('DESC has shown')
    }
    console.log(req.body.name)
})


app.get(`/api/drugs`, (req,res) => {
    res.status(200).send(drugs)
})


app.listen(port, () => {
    console.log(`Port running on port ${port}`)
});
