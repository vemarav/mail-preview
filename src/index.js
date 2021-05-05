const express = require("express");
const actions = require("./actions");

const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send(`
    <html>
    <head>
    <style> a {display: block;} </style>
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
