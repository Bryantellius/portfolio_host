for (let i = 1; i <= 100; i++) {
  let fb = "";
  if (i % 3 == 0) {
    fb += "FIZZ";
  }
  if (i % 5 == 0) {
    fb += "BUZZ";
  }
  console.log(`${i} ${fb}`);
}
