// image carousel

const mySiema = new Siema({
  perPage: 1,
  duration: 1000,
  loop: true,
});

setInterval(() => mySiema.next(), 5000);