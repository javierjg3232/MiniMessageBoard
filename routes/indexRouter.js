const { Router } = require("express");

const indexRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  }
];

indexRouter.get("/", (req, res) => {
    console.log(messages);
  res.render("index", { messages: messages });
});

indexRouter.get("/new", (req, res) => {
  res.render("newMessageForm");
});

indexRouter.post("/new", (req, res) => {
  let newMessage = {
    text: req.body.message,
    user: req.body.user,
    added: new Date(),
  };
  messages.push(newMessage);
  res.redirect("/");
});

indexRouter.get("/message/:id", (req, res) => {
  const id = req.params.id;
  const message = messages[id];
  if (message) {
    res.render("messageDetails", { message: message });
  } else {
    res.status(404).send("Message not found");
  }
});


module.exports = indexRouter;