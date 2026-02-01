const { Router } = require('express');
const indexController = require('../controllers/indexController');

const indexRouter = Router();

indexRouter.get('/', indexController.getIndex);

indexRouter.get('/new', indexController.getNewForm);

indexRouter.post('/new', indexController.createNewMessage);

indexRouter.get('/message/:id', indexController.getMessageDetails);

module.exports = indexRouter;