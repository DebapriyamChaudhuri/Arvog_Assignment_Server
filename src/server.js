const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Base route
app.get("/", (req, res) => {
  res.json({ message: "Arvog Assignment Server is running 🚀" });
});

// Import routes
app.use("/api/users", require("./routes/user.routes"));
app.use("/api/categories", require("./routes/category.routes"));
app.use("/api/products", require("./routes/product.routes"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
