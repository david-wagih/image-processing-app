import express from "express";
import routes from "./routes/index";
import cors from "cors";

const app = express();

const port = 3000;
app.use(cors());
app.use("/api", routes);

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

export default app;
