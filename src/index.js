const Mailer = require("./mailer");
const express = require("express");

const app = express();
const router = express.Router();
const port = process.env.PORT || 3001;

const newsletter = async (req, res) => {
  const message = {
    from: "sender@domain.com",
    to: "receiver@domain.com",
    subject: "Local mail testing",
    data: {
      user: {
        name: "Aravind Vemula",
        email: "aravind@brewhackers.com",
      },
      posts: [
        {
          id: 778,
          imageUrl:
            "https://res.cloudinary.com/stockspot/image/upload/v1620073350/u99vbq7r3h8gzt6xqvxy.jpg",
          title:
            "Kroger Begins Testing Deliveries By Drone For Baby Products & S’mores",
          content:
            "Kroger would join Walmart in launching a grocery drone delivery pilot programme. From a store in Centerville, Ohio, the retail chain is working with Drone Express to deliver goods such as baby products, over-the-counter prescriptions weighing up to five pounds.\n\nGroceries will be delivered by “certified drone pilots under FAA approval,” as per a landing page for the Kroger Drone Delivery service.",
          dynamicLink: "https://gistwebsite.page.link/aMouPEuWcGnkc5NeA",
        },
        {
          id: 775,
          imageUrl:
            "https://res.cloudinary.com/stockspot/image/upload/v1620064719/cxry1blva62r47tkfdnk.jpg",
          title:
            "SpaceX Astronauts Make A Splash As They Return From An ISS Mission",
          content:
            "Off the coast of Florida, four astronauts from SpaceX's first complete flight to the International Space Station (ISS) have splashed down to Earth.\n\nIt's the first time the US has splashed down in the dark since NASA's Apollo 8 returned from the moon in 1968. The 167-day mission is nearly double the previous record of 84 days set in 1974 for US-launched astronauts.",
          dynamicLink: "https://gistwebsite.page.link/kpv96iM4EgmSuUW2A",
        },
        {
          id: 777,
          imageUrl:
            "https://res.cloudinary.com/stockspot/image/upload/v1620050945/wdezqxqkwrhvvwttp88u.jpg",
          title: "Emotion Recognition AI For Animals Invented",
          content:
            "A researcher published an article detailing a system by which facial recognition AI could be used to observe the emotions of farm animals.\n\nIt explains the system as a high-value, low-impact machine learning paradigm where farmers can measure livestock comfort in real-time using cameras instead of hormone sampling. They are trying to tell what mood the animals are in.",
          dynamicLink: "https://gistwebsite.page.link/o2koeesxrjxFEhX98",
        },
        {
          id: 776,
          imageUrl:
            "https://res.cloudinary.com/stockspot/image/upload/v1620056504/pgpsojuidc8dq2qkackt.jpg",
          title: "Teampay To Work With Silicon Valley Bank",
          content:
            "Spend management services provider Teampay announced its platform will work with Silicon Valley Bank’s (SVB’s) Innovators Card.\n\nTeampay customers can now pull their existing SVB credit line through the Innovators Card while using all the advantages of Teampay’s spend management platform. The SVB virtual cards are regulated by amount and vendor to assure compliance.",
          dynamicLink: "https://gistwebsite.page.link/2ZLvavBtu9qZwQLR8",
        },
        {
          id: 774,
          imageUrl:
            "https://res.cloudinary.com/stockspot/image/upload/v1620049532/dhs3tbxducdoqgfpmbfn.jpg",
          title:
            "A Robotics Challenge That Could Change Our Perspective Towards AI",
          content:
            "In a recent development, AI scientists at IBM, MIT, and Stanford University developed a new challenge that will help verify the capacity of AI agents in finding paths, interacting with objects, and planning tasks efficiently. It is called the ThreeDworld transport challenge.\n\nThis Reinforcement learning is used in robotics and many other applications such as self-driving cars and content recommendation.",
          dynamicLink: "https://gistwebsite.page.link/pbhBC15MpNAZxQKm7",
        },
      ],
    },
  };
  try {
    const document = await Mailer.newsletter({ message });
    return res.send(document);
  } catch (e) {
    res.send(`500 Oops Gotcha!\n${e}`);
  }
};

router.get("/", newsletter);
router.get("/newsletter", newsletter);

app.use("/", router);
app.listen(port, () =>
  console.log(`app listening on port http://localhost:${port}/newsletter`)
);
