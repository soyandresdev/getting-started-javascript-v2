var name = 'Andres Hernandez Lozano';
var twitter = 'SoyAndreDev';
var age = 'age';

function whoAmI(name, nickName, age0){
  console.log(`
    Hi, I'm ${name} (@{${nickName}),
    and I'm ${age} years old.
  `);
}

whoAmI(name, twitter, age);