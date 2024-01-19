const express = require("express");
const cors = require("cors");

const app = express();

const corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./Models");

app.get("/", (req, res) => {

  db.sequelize.sync()
  .then(() => {
    res.json({ message:"Database synced successfully."});
  })
  .catch((err) => {
    res.json({ message:"Failed to sync database:" + err.message});
  });

  res.json({ message: "Welcome to the application." });
  
});

  
    require("./Routes/AuthenticationRoute")(app);
  

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
