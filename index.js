const models = require('./models');

models.User.findAll({
  where: {
    bio: ""
  }
}).then((results)=>{
  results.forEach((result) => {
    // BEAUTIFUL PRINTING
    console.log('===================');
    console.log(result.name);
    console.log(result.email);
    console.log(result.bio);


    // UPDATE EACH ROW
    // result.bio = "";
    // result.save();
  });
});

/*
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
*/
