# Minimal node-js API

### How to run this?

```
git clone https://github.com/HEAD-DigitalPool/minimal-api-nodejs.git # or clone your own fork before
$ cd minimal-api-nodejs
$ npm install --save
$ npm start
```

### What is this?

This is a boilerplate to help you run node.js with a simple express JS server application. Seperating server and client is important for security issues for example, in order to hide `API keys` you use for your project or your database endpoint.

### How does the code work?

First, the following code fetches info from an external API; here the location of the International Space Station (ISS). We then store it inside a variable (`issPositionData`). 

```
// Here, we create a variable for the data we want to send over the API; 
let issPositionData = null;

// Here, we call the thirdparty API (e.g: the ISS position) and assign its result to our variable
axios.get('http://api.open-notify.org/iss-now.json')
.then((response) => {
    issPositionData = response.data.iss_position;
});
```

Then, here: we serve the data when the route  `/`  is reached:

```
app.get('/', (req, res) => {
    let stringifiedIssPositionData = JSON.stringify(issPositionData);
    // res.send() is what is used to send the response through the API
    // The ${} is a template string, for more: see on the MDN web docs. 
    res.send(`The full position of the ISS is ${stringifiedIssPositionData}`)
})
```

Finally, two important things here:

- `JSON.stringify()` is to convert JS value into `JSON` 
- `res.send()` is to send the HTTP response through the API

### How to deploy this online?

Using resources for this example app counts towards your usage. [Delete your app](https://devcenter.heroku.com/articles/heroku-cli-commands#heroku-apps-destroy) and [database](https://devcenter.heroku.com/articles/heroku-postgresql#removing-the-add-on) as soon as you are done experimenting to control costs.

By default, apps use Eco dynos if you are subscribed to Eco. Otherwise, it defaults to Basic dynos. The Eco dynos plan is shared across all Eco dynos in your account and is recommended if you plan on deploying many small apps to Heroku. Learn more about our low-cost plans [here](https://blog.heroku.com/new-low-cost-plans).

Eligible students can apply for platform credits through our new [Heroku for GitHub Students program](https://blog.heroku.com/github-student-developer-program).

```
$ heroku create
$ git push heroku main
$ heroku open
```

or

[![Deploy to Heroku](https://camo.githubusercontent.com/6979881d5a96b7b18a057083bb8aeb87ba35fc279452e29034c1e1c49ade0636/68747470733a2f2f7777772e6865726f6b7563646e2e636f6d2f6465706c6f792f627574746f6e2e737667)](https://heroku.com/deploy)

### [Documentation](https://github.com/HEAD-DigitalPool/ejs-app#documentation)

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started on Heroku with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)
