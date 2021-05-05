const TemplateEngine = require("email-templates");
const path = require("path");

const Mailer = {
  newsletter: async ({ message }) => {
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

      return await engine.render("newsletter", data);
    } catch (e) {
      console.error(e);
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
