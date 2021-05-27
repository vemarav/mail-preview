const TemplateEngine = require("email-templates");
const path = require("path");
const nodemailer = require("nodemailer");

const sendMail = async (html) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_ID,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  let info = await transporter.sendMail({
    from: process.env.EMAIL_ID,
    to: process.env.EMAIL_ID,
    subject: "GIST | Daily Digest",
    html: html,
  });

  return info;
};

const Mailer = {
  newsletter: async ({ message }) => {
    try {
      const { from, to, subject, data } = message;
      const engine = new TemplateEngine({
        views: { root: "./src/emails" },
        preview: false,
        juiceResources: {
          preserveImportant: true,
          webResources: {
            images: path.join(__dirname, "..", "src/emails"),
            relativeTo: path.join(__dirname, "..", "src/emails"),
          },
        },
      });

      console.time();
      const {
        originalMessage: { html },
      } = await engine.send({
        template: "newsletter",
        message: {
          from,
          to,
          subject,
        },
        locals: data,
      });
      console.timeEnd();
      // console.log(await sendMail(html));
      return html;
    } catch (e) {
      console.error(e);
      return "500 Internal Server Error";
    }
  },

  welcome: async ({ message }) => {
    try {
      const { from, to, subject, data } = message;
      const engine = new TemplateEngine({
        views: { root: "./src/emails" },
        preview: true,
        juiceResources: {
          preserveImportant: true,
          webResources: {
            images: path.join(__dirname, "..", "src/emails"),
            relativeTo: path.join(__dirname, "..", "src/emails"),
          },
        },
      });

      // await engine.send({
      //   message: {
      //     from,
      //     to,
      //     subject,
      //     html: await engine.render("newsletter", data),
      //   },
      // });

      return await engine.render("welcome", data);
    } catch (e) {
      console.error(e);
    }
  },
};

module.exports = Mailer;
