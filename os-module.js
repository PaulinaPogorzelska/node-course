const os = require("os");
console.log(os.userInfo());
console.log(`They Stystem uptime is ${os.uptime()} sec`);
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOS);
