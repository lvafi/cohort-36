const express = require("express");
const logger = require("morgan");

const app = express();
app.set("view engine", "ejs");
app.use(logger("dev"));

app.get("/", (req, res) => {
  //   res.send("Home page");
  res.render("home");
});

app.get("/students", (req, res) => {
  const students = [
    { name: "Ahmad", bio: "", eyeColour: "Black", hairColour: "black" },
    { name: "Akshay", bio: "", eyeColour: "Black", hairColour: "black" },
    { name: "Amy", bio: "", eyeColour: "Blue", hairColour: "black" },
    { name: "Ashkan", bio: "", eyeColour: "Brown", hairColour: "black" },
    { name: "Ayaka", bio: "", eyeColour: "Brown", hairColour: "black" },
    { name: "Caleb", bio: "", eyeColour: "Brown", hairColour: "Brown" },
    { name: "Helga", bio: "", eyeColour: "green", hairColour: "brown" },
    { name: "Katoora", bio: "", eyeColour: "Brown", hairColour: "black" },
    { name: "Ladan", bio: "", eyeColour: "green", hairColour: "brown" },
    { name: "Selim", bio: "", eyeColour: "amber", hairColour: "brown" },
    { name: "Sandro", bio: "", eyeColour: "brown", hairColour: "brown" },
    { name: "Shurooq", bio: "", eyeColour: "black", hairColour: "black" },
  ];
  res.render("students/index", { students });
});

app.get("/contact_us", (req, res) => {
  // const username = req.query.username;
  const { username } = req.query;
  res.render("contactUs", { username });
});

const PORT = 4000;
const ADDRESS = "localhost"; // 127.0.0.1
app.listen(PORT, ADDRESS, () => {
  console.log(`Server listenning on http://${ADDRESS}:${PORT}`);
});