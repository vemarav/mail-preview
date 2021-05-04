const TemplateEngine = require("email-templates");
const path = require("path");

const Mailer = {
  newsletter: async ({ message }) => {
    console.log({ path });
    try {
      const { from, to, subject, data } = message;
      const engine = new TemplateEngine({
        views: { root: "./src/emails" },
        preview: true,
        juiceResources: {
          preserveImportant: true,
          webResources: {
            //
            // this is the relative directory to your CSS/image assets
            // and its default path is `build/`:
            //
            // e.g. if you have the following in the `<head`> of your template:
            // `<link rel="stylesheet" href="style.css" data-inline="data-inline">`
            // then this assumes that the file `build/style.css` exists
            //
            relativeTo: path.resolve("./src/emails"),
            //
            // but you might want to change it to something like:
            // relativeTo: path.join(__dirname, '..', 'assets')
            // (so that you can re-use CSS/images that are used in your web-app)
            //
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
};

module.exports = Mailer;
