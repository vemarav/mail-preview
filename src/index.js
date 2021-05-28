const express = require("express");
const actions = require("./actions");
const dotenv = require("dotenv").config();

const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send(`
    <html>
    <head>
    <title>Mail Preview</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="shortcut icon" href="https://avatars.githubusercontent.com/u/17309962?v=4" />
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap" rel="stylesheet">
    <style> 
      * {font-family: 'Open Sans'}
      a {display: block;font-size:1.3rem;text-decoration:none;color:#0275d8;} 
      a:hover, a:active, a:visited{color:#7f00ff;} 
    </style>
    </head>
    <body>
    <h1>List of Email Templates</h1>
    <a href="/newsletter" target="_blank">Newsletter Email Template</a>
    <br>
    <a href="/welcome" target="_blank">Welcome Email Template</a>
    <br>
    </body>
    </html>
  `);
});
app.get("/newsletter", actions.newsletter);
app.get("/welcome", actions.welcome);
app.listen(port, () =>
  console.log(`app listening on port http://localhost:${port}`)
);
