const Mailer = require("../mailer");

const welcome = async (req, res) => {
  const message = {
    from: "sender@domain.com",
    to: "receiver@domain.com",
    subject: "Local mail testing",
    data: {
      user: {
        name: "Aravind Vemula",
        email: "aravind@brewhackers.com",
      },
    },
  };
  try {
    const document = await Mailer.welcome({ message });
    return res.send(document);
  } catch (e) {
    res.send(`500 Oops Gotcha!\n${e}`);
  }
};

module.exports = welcome;
