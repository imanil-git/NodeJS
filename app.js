import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import postRouter from "./routes/post.route.js";
import authRouter from "./routes/auth.route.js";

const app = express();

app.use(cors({origin: process.env.CLIENT_URL, credentials: true}))
app.use(cookieParser());
app.use(express.json());

app.use("/api/posts", postRouter);
app.use("/api/auth", authRouter);

app.listen(8000, () => {
  console.log("Server is running!");
});
