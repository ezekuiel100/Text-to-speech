import { execFile } from "child_process";
import path from "path";
import cors from "cors";
import express from "express";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/synthesize", (req, res) => {
  const text = req.body.text;
  const outputDir = path.resolve("./audio");
  const outputFile = path.join(outputDir, "output.wav");

  execFile(
    "python",
    ["synthesize.py", text, outputFile],
    (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${error.message}`);
        res.status(500).send("Error during synthesis");
        return;
      }
      console.log(text);
      res.sendFile(outputFile);
    }
  );
});

app.listen(3007, () => console.log("Server is running"));
