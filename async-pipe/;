const readUser = ({ user }) => {
  console.log(user);
  Promise.resolve(true);
};

const getFolderInfo = ({ folder }) => {
  console.log(folder);
  Promise.resolve(true);
};

const haveWriteAccess = () => Promise.resolve(true);
const uploadToFolder = () => Promise.resolve("Success!");

const asyncPipe =
  (...fns) =>
  (x) =>
    fns.reduce(async (y, f) => await f(x), x);

const uploadFiles = asyncPipe(
  readUser,
  getFolderInfo,
  haveWriteAccess,
  uploadToFolder,
);

const log = () => {
  console.log("then");
};

// gibberish starting variables
const user = "123";
const folder = "456";
const files = ["a", "b", "c"];
uploadFiles({ user, folder, files }).then(log);
