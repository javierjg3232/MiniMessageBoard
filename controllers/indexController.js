const { getAllMessages, insertMessage, getMessageById } = require("../db/queries");

const getIndex = async (req, res) => {
  const messages = await getAllMessages();
  res.render('index', { messages });
};

const getNewForm = (req, res) => {
  res.render('newMessageForm');
};

const createNewMessage = async (req, res) => {
  const newMessage = {
    text: req.body.message,
    user: req.body.user,
    added: new Date(),
  };
  await insertMessage(newMessage.text, newMessage.user);
  res.redirect('/');
};

const getMessageDetails = async (req, res) => {
  const id = req.params.id;
  const message = await getMessageById(id);
  res.render('messageDetails', { message });
};

module.exports = {
    getIndex,
    getNewForm,
    createNewMessage,
    getMessageDetails
};