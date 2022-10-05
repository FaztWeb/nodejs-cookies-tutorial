import express from "express";
import cookieParser from "cookie-parser";

const app = express();

app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World 3!");
});

app.get("/setcookie", (req, res) => {
  // cookie 7 days
  res.cookie("my cookie name", "my cookie", {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    // expires: new Date("2022-12-31"),
  });
  res.send("Hello World 3!");
});

app.get("/getcookies", (req, res) => {
  console.log(req.cookies);
  res.send("reading cookies");
});

app.get("/deletecookie", (req, res) => {
  console.log(req.cookies);
  res.clearCookie("my cookie name");
  res.send("deleting cookies");
});

app.listen(3000);
console.log(`Server running on port 3000`);
