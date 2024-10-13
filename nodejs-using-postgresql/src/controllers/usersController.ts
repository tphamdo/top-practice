import * as db from '../db/queries';
import { Request, Response } from 'express';

export async function usersListGet(req: Request, res: Response) {
  console.log(req.query);
  console.log(req.query.search);
  const search = req.query.search;
  let usernames: Array<{ username: string }>;
  try {
    if (!search || typeof search !== 'string') {
      usernames = await db.getAllUsernames();
    } else {
      usernames = await db.getSearchUsernames(search);
    }
  } catch (error) {
    console.error(error);
    usernames = [];
  }
  res.render('index', {
    usernames: usernames
      .map((user: { username: string }) => user.username)
      .join(', '),
  });
}

export function newUserGet(_req: Request, res: Response) {
  res.render('newUser', {});
}

export async function newUserPost(req: Request, res: Response) {
  await db.insertUsername(req.body.username);
  res.redirect('/');
}

export async function deleteUsersGet(_req: Request, res: Response) {
  await db.deleteAllUsernames();
  res.redirect('/');
}
