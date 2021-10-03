const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf-8");
console.log(first);

const second = () => {
  writeFileSync("./content/second.txt", "lallalla");
};
second();
