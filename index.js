import express from "express";
import messageRouter from "./routes/messagesRouter.js";
import { dbConnection } from "./config/db.js";
import conversationRouter from "./routes/conversationRouter.js";
import usersRouter from "./routes/usersRouter.js";

const app = express();

dbConnection();


app.use(express.json());

app.get("/", (req, res) => {
    res.json("Chats");
});

// use routes
app.use(messageRouter);
app.use(conversationRouter);
app.use(usersRouter);



const port = process.env.PORT || "1234";
app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});