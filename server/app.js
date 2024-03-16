const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const categoryRoutes = require("./routes/category");
const sub_categoryRoutes = require("./routes/sub_category");
const duaRoutes = require("./routes/dua");

app.use("/api/category", categoryRoutes);
app.use("/api/sub_category", sub_categoryRoutes);
app.use("/dua", duaRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
