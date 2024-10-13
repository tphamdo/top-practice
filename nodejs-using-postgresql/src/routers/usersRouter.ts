import { Router } from 'express';
import * as usersController from '../controllers/usersController';
const usersRouter = Router();

usersRouter.get('/', usersController.usersListGet);
usersRouter.get('/new', usersController.newUserGet);
usersRouter.post('/new', usersController.newUserPost);
usersRouter.get('/delete', usersController.deleteUsersGet);

export default usersRouter;
