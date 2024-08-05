import { execFile } from "child_process";
import express from "express";

const app = express();

app.post("/synthesize", (req, res) => {
  const text = req.body.text;
  const output = "audio";

  execFile(
    "python",
    ["synthesize.py", text, output],
    (error, stdout, stderr) => {
      res.sendFile(output);
    }
  );
});

app.listen(3007, () => console.log("Server is running"));
