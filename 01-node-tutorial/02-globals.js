// GLOBALS  - NO WINDOW !!!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed
console.log(`current paste is => ${__dirname}`);
console.log(`Initializing file script...`);
let counter = 1;
setInterval(() => {
  //   while (true) {
  //     let counter = 0;
  //     counter++;
  // } dont work on set interval
  console.log(`Counter is running on ${counter}`);
  counter++;
}, 1000);
