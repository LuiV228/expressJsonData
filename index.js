import express from "express";

// Express app
const app = express();
// Router
const Router = express.Router();
// Port
const port = +process.env.port || 4000;
// JSON URL
const dataURL = "https://luiv228.github.io/vue_portfolio-lt-json/data/";
// Application Middleware
app.use(Router);
// / => home
Router.get("^/$|/ejd", (req, res) => {
  res.json({ status: res.statusCode, msg: "You're home" });
});
// /educations
Router.get("/skills", async (req, res) => {
  let { skills } = await (await fetch(dataURL)).json();
  res.json({
    status: res.statusCode,
    skills,
  });
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
