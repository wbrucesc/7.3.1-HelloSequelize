const models = require('./models');

models.User.create({
  name: "Peanut",
  email: "peanut@petco.com",
  bio: "woof woof woof"
});

models.User.create({
  name: "Sarah",
  email: "adasldkfa@asaldfj.com",
  bio: "I'm sarah"
});
