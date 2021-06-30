const array = process.argv
const seconds = array.slice(2);

// Loop through Array
const sound = (seconds) => {
  for (const second of seconds) {
    if(!isNaN(Number(second)) && second > 0 ){
      setTimeout(() => {
        process.stdout.write(`${second} seconds `);
        process.stdout.write('\x07');
      }, second * 1000)   // convert into milliseconds
    }
  }
}
  
sound(seconds);