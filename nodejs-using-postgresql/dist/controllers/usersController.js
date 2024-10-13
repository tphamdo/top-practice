"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersListGet = usersListGet;
exports.newUserGet = newUserGet;
exports.newUserPost = newUserPost;
function usersListGet(req, res) {
    console.log('usernames will be logged here - wip');
}
function newUserGet(req, res) {
    res.render('newUser', {});
}
function newUserPost(req, res) {
    console.log('username to be saved: ', req.body.username);
}
