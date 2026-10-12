const { cpSync, mkdirSync, rmSync } = require("node:fs");

rmSync("public", { force: true, recursive: true });
mkdirSync("public/dist", { recursive: true });
mkdirSync("public/src", { recursive: true });

cpSync("index.html", "public/index.html");
cpSync("dist/styles.css", "public/dist/styles.css");
cpSync("src/app.js", "public/src/app.js");
cpSync("src/gradient.js", "public/src/gradient.js");
