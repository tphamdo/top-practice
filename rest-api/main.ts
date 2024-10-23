import { Application, Context, Router, RouterContext } from "jsr:@oak/oak@14";

const app = new Application();
const router = new Router();

const users: { [index: string]: any } = {
  1: {
    id: "1",
    username: "Robin Wieruch",
  },
  2: {
    id: "2",
    username: "Dave Davids",
  },
};

const messages: { [index: string]: any } = {
  1: {
    id: "1",
    text: "Hello World",
    userId: "1",
  },
  2: {
    id: "2",
    text: "By World",
    userId: "2",
  },
};

// Define a simple route
router.get("/users", (ctx: RouterContext<"/users">) => {
  ctx.response.body = Object.values(users);
});

router.get("/users/:userId", (ctx: RouterContext<"/users/:userId">) => {
  ctx.response.body = users[ctx.params.userId];
});

router.put("/users/:userId", (ctx: RouterContext<"/users/:userId">) => {
  ctx.response.body = `PUT HTTP request on user ${ctx.params.userId}\n`;
});

router.delete("/users/:userId", (ctx: RouterContext<"/users/:userId">) => {
  ctx.response.body = `DELETE HTTP request on user ${ctx.params.userId}\n`;
});

router.post("/messages", async (ctx: Context) => {
  const body = await ctx.request.body.json();
  const id = crypto.randomUUID();

  const message = {
    id,
    text: body.text,
  };

  messages[id] = message;

  ctx.response.body = message;
});

router.get("/messages", (ctx: RouterContext<"/messages">) => {
  ctx.response.body = Object.values(messages);
});

router.get(
  "/messages/:messageId",
  (ctx: RouterContext<"/messages/:messageId">) => {
    ctx.response.body = messages[ctx.params.messageId];
  },
);
// Use the router
app.use(router.routes());
app.use(router.allowedMethods());

// Start the server
const PORT = 8000;
console.log(`Server is running on http://localhost:${PORT}`);
await app.listen({ port: PORT });
