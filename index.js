//1. document = access document
//2. .getElementById("") = target an element using id attribute
//3. .addEventListener("") = target an event
//4. function to be executed when event triggered or when it occurs


// document.getElementById("click-here-btn").addEventListener("click", function(){
//     alert("You clicked here")
// });

// document.getElementById("p-text").innerHTML = "Text justed changed HaHa!!";

// document.getElementById("p-text").style.fontStyle = "italic";

function validateForm() {
    let valid = true;

    // validate name
    let name = document.getElementById("name").value;
    if (name === ""){
        document.getElementById("nameError").innerHTML = "Name is required.";
        valid = false;
    }

    //email validation
    let email = document.getElementById("email").value;
    if (email === ""){
        document.getElementById("emailError").innerHTML = "Email is required.";
        valid = false;
    }

    //password validation
    let password = document.getElementById("password").value;
    if (password === ""){
        document.getElementById("passwordError").innerHTML = "Password is required.";
        valid = false;
    } else if(password.length > 8){
        document.getElementById("passwordError").innerHTML = "Password must be at least 8 characters.";
        valid = false;
    }

    //age validation
    let age = document.getElementById("age").value;
    if (age === ""){
        document.getElementById("ageError").innerHTML = "Age is required";
        valid = false;
    } else if (isNaN(age) || age < 18){
        document.getElementById("ageError").innerHTML = "Age must be a number above 18";
        valid = false;
    }

    //gender validation
    let gender = document.getElementById("gender").value;
    if (gender === ""){
        document.getElementById("genderError").innerHTML = "Gender is required";
        valid = false;
    }

    //country validation
    let country = document.getElementById("country").value;
    if (country === ""){
        document.getElementById("countryError").innerHTML = "Country is required";
        valid = false;
    }

    //terms and conditions validation
    let terms = document.getElementById("terms").value;
    if (terms === ""){
        document.getElementById("termsError").innerHTML = "Must agree to Terms and Conditions";
        valid = false;
    }

    //if all vaidations pass, form is submitted
    return valid;
};

var express =require( 'express');
var path =require('path');
var app =express();

//define a route
app.get('/intro', function(request, response){
    response.sendFile(path.join(_dirname,"indextel.html"));
});

app.listen(3100, function(){
    console.log('My expess server is running!!!!!');
});

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());

app.use(cors()); // Enable CORS
app.use(bodyParser.json());

// Path to the file where records will be saved
const dataFilePath = path.join(__dirname, 'data.json');

// Read existing data from the file or initialize with an empty array
const readData = () => {
    try {
        const data = fs.readFileSync(dataFilePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error("Error reading data:", error); // Log the error
        return [];
    }
};

const writeData = (data) => {
    try {
        fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf-8');
        console.log("Data successfully written to data.json.");
    } catch (error) {
        console.error("Error writing data:", error);
    }
};



// Endpoint to save a new card
app.post('/save-card', (req, res) => {
    console.log("Received data:", req.body); // Log the received data

    const { patientId, patientInfo, medicalNotes, complaints } = req.body;
    const newCard = {
        patientId,
        patientInfo,
        medicalNotes,
        complaints,
        timestamp: new Date().toISOString()
    };

    const data = readData();
    console.log("Current data in file:", data); // Log current data from the file

    data.push(newCard);
    writeData(data);

    console.log("Data after adding new card:", data); // Log data after pushing new card

    res.status(200).json({ message: 'Card saved successfully', card: newCard });
});

// Endpoint to retrieve all cards
app.get('/get-cards', (req, res) => {
    const data = readData();
    res.status(200).json(data);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

function savecard() {
    var document =document.getElementById("save card")
    var savedcard=document.value*document
        alert(document.saved) }
