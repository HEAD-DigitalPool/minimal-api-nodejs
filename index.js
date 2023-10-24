const express = require('express');
var axios = require('axios');
const app = express()
const port = process.env.PORT || 3000;

// Here, we create a variable for the data we want to send over the API; 
let issPositionData = null;

// Here, we call the thirdparty API (e.g: the ISS position) and assign its result to our variable
axios.get('http://api.open-notify.org/iss-now.json')
.then((response) => {
    issPositionData = response.data.iss_position;
});

// Here, we create our first route (called when we reach the /) 
app.get('/', (req, res) => {
    let stringifiedIssPositionData = JSON.stringify(issPositionData);
    // res.send() is what is used to send the response through the API
    // The ${} is a template string, for more: see on the MDN web docs. 
    res.send(`The full position of the ISS is ${stringifiedIssPositionData}`)
})

// Here, we create our second route (called when we reach the /latitude) 
app.get('/latitude', (req, res) => {
    let issPositionLatitude = issPositionData.latitude;
    res.send(`The latitude position of the ISS is ${issPositionLatitude}`)
})

// Here, we create our third route (called when we reach the /latitude) 
app.get('/longitude', (req, res) => {
    let issPositionLongitude = issPositionData.longitude;
    res.send(`The longitude position of the ISS is ${issPositionLongitude}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})