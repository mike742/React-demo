const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3002;
const app = express();
const cors = require('cors');

app.use( bodyParser.json() );
app.use( cors() );

const doctors = [
    { id: 1, name: 'Dr. Jack Smith' },
    { id: 2, name: 'Dr. Adam West' },
    { id: 3, name: 'Dr. Rachel Green' },
]; 

const patients = [
    { 
        healthNumber: 12301, 
        name: 'Patient Lucy',
        address: '111, Main St. Winnipeg',
        dateOfBirth: new Date(1991, 12, 25),
        phoneNumber: '204 123-4567'
    },
    { 
        healthNumber: 12302, 
        name: 'Patient Mark',
        address: '345, Bradway Ave Winnipeg',
        dateOfBirth: new Date(1991, 7, 12),
        phoneNumber: '204 123-4599'
    },
];

app.get('/doctors', (req, res) => res.send(doctors));
app.get('/patients', (req, res) => res.send(patients));
app.get('/patients/:healthNumber', (req, res) => {
    const hn = req.params.healthNumber;
    const patient = patients.find(p => p.healthNumber == hn);
    if (patient) {
        res.send(patient);
    } else {
        res.status(404).send(`Patient with ${hn} doesn't exist!`);
    }
});

app.listen(PORT, () => console.log('Server is running on localhost: ' + PORT));