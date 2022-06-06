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
