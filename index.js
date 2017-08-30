const models = require('./models');

models.User.findAll().then((results)=>{
  results.forEach((result) => {
    /*
    console.log('===================');
    console.log(result.name);
    console.log(result.email);
    console.log(result.bio);
    */
    result.bio = "";
    result.save();
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
