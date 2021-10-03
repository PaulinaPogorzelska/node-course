const { readFile, writeFile } = require("fs");

readFile("./content/first.txt", "utf-8", (err, res) => {
  if (err) {
    console.log(err);
    return null;
  }
  console.log(res);

  writeFile("./content/check-async.txt", "jhgj", (err, res) => {
    if (err) {
      console.log(err);
      return null;
    }
    console.log(res);
  });
});
