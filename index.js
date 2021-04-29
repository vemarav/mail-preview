const Mailer = require("./mailer");
const express = require("express");

const app = express();

app.get("/", async (req, res) => {
  const message = {
    from: "sender@domain.com",
    to: "receiver@domain.com",
    subject: "Local mail testing",
    data: { name: "world" },
  };
  try {
    const document = await Mailer.send({ message });
    return res.send(document);
  } catch (e) {
    res.send(`500 Oops Gotcha!\n${e}`);
  }
});

app.listen(3000);
