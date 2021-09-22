const time = process.argv.slice(2);
console.log(time);
time.sort();
for (let i= 0; i < time.length ; i++) {
  if(Number(time[i])<0 || !Number(time[i])) continue;
  setTimeout(() => {
    process.stdout.write('\x07');
    console.log(`${time[i]} bing`);
  },1000 * time[i]);

}
