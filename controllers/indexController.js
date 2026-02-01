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

const getIndex = (req, res) => {
  res.render('index', { messages });
};

const getNewForm = (req, res) => {
  res.render('newMessageForm');
};

const createNewMessage = (req, res) => {
  const newMessage = {
    text: req.body.message,
    user: req.body.user,
    added: new Date(),
  };
  messages.push(newMessage);
  res.redirect('/');
};

const getMessageDetails = (req, res) => {
  const id = req.params.id;
  const message = messages[id];
  if (message) {
    res.render('messageDetails', { message });
  } else {
    res.status(404).send('Message not found');
  }
};

module.exports = {
    getIndex,
    getNewForm,
    createNewMessage,
    getMessageDetails
};