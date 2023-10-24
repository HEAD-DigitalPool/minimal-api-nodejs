const express = require('express');
var axios = require('axios');
const app = express()
const port = process.env.PORT || 3000;

let config = {};

let issPositionData = null;

axios.get('http://api.open-notify.org/iss-now.json', config)
.then((response) => {
    issPositionData = response.data.iss_position;
});

app.get('/', (req, res) => {
    let stringifiedIssPositionData = JSON.stringify(issPositionData);
    res.send(`The full position of the ISS is ${stringifiedIssPositionData}`)
})

app.get('/latitude', (req, res) => {
    let issPositionLatitude = issPositionData.latitude;
    res.send(`The latitude position of the ISS is ${issPositionLatitude}`)
})

app.get('/longitude', (req, res) => {
    let issPositionLongitude = issPositionData.longitude;
    res.send(`The longitude position of the ISS is ${issPositionLongitude}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})